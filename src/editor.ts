import { LitElement, html, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { CardConfig, EntityConfig, EntityConfigOrString, HistoryPointType, TileStyle } from "./types";
import type { HomeAssistant } from "./ha";
import { TILE_STYLES, normalizeEntities, resolveEntityColor } from "./utils";

let pickerPromise: Promise<boolean> | null = null;

const CARD_TYPE = "mapy-map-card";

/**
 * Try to make HA's own `ha-entity-picker` available by instantiating an
 * entities-card editor once (it imports all form components). Falls back
 * to a plain textarea when unavailable.
 */
export function loadEntityPicker(): Promise<boolean> {
  if (customElements.get("ha-entity-picker")) return Promise.resolve(true);
  if (pickerPromise) return pickerPromise;

  pickerPromise = (async () => {
    try {
      if (typeof window.loadCardHelpers !== "function") return false;
      const helpers = await window.loadCardHelpers();
      if (typeof helpers?.createCardElementEditor !== "function") return false;

      const el = helpers.createCardElementEditor({ type: "entities", entities: [] });
      el.style.display = "none";
      document.body.appendChild(el);

      const start = Date.now();
      while (!customElements.get("ha-entity-picker") && Date.now() - start < 5000) {
        await new Promise((r) => setTimeout(r, 100));
      }
      el.remove();
      return !!customElements.get("ha-entity-picker");
    } catch {
      return false;
    }
  })();

  return pickerPromise;
}

@customElement("mapy-map-card-editor")
export class MapyMapCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config: CardConfig = { type: CARD_TYPE };
  @state() private _pickerReady = false;

  public setConfig(config: CardConfig): void {
    this._config = { ...config };
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    loadEntityPicker().then((ok) => {
      this._pickerReady = ok;
    });
  }

  protected override render(): TemplateResult {
    const cfg = this._config;
    return html`
      <style>
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
        }
        .full {
          grid-column: 1 / -1;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
          color: var(--secondary-text-color, #666);
        }
        input[type="text"],
        input[type="number"],
        input[type="password"],
        select,
        textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 8px;
          border: 1px solid var(--divider-color, #ccc);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #000);
          font: inherit;
        }
        textarea {
          min-height: 90px;
          resize: vertical;
          font-family: var(--code-font-family, monospace);
        }
        .check {
          flex-direction: row !important;
          align-items: center;
          gap: 8px !important;
          font-size: 14px !important;
          color: var(--primary-text-color, #000) !important;
        }
        input[type="color"] {
          width: 100%;
          height: 34px;
          padding: 2px;
          border: 1px solid var(--divider-color, #ccc);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          cursor: pointer;
        }
        .section {
          grid-column: 1 / -1;
          margin-top: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color, #000);
          border-bottom: 1px solid var(--divider-color, #ddd);
          padding-bottom: 4px;
        }
        .entity-row {
          display: flex;
          gap: 8px;
          align-items: center;
          grid-column: 1 / -1;
        }
        .entity-row ha-entity-picker {
          flex: 1;
        }
        .hint {
          grid-column: 1 / -1;
          font-size: 12px;
          color: var(--secondary-text-color, #666);
        }
        .hint a {
          color: var(--primary-color, #03a9f4);
        }
        button.remove {
          border: none;
          background: transparent;
          color: var(--error-color, #db4437);
          font-size: 16px;
          cursor: pointer;
          padding: 4px 8px;
        }
      </style>
      <div class="grid">
        <label class="full">
          Title
          <input
            type="text"
            .value=${cfg.title ?? ""}
            @input=${(e: InputEvent) => this._patch({ title: (e.target as HTMLInputElement).value || undefined })}
          />
        </label>

        <label class="full">
          Mapy.com API key
          <input
            type="password"
            placeholder="from developer.mapy.com"
            .value=${cfg.api_key ?? ""}
            @input=${(e: InputEvent) => this._patch({ api_key: (e.target as HTMLInputElement).value })}
          />
        </label>

        <label>
          Tile style
          <select
            @change=${(e: Event) => this._patch({ tile_style: (e.target as HTMLSelectElement).value as TileStyle })}
          >
            ${TILE_STYLES.map(
              (style) => html`<option value=${style} ?selected=${(cfg.tile_style ?? "basic") === style}>${style}</option>`
            )}
          </select>
        </label>

        <label>
          Theme mode
          <select
            @change=${(e: Event) =>
              this._patch({ theme_mode: (e.target as HTMLSelectElement).value as "auto" | "light" | "dark" })}
          >
            ${(["auto", "light", "dark"] as const).map(
              (mode) => html`<option value=${mode} ?selected=${(cfg.theme_mode ?? "auto") === mode}>${mode}</option>`
            )}
          </select>
        </label>

        <label>
          Hours to show (0 = off)
          <input
            type="number"
            min="0"
            max="168"
            .value=${String(cfg.hours_to_show ?? 24)}
            @input=${(e: InputEvent) =>
              this._patch({ hours_to_show: Number((e.target as HTMLInputElement).value) })}
          />
        </label>

        <label>
          Aspect ratio (e.g. 1:1) or height
          <input
            type="text"
            placeholder="1:1"
            .value=${cfg.aspect_ratio ?? ""}
            @input=${(e: InputEvent) => this._patch({ aspect_ratio: (e.target as HTMLInputElement).value || undefined })}
          />
        </label>

        <label>
          Language (optional, e.g. cs / en / de)
          <input
            type="text"
            placeholder="auto"
            .value=${cfg.language ?? ""}
            @input=${(e: InputEvent) => this._patch({ language: (e.target as HTMLInputElement).value || undefined })}
          />
        </label>

        <label>
          Default zoom (single point / max zoom on fit)
          <input
            type="number"
            min="1"
            max="21"
            .value=${cfg.default_zoom != null ? String(cfg.default_zoom) : ""}
            @input=${(e: InputEvent) => {
              const v = (e.target as HTMLInputElement).value;
              this._patch({ default_zoom: v === "" ? undefined : Number(v) });
            }}
          />
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${cfg.show_zones !== false}
            @change=${(e: Event) => this._patch({ show_zones: (e.target as HTMLInputElement).checked })}
          />
          Show zones
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${cfg.fit_bounds !== false}
            @change=${(e: Event) => this._patch({ fit_bounds: (e.target as HTMLInputElement).checked })}
          />
          Auto-fit bounds
        </label>

        <div class="section">History trail</div>

        <label>
          Line width (px)
          <input
            type="number"
            min="1"
            max="20"
            .value=${String(cfg.history_line_width ?? 4)}
            @input=${(e: InputEvent) =>
              this._patch({ history_line_width: Number((e.target as HTMLInputElement).value) })}
          />
        </label>

        <label>
          Line opacity (0.1 – 1)
          <input
            type="number"
            min="0.1"
            max="1"
            step="0.05"
            .value=${String(cfg.history_line_opacity ?? 0.65)}
            @input=${(e: InputEvent) =>
              this._patch({ history_line_opacity: Number((e.target as HTMLInputElement).value) || undefined })}
          />
        </label>

        <label>
          Line color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${cfg.history_line_color ?? ""}
            @input=${(e: InputEvent) =>
              this._patch({ history_line_color: (e.target as HTMLInputElement).value.trim() || undefined })}
          />
        </label>

        <label>
          Point style
          <select
            @change=${(e: Event) =>
              this._patch({
                history_point_type: (e.target as HTMLSelectElement).value as HistoryPointType,
              })}
          >
            ${(["dot", "ring", "square", "none"] as HistoryPointType[]).map(
              (t) => html`<option value=${t} ?selected=${(cfg.history_point_type ?? "dot") === t}>${t}</option>`
            )}
          </select>
        </label>

        <label>
          Point color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${cfg.history_point_color ?? ""}
            @input=${(e: InputEvent) =>
              this._patch({ history_point_color: (e.target as HTMLInputElement).value.trim() || undefined })}
          />
        </label>

        <div class="section">Entity colors</div>
        ${this._renderEntityColors()}

        ${this._pickerReady ? this._renderEntityPickers() : this._renderEntityTextarea()}

        <div class="hint">
          Free API key: <a href="https://developer.mapy.com/" target="_blank" rel="noreferrer">developer.mapy.com</a>
          – create a project, enable "Map Tiles" REST API and copy the key.
        </div>
      </div>
    `;
  }

  private _renderEntityPickers(): TemplateResult {
    const entities = normalizeEntities(this._config.entities ?? []);
    return html`
      ${entities.length
        ? entities.map(
            (cfg: EntityConfig, i: number) => html`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${cfg.entity}
                  .allowCustomEntity=${true}
                  @value-changed=${(e: CustomEvent) => this._setEntity(i, String(e.detail.value ?? ""))}
                ></ha-entity-picker>
                <button
                  class="remove"
                  title="Remove"
                  @click=${() => this._setEntities(entities.filter((_, j) => j !== i))}
                >
                  ✕
                </button>
              </div>
            `
          )
        : nothing}
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .allowCustomEntity=${true}
          @value-changed=${(e: CustomEvent) => {
            const value = String(e.detail.value ?? "");
            if (value && !entities.some((x) => x.entity === value)) {
              this._setEntities([...entities, { entity: value }]);
            }
          }}
        ></ha-entity-picker>
      </div>
    `;
  }

  private _renderEntityTextarea(): TemplateResult {
    const entities = normalizeEntities(this._config.entities ?? []);
    return html`
      <label class="full">
        Entities (one per line, empty = auto-discover)
        <textarea
          .value=${entities.map((e) => e.entity).join("\n")}
          @change=${(e: Event) => {
            const lines = (e.target as HTMLTextAreaElement).value
              .split("\n")
              .map((l) => l.trim())
              .filter(Boolean);
            this._setEntities(lines.map((entity) => ({ entity })));
          }}
        ></textarea>
      </label>
    `;
  }

  private _renderEntityColors(): TemplateResult {
    const entities = normalizeEntities(this._config.entities ?? []);
    if (!entities.length) {
      return html`<div class="hint">Add entities first to assign custom colors.</div>`;
    }
    return html`
      ${entities.map(
        (ent: EntityConfig, i: number) => html`
          <label>
            ${ent.entity}
            <div class="entity-row" style="grid-column:auto">
              <input
                type="color"
                .value=${resolveEntityColor(this._config, ent.entity, i)}
                @input=${(e: InputEvent) =>
                  this._setEntityColor(ent.entity, (e.target as HTMLInputElement).value)}
              />
              <button
                class="remove"
                title="Reset to automatic color"
                @click=${() => this._setEntityColor(ent.entity, undefined)}
              >
                ↺
              </button>
            </div>
          </label>
        `
      )}
    `;
  }

  private _setEntityColor(entityId: string, color?: string): void {
    const colors = { ...(this._config.entity_colors ?? {}) };
    if (color) colors[entityId] = color;
    else delete colors[entityId];
    this._patch({ entity_colors: Object.keys(colors).length ? colors : undefined });
  }

  private _patch(patch: Partial<CardConfig>): void {
    this._emit({ ...this._config, ...patch });
  }

  private _setEntity(index: number, entity: string): void {
    const entities = normalizeEntities(this._config.entities ?? []);
    if (!entity) return;
    entities[index] = { ...entities[index], entity };
    this._setEntities(entities);
  }

  private _setEntities(entities: EntityConfigOrString[]): void {
    this._emit({ ...this._config, entities });
  }

  private _emit(config: CardConfig): void {
    this._config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mapy-map-card-editor": MapyMapCardEditor;
  }
}
