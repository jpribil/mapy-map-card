import { LitElement, html, TemplateResult, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import * as L from "leaflet";

import { cardStyles } from "./style";
import { subscribeHistoryStream } from "./history";
import {
  CardConfig,
  EntityConfig,
  HistoryPoint,
  HistoryPointType,
  HistoryStreamLocation,
  TileStyle,
} from "./types";
import type { HassState, HomeAssistant } from "./ha";
import {
  TILE_STYLES,
  TILE_STYLE_LABELS,
  entityPosition,
  friendlyName,
  getLocationEntities,
  isDarkMode,
  normalizeEntities,
  resolveEntityColor,
} from "./utils";
import { parseHistoryStates } from "./history";

const TILE_MAX_NATIVE_ZOOM: Record<TileStyle, number> = {
  basic: 19,
  outdoor: 19,
  winter: 19,
  aerial: 19,
};

const DEFAULT_TILE_ATTRIBUTION =
  '&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>';

const HISTORY_RANGE_OPTIONS: Array<{ label: string; hours: number }> = [
  { label: "24 h", hours: 24 },
  { label: "12 h", hours: 12 },
  { label: "6 h", hours: 6 },
  { label: "2 h", hours: 2 },
  { label: "1 h", hours: 1 },
  { label: "Off", hours: 0 },
];

/**
 * Unobtrusive top-right control (same visual family as Leaflet's built-in
 * layers control) to switch the history trail window live, without
 * touching the card config.
 */
class HistoryRangeControl extends L.Control {
  private _list?: HTMLElement;

  constructor(
    private readonly getSelected: () => number,
    private readonly onSelect: (hours: number) => void
  ) {
    super({ position: "topright" });
  }

  public override onAdd(): HTMLElement {
    const container = L.DomUtil.create("div", "leaflet-control-layers");
    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.disableScrollPropagation(container);

    const toggle = L.DomUtil.create("a", "leaflet-control-layers-toggle mmc-history-toggle", container);
    toggle.href = "#";
    toggle.title = "History range";
    toggle.setAttribute("role", "button");
    L.DomEvent.on(toggle, "click", (ev) => {
      L.DomEvent.preventDefault(ev);
      container.classList.toggle("leaflet-control-layers-expanded");
    });

    this._list = L.DomUtil.create("section", "leaflet-control-layers-list", container);
    this.update();
    return container;
  }

  public update(): void {
    if (!this._list) return;
    this._list.textContent = "";
    const selected = this.getSelected();
    for (const opt of HISTORY_RANGE_OPTIONS) {
      const label = L.DomUtil.create("label", "", this._list);
      const input = L.DomUtil.create("input", "leaflet-control-layers-selector", label) as HTMLInputElement;
      input.type = "radio";
      input.name = "mmc-history-range";
      input.checked = selected === opt.hours;
      L.DomEvent.on(input, "change", () => this.onSelect(opt.hours));
      label.appendChild(document.createTextNode(" " + opt.label));
    }
  }
}

@customElement("mapy-map-card")
export class MapyMapCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: CardConfig;
  @state() private _error?: string;

  private _map?: L.Map;
  private _tileLayer?: L.TileLayer;
  private _tileUrl?: string;
  private _tileStyleLayers?: Partial<Record<TileStyle, L.TileLayer>>;
  private _tileSwitchKey = "";
  private _appliedTileStyle?: TileStyle;
  private _layersControl?: L.Control.Layers;
  private _historyControl?: HistoryRangeControl;
  private _hoursOverride?: number;
  private _appliedConfigHours?: number;
  private _markerLayer?: L.LayerGroup;
  private _zoneLayer?: L.LayerGroup;
  private _historyLayer?: L.LayerGroup;
  private _markers = new Map<string, L.Marker>();
  private _markerColors = new Map<string, string>();
  private _history = new Map<string, HistoryPoint[]>();
  private _unsubHistory?: Promise<() => void>;
  private _historyStreamDataReceived = false;
  private _historyFallbackTimer?: ReturnType<typeof setTimeout>;
  private _historyKey = "";
  private _zonesKey = "";
  private _appliedFitKey = "";
  private _pendingFit?: { key: string; bounds: L.LatLngBounds };
  private _resizeObserver?: ResizeObserver;
  private _onVisibilityChange = () => {
    // when the tab/dashboard becomes visible again Leaflet may need a kick
    if (document.visibilityState === "visible") {
      this._map?.invalidateSize({ pan: false });
      this._applyFit();
      this._healthCheck();
    }
  };
  private _onWindowResize = () => {
    this._map?.invalidateSize({ pan: false });
  };

  public static async getConfigElement(): Promise<HTMLElement> {
    await import("./editor");
    return document.createElement("mapy-map-card-editor");
  }

  public static getStubConfig(hass?: HomeAssistant): CardConfig {
    const entities = hass ? getLocationEntities(hass).slice(0, 5) : [];
    return {
      type: "custom:mapy-map-card",
      entities,
      hours_to_show: 24,
      show_zones: true,
    };
  }

  public setConfig(config: CardConfig): void {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid configuration");
    }
    const hasTiles = !!config.api_key?.trim() || !!config.tile_url?.trim();
    this._error = hasTiles
      ? undefined
      : "Missing Mapy.com API key – set api_key in the card editor (free at developer.mapy.com).";

    this._config = {
      hours_to_show: 24,
      show_zones: true,
      fit_bounds: true,
      theme_mode: "auto",
      tile_style: "basic",
      aspect_ratio: "1:1",
      ...config,
    };

    this._resetHistory();
    if (this._map) {
      this._updateTileLayer();
      this._processHass();
    }
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    // Lit calls firstUpdated only once per element lifetime. When HA
    // re-attaches the card (dashboard edit, view switch, tab restore) the map
    // must be rebuilt manually, otherwise it stays empty until page reload.
    if (this._config && !this._error && !this._map) {
      this.updateComplete.then(() => {
        if (this.isConnected && this._config && !this._map && !this._error) {
          this._initMap();
          this._processHass();
        }
      });
    }
  }

  public override disconnectedCallback(): void {
    // full reset – after re-attach everything must be re-created and
    // the history subscription re-established
    this._resetHistory();
    this._appliedFitKey = "";
    this._pendingFit = undefined;
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._onWindowResize);
    this._map?.remove();
    this._map = undefined;
    this._tileLayer = undefined;
    this._tileUrl = undefined;
    this._tileStyleLayers = undefined;
    this._tileSwitchKey = "";
    this._appliedTileStyle = undefined;
    this._layersControl = undefined;
    this._historyControl = undefined;
    this._hoursOverride = undefined;
    this._appliedConfigHours = undefined;
    this._zonesKey = "";
    this._markers.clear();
    this._markerColors.clear();
    super.disconnectedCallback();
  }

  protected override render(): TemplateResult {
    if (!this._config) return html``;
    return html`
      <style>${cardStyles}</style>
      <ha-card>
        ${this._config.title ? html`<div class="mmc-header">${this._config.title}</div>` : nothing}
        ${this._error
          ? html`<div class="mmc-error">${this._error}</div>`
          : html`
              <div class="mmc-map-wrapper" style=${this._aspectStyle()}>
                <div class="mmc-map" id="map"></div>
              </div>
            `}
      </ha-card>
    `;
  }

  protected override firstUpdated(): void {
    if (this._error) return;
    if (!this._map) this._initMap();
    this._processHass();
  }

  protected override willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);
    if (changedProps.has("hass")) {
      this._processHass();
    }
  }

  protected override updated(): void {
    // container may resize when header/error toggles between renders
    this._map?.invalidateSize();
  }

  private _aspectStyle(): string {
    const ratio = this._config?.aspect_ratio?.trim();
    if (!ratio || ratio.toLowerCase() === "auto") return "";
    const m = /^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(ratio);
    if (m) return `aspect-ratio:${m[1]}/${m[2]};`;
    // fall back to raw CSS height value (e.g. "400px")
    return `height:${ratio};`;
  }

  // ------------------------------------------------------------------ map

  private _initMap(): void {
    const container = this.renderRoot.querySelector<HTMLDivElement>("#map");
    if (!container) return;

    this._map = L.map(container, {
      zoomControl: true,
      attributionControl: false,
      worldCopyJump: true,
    });

    // layer attributions (Mapy.com / Seznam) without the default "Leaflet" link
    L.control.attribution({ prefix: false }).addTo(this._map);

    this._zoneLayer = L.layerGroup().addTo(this._map);
    this._historyLayer = L.layerGroup().addTo(this._map);
    this._markerLayer = L.layerGroup().addTo(this._map);

    this._resizeObserver = new ResizeObserver(() => {
      this._map?.invalidateSize();
      // container may only get its real size after the initial layout,
      // so retry deferred fit-bounds on every resize
      this._applyFit();
    });
    this._resizeObserver.observe(container);

    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._onWindowResize);

    // Set an initial view right away – until the map "loads" (first setView),
    // Leaflet queues every added layer and renders nothing.
    const hassCoords = this.hass?.config;
    let center: L.LatLngTuple | undefined =
      typeof hassCoords?.latitude === "number" && typeof hassCoords?.longitude === "number"
        ? [hassCoords.latitude, hassCoords.longitude]
        : undefined;
    if (!center) {
      for (const st of Object.values(this.hass?.states ?? {})) {
        const pos = entityPosition(st);
        if (pos) {
          center = [pos.lat, pos.lon];
          break;
        }
      }
    }
    this._map.setView(
      center ?? [49.8032, 15.4811],
      this._config?.default_zoom ?? 12,
      { animate: false }
    );

    this._updateTileLayer();
    this._historyControl = new HistoryRangeControl(
      () => this._effectiveHours(),
      (hours) => this._setHoursOverride(hours)
    ).addTo(this._map);

    // First render of the dashboard can race with card initialization
    // (zero-size container, throttled layout, lazy panels). Re-check a few
    // times and kick Leaflet if tiles or markers did not appear.
    for (const delay of [300, 1000, 3000, 8000]) {
      setTimeout(() => this._healthCheck(), delay);
    }
  }

  private _healthCheck(): void {
    if (!this._map || !this.isConnected) return;
    try {
      const container = this._map.getContainer();
      if (!container.clientWidth || !container.clientHeight) return;
      if (container.querySelectorAll("img.leaflet-tile").length === 0) {
        this._map.invalidateSize({ pan: false });
        this._applyFit();
      }
      const hasMarkers = Array.from(this._markers.values()).some((m) => !!m.getIcon());
      const rendered = container.querySelectorAll(".leaflet-marker-pane .mmc-dot, .leaflet-marker-pane .mmc-picture-icon");
      if (hasMarkers && rendered.length < this._markers.size) {
        this._processHass();
      }
    } catch {
      // never let the watchdog break the map
    }
  }

  /** Mapy.com tile URL for one style, given a already-trimmed API key/language. */
  private _tileStyleUrl(style: TileStyle, apiKey: string, lang: string): string {
    return (
      `https://api.mapy.com/v1/maptiles/${style}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(apiKey)}` +
      (lang ? `&lang=${encodeURIComponent(lang)}` : "")
    );
  }

  private _teardownStyleSwitcher(): void {
    if (this._layersControl) {
      this._map?.removeControl(this._layersControl);
      this._layersControl = undefined;
    }
    if (this._tileStyleLayers) {
      for (const layer of Object.values(this._tileStyleLayers)) {
        if (layer && this._map?.hasLayer(layer)) this._map.removeLayer(layer);
      }
      this._tileStyleLayers = undefined;
    }
    this._tileSwitchKey = "";
    this._appliedTileStyle = undefined;
  }

  private _updateTileLayer(): void {
    if (!this._map || !this._config) return;
    const cfg = this._config;
    const customUrl = cfg.tile_url?.trim();

    if (customUrl) {
      this._teardownStyleSwitcher();
      if (customUrl === this._tileUrl) return;
      this._tileUrl = customUrl;
      if (this._tileLayer) this._map.removeLayer(this._tileLayer);
      this._tileLayer = L.tileLayer(customUrl, {
        attribution: cfg.tile_attribution ?? DEFAULT_TILE_ATTRIBUTION,
        maxZoom: 21,
        maxNativeZoom: 19,
      });
      this._tileLayer.addTo(this._map);
      return;
    }

    const apiKey = cfg.api_key?.trim();
    if (!apiKey) return;
    const lang = cfg.language?.trim() ?? "";
    const switchKey = `${apiKey}|${lang}|${cfg.tile_attribution ?? ""}`;
    const wantedStyle: TileStyle = cfg.tile_style ?? "basic";

    // api key / language changed (or first run) -> (re)build every style as a
    // switchable base layer and add the unobtrusive top-right style control
    if (switchKey !== this._tileSwitchKey) {
      this._teardownStyleSwitcher();
      this._tileSwitchKey = switchKey;

      const layers: Partial<Record<TileStyle, L.TileLayer>> = {};
      for (const style of TILE_STYLES) {
        layers[style] = L.tileLayer(this._tileStyleUrl(style, apiKey, lang), {
          attribution: cfg.tile_attribution ?? DEFAULT_TILE_ATTRIBUTION,
          maxZoom: 21,
          maxNativeZoom: TILE_MAX_NATIVE_ZOOM[style] ?? 19,
        });
      }
      this._tileStyleLayers = layers;

      const named: Record<string, L.Layer> = {};
      for (const style of TILE_STYLES) named[TILE_STYLE_LABELS[style]] = layers[style]!;
      this._layersControl = L.control
        .layers(named, undefined, { position: "topright", collapsed: true })
        .addTo(this._map);

      this._tileLayer = undefined;
    }

    // switch the active base layer whenever the configured style changes
    // (a style picked live via the control is left alone otherwise)
    if (this._appliedTileStyle !== wantedStyle) {
      this._appliedTileStyle = wantedStyle;
      const next = this._tileStyleLayers?.[wantedStyle];
      if (next && next !== this._tileLayer) {
        if (this._tileLayer) this._map.removeLayer(this._tileLayer);
        next.addTo(this._map);
        this._tileLayer = next;
      }
    }
    this._tileUrl = this._tileStyleUrl(wantedStyle, apiKey, lang);
  }

  private _processHass(): void {
    if (!this._map || !this.hass || !this._config || this._error) return;
    this._updateDarkMode();
    this._updateZones();
    this._updateMarkers();
    this._updateHistorySubscription();
    this._maybeFitBounds();
  }

  private _resolvedEntities(): EntityConfig[] {
    const hass = this.hass!;
    const configured = this._config!.entities?.length
      ? normalizeEntities(this._config!.entities)
      : getLocationEntities(hass).map((entityId) => ({ entity: entityId }));
    return configured.filter((cfg) => !!hass.states[cfg.entity]);
  }

  private _updateDarkMode(): void {
    const dark = isDarkMode(this.hass!, this._config!.theme_mode);
    this._map!.getContainer().classList.toggle("mmc-dark", dark);
  }

  // -------------------------------------------------------------- markers

  private _updateMarkers(): void {
    const layer = this._markerLayer!;
    const seen = new Set<string>();

    this._resolvedEntities().forEach((cfg, index) => {
      const st = this.hass!.states[cfg.entity];
      const pos = entityPosition(st);
      if (!pos) return;
      seen.add(cfg.entity);

      const entityColor = resolveEntityColor(this._config, cfg.entity, index);
      let marker = this._markers.get(cfg.entity);
      if (!marker) {
        marker = L.marker([pos.lat, pos.lon], {
          icon: this._buildIcon(cfg, st, entityColor),
          keyboard: false,
        });
        marker.on("click", () => this._openMoreInfo(cfg.entity));
        marker.bindTooltip(friendlyName(cfg, st), {
          permanent: true,
          direction: "right",
          offset: [12, 0],
          className: "mmc-label",
        });
        marker.addTo(layer);
        this._markers.set(cfg.entity, marker);
        this._markerColors.set(cfg.entity, entityColor);
      } else {
        marker.setLatLng([pos.lat, pos.lon]);
        if (this._markerColors.get(cfg.entity) !== entityColor) {
          this._markerColors.set(cfg.entity, entityColor);
          marker.setIcon(this._buildIcon(cfg, st, entityColor));
        }
      }
    });

    for (const [entityId, marker] of this._markers) {
      if (!seen.has(entityId)) {
        layer.removeLayer(marker);
        marker.remove();
        this._markers.delete(entityId);
        this._markerColors.delete(entityId);
      }
    }
  }

  private _buildIcon(cfg: EntityConfig, st: HassState, color: string): L.DivIcon {
    const picture = cfg.picture || st.attributes?.entity_picture;
    if (picture && typeof picture === "string") {
      return L.divIcon({
        className: "mmc-icon-wrapper",
        html: `<img class="mmc-picture-icon" src="${encodeURI(picture)}" alt="">`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
    }
    return L.divIcon({
      className: "mmc-icon-wrapper",
      html: `<span class="mmc-dot" style="background:${color}"></span>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  }

  private _openMoreInfo(entityId: string): void {
    const event = new Event("hass-more-info", { bubbles: true, composed: true }) as Event & {
      detail?: { entityId: string };
    };
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  // ---------------------------------------------------------------- zones

  private _updateZones(): void {
    const zones = Object.values(this.hass!.states).filter(
      (st) => st.entity_id.startsWith("zone.") && entityPosition(st)
    );
    const key = JSON.stringify(zones.map((z) => [z.entity_id, z.state, z.attributes]));
    if (key === this._zonesKey) return;
    this._zonesKey = key;

    const layer = this._zoneLayer!;
    layer.clearLayers();

    if (this._config!.show_zones === false) return;

    // SVG presentation attributes cannot use CSS var(), resolve it manually
    const accent =
      getComputedStyle(this).getPropertyValue("--accent-color").trim() || "#ff9800";

    for (const zone of zones) {
      const pos = entityPosition(zone)!;
      const radius = Math.max(0, Number(zone.attributes.radius ?? 100));
      const passive = !!zone.attributes.passive;
      const color = passive ? "#9e9e9e" : accent;
      const name = String(zone.attributes.friendly_name ?? zone.entity_id);

      L.circle([pos.lat, pos.lon], {
        radius,
        color,
        weight: 1,
        fillColor: color,
        fillOpacity: 0.1,
      })
        .bindTooltip(name, {
          permanent: true,
          direction: "center",
          className: "mmc-label",
        })
        .addTo(layer);
    }
  }

  // -------------------------------------------------------------- history

  private _resetHistory(): void {
    this._teardownHistory();
    if (this._historyFallbackTimer !== undefined) {
      clearTimeout(this._historyFallbackTimer);
      this._historyFallbackTimer = undefined;
    }
    this._historyStreamDataReceived = false;
    this._history = new Map();
    this._historyKey = "";
    this._historyLayer?.clearLayers();
  }

  private _teardownHistory(): void {
    if (!this._unsubHistory) return;
    this._unsubHistory.then((unsub) => unsub()).catch(() => {});
    this._unsubHistory = undefined;
  }

  /** Config default, unless overridden live via the history-range control. */
  private _effectiveHours(): number {
    const configHours = Number(this._config?.hours_to_show ?? 24);
    if (this._appliedConfigHours !== configHours) {
      this._appliedConfigHours = configHours;
      this._hoursOverride = undefined;
    }
    return this._hoursOverride ?? configHours;
  }

  private _setHoursOverride(hours: number): void {
    if (this._hoursOverride === hours) return;
    this._hoursOverride = hours;
    this._historyControl?.update();
    if (this._map) this._updateHistorySubscription();
  }

  private _updateHistorySubscription(): void {
    const hours = this._effectiveHours();
    this._historyControl?.update();
    const ids = this._resolvedEntities().map((cfg) => cfg.entity).sort();

    if (!(hours > 0) || ids.length === 0) {
      if (this._historyKey) this._resetHistory();
      return;
    }

    const key = `${hours}|${ids.join(",")}`;
    if (key === this._historyKey) return;
    this._resetHistory();
    this._historyKey = key;

    this._unsubHistory = subscribeHistoryStream(this.hass!, ids, hours, (locations) => {
      this._onHistoryLocations(locations);
      this._historyStreamDataReceived = true;
    }    ).catch(() => {
      // history integration unavailable or subscription rejected –
      // fall back to a one-shot query so trails still render
      this._unsubHistory = undefined;
      this._fetchHistoryFallback(ids, hours);
      return () => {};
    });

    // If the stream stays silent for a while (e.g. recorder restarted,
    // subscription dropped silently), load the trail once via REST-style query.
    if (!this._historyFallbackTimer) {
      this._historyFallbackTimer = setTimeout(() => {
        this._historyFallbackTimer = undefined;
        if (!this._historyStreamDataReceived && this.isConnected) {
          this._fetchHistoryFallback(ids, hours);
        }
      }, 8000);
    }
  }

  private _fetchHistoryFallback(entityIds: string[], hours: number): void {
    try {
      const conn = this.hass?.connection;
      if (!conn) return;
      const startTime = new Date(Date.now() - hours * 3600 * 1000).toISOString();
      conn
        .sendMessagePromise({
          type: "history/history_during_period",
          start_time: startTime,
          end_time: new Date().toISOString(),
          entity_ids: entityIds,
          minimal_response: true,
          significant_changes_only: true,
        })
        .then((data: unknown) => {
          const locations = parseHistoryStates(
            data as Record<string, Array<Record<string, any>>>,
            entityIds
          );
          if (locations.length > 0) {
            this._onHistoryLocations(locations);
            this._historyStreamDataReceived = true;
          }
        })
        .catch(() => {
          // recorder unavailable – stay with live positions only
        });
    } catch {
      // never break rendering because of history issues
    }
  }

  private _onHistoryLocations(locations: HistoryStreamLocation[]): void {
    for (const loc of locations) {
      if (!loc.map_state || loc.map_state.length < 2) continue;
      const [lat, lon] = loc.map_state;
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      const points = this._history.get(loc.entity_id) ?? [];
      const last = points[points.length - 1];
      // same place at the same time -> duplicate; same place later on -> revisit
      if (
        !last ||
        last.lat !== lat ||
        last.lon !== lon ||
        (loc.ts !== undefined && last.ts !== loc.ts)
      ) {
        points.push({ lat, lon, ts: loc.ts });
        if (points.length > 3000) points.splice(0, points.length - 3000);
        this._history.set(loc.entity_id, points);
      }
    }
    this._renderHistory();
  }

  private _renderHistory(): void {
    const layer = this._historyLayer!;
    layer.clearLayers();
    const cfg = this._config!;

    const lineWidth = Math.max(1, Number(cfg.history_line_width ?? 4));
    const lineOpacity = Math.min(1, Math.max(0.05, Number(cfg.history_line_opacity ?? 0.65)));
    const pointType: HistoryPointType = cfg.history_point_type ?? "dot";

    this._resolvedEntities().forEach((ent, index) => {
      const points = this._history.get(ent.entity);
      if (!points || points.length < 2) return;

      const entityColor = resolveEntityColor(cfg, ent.entity, index);
      const lineColor = cfg.history_line_color?.trim() || entityColor;
      const pointColor = cfg.history_point_color?.trim() || entityColor;

      L.polyline(
        points.map((p) => [p.lat, p.lon] as L.LatLngTuple),
        { color: lineColor, weight: lineWidth, opacity: lineOpacity, interactive: false }
      ).addTo(layer);

      if (pointType === "none") return;

      for (const p of points) {
        let overlay: L.Layer | undefined;
        if (pointType === "square") {
          overlay = L.marker([p.lat, p.lon], {
            icon: L.divIcon({
              className: "mmc-icon-wrapper",
              html: `<span class="mmc-trail-square" style="background:${pointColor}"></span>`,
              iconSize: [8, 8],
              iconAnchor: [4, 4],
            }),
            keyboard: false,
          });
        } else if (pointType === "ring") {
          overlay = L.circleMarker([p.lat, p.lon], {
            radius: 4,
            color: pointColor,
            weight: 2,
            fill: false,
            opacity: 1,
          });
        } else {
          overlay = L.circleMarker([p.lat, p.lon], {
            radius: 3.5,
            color: "#ffffff",
            weight: 1,
            fillColor: pointColor,
            fillOpacity: 1,
            opacity: 1,
          });
        }

        if (p.ts !== undefined) {
          overlay.bindTooltip(this._formatTs(p.ts), {
            direction: "top",
            offset: pointType === "square" ? [0, -6] : [0, -4],
            className: "mmc-trail-tip",
          });
        }
        overlay.addTo(layer);
      }
    });
  }

  private _formatTs(ms: number): string {
    try {
      const locale =
        (this.hass as any)?.locale?.language ||
        (typeof navigator !== "undefined" ? navigator.language : "") ||
        "en";
      return new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format(new Date(ms));
    } catch {
      return new Date(ms).toLocaleString();
    }
  }

  // ------------------------------------------------------------ fit bounds

  private _maybeFitBounds(): void {
    if (!this._config!.fit_bounds) return;

    const points: L.LatLngTuple[] = [];
    const ids: string[] = [];
    this._markers.forEach((marker, id) => {
      const ll = marker.getLatLng();
      points.push([ll.lat, ll.lng]);
      ids.push(id);
    });
    Object.keys(this.hass!.states)
      .filter((id) => id.startsWith("zone.") && this._config!.show_zones !== false)
      .forEach((id) => {
        const pos = entityPosition(this.hass!.states[id]);
        if (pos) {
          points.push([pos.lat, pos.lon]);
          ids.push(id);
        }
      });

    if (points.length === 0) return;
    const key = ids.sort().join(",");
    if (key === this._appliedFitKey || key === this._pendingFit?.key) return;
    this._pendingFit = { key, bounds: L.latLngBounds(points) };
    this._applyFit();
  }

  private _applyFit(): void {
    if (!this._map || !this._pendingFit) return;
    const container = this._map.getContainer();
    // defer until the container has a real layout; ResizeObserver retries
    if (!container.clientWidth || !container.clientHeight) return;
    const { key, bounds } = this._pendingFit;
    this._pendingFit = undefined;
    if (key === this._appliedFitKey) return;
    this._appliedFitKey = key;

    const maxZoom = this._config!.default_zoom ?? 19;
    const center = bounds.getCenter();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    // all points at (roughly) the same spot -> zoom in as far as possible
    const coLocated = ne.distanceTo(sw) < 50;
    if (coLocated) {
      this._map.setView(center, maxZoom);
    } else {
      this._map.fitBounds(bounds, { padding: [48, 48], maxZoom });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mapy-map-card": MapyMapCard;
  }
}
