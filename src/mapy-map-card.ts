import { LitElement, html, TemplateResult, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import * as L from "leaflet";

import { cardStyles } from "./style";
import { subscribeHistoryStream } from "./history";
import { CardConfig, EntityConfig, HistoryStreamLocation } from "./types";
import type { HassState, HomeAssistant } from "./ha";
import {
  colorForIndex,
  entityPosition,
  friendlyName,
  getLocationEntities,
  isDarkMode,
  normalizeEntities,
} from "./utils";

const TILE_MAX_NATIVE_ZOOM: Record<string, number> = {
  basic: 19,
  outdoor: 19,
  winter: 19,
  aerial: 19,
};

const DEFAULT_TILE_ATTRIBUTION =
  '&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>';

@customElement("mapy-map-card")
export class MapyMapCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: CardConfig;
  @state() private _error?: string;

  private _map?: L.Map;
  private _tileLayer?: L.TileLayer;
  private _tileUrl?: string;
  private _markerLayer?: L.LayerGroup;
  private _zoneLayer?: L.LayerGroup;
  private _historyLayer?: L.LayerGroup;
  private _markers = new Map<string, L.Marker>();
  private _history = new Map<string, [number, number][]>();
  private _unsubHistory?: Promise<() => void>;
  private _historyKey = "";
  private _zonesKey = "";
  private _appliedFitKey = "";
  private _pendingFit?: { key: string; bounds: L.LatLngBounds };
  private _resizeObserver?: ResizeObserver;

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
      aspect_ratio: "16:9",
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
  }

  public override disconnectedCallback(): void {
    this._teardownHistory();
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    this._map?.remove();
    this._map = undefined;
    this._markers.clear();
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
    this._initMap();
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
      attributionControl: true,
      worldCopyJump: true,
    });

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

    this._updateTileLayer();
  }

  private _updateTileLayer(): void {
    if (!this._map || !this._config) return;
    const cfg = this._config;
    const apiKey = cfg.api_key?.trim();
    const style = cfg.tile_style ?? "basic";

    const url =
      cfg.tile_url?.trim() ||
      `https://api.mapy.com/v1/maptiles/${style}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(apiKey!)}` +
        (cfg.language?.trim() ? `&lang=${encodeURIComponent(cfg.language.trim())}` : "");
    if (url === this._tileUrl) return;
    this._tileUrl = url;

    if (this._tileLayer) {
      this._map.removeLayer(this._tileLayer);
    }
    this._tileLayer = L.tileLayer(url, {
      attribution: cfg.tile_attribution ?? DEFAULT_TILE_ATTRIBUTION,
      maxZoom: 21,
      maxNativeZoom: cfg.tile_url ? 19 : TILE_MAX_NATIVE_ZOOM[style] ?? 19,
    });
    this._tileLayer.addTo(this._map);
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

      let marker = this._markers.get(cfg.entity);
      if (!marker) {
        marker = L.marker([pos.lat, pos.lon], {
          icon: this._buildIcon(cfg, st, colorForIndex(index)),
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
      } else {
        marker.setLatLng([pos.lat, pos.lon]);
      }
    });

    for (const [entityId, marker] of this._markers) {
      if (!seen.has(entityId)) {
        layer.removeLayer(marker);
        marker.remove();
        this._markers.delete(entityId);
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
    this._history = new Map();
    this._historyKey = "";
    this._historyLayer?.clearLayers();
  }

  private _teardownHistory(): void {
    if (!this._unsubHistory) return;
    this._unsubHistory.then((unsub) => unsub()).catch(() => {});
    this._unsubHistory = undefined;
  }

  private _updateHistorySubscription(): void {
    const hours = Number(this._config!.hours_to_show ?? 24);
    const ids = this._resolvedEntities().map((cfg) => cfg.entity).sort();

    if (!(hours > 0) || ids.length === 0) {
      if (this._historyKey) this._resetHistory();
      return;
    }

    const key = `${hours}|${ids.join(",")}`;
    if (key === this._historyKey) return;
    this._resetHistory();
    this._historyKey = key;

    this._unsubHistory = subscribeHistoryStream(this.hass!, ids, hours, (locations) =>
      this._onHistoryLocations(locations)
    ).catch(() => {
      // history integration unavailable or subscription rejected
      this._unsubHistory = undefined;
      this._historyKey = "";
      return undefined as unknown as () => void;
    });
  }

  private _onHistoryLocations(locations: HistoryStreamLocation[]): void {
    for (const loc of locations) {
      if (!loc.map_state || loc.map_state.length < 2) continue;
      const [lat, lon] = loc.map_state;
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      const points = this._history.get(loc.entity_id) ?? [];
      const last = points[points.length - 1];
      if (!last || last[0] !== lat || last[1] !== lon) {
        points.push([lat, lon]);
        if (points.length > 3000) points.splice(0, points.length - 3000);
        this._history.set(loc.entity_id, points);
      }
    }
    this._renderHistory();
  }

  private _renderHistory(): void {
    const layer = this._historyLayer!;
    layer.clearLayers();

    this._resolvedEntities().forEach((cfg, index) => {
      const points = this._history.get(cfg.entity);
      if (!points || points.length < 2) return;
      L.polyline(points as L.LatLngExpression[], {
        color: colorForIndex(index),
        weight: 4,
        opacity: 0.65,
        interactive: false,
      }).addTo(layer);
    });
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

    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
      this._map.setView(bounds.getCenter(), this._config!.default_zoom ?? 14);
    } else {
      this._map.fitBounds(bounds, {
        padding: [48, 48],
        maxZoom: this._config!.default_zoom ?? 16,
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mapy-map-card": MapyMapCard;
  }
}
