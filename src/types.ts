import type { HomeAssistant } from "./ha";

export interface EntityConfig {
  entity: string;
  name?: string;
  icon?: string;
  picture?: string;
}

export type EntityConfigOrString = string | EntityConfig;

export type TileStyle = "basic" | "outdoor" | "winter" | "aerial";

export interface CardConfig {
  type: string;
  /** Mapy.com API key from developer.mapy.com */
  api_key?: string;
  /** Override tile URL template ({z}/{x}/{y}) – bypasses Mapy.com defaults */
  tile_url?: string;
  tile_attribution?: string;
  tile_style?: TileStyle;
  /** Map label language passed to Mapy.com API (e.g. cs, en, de) */
  language?: string;
  entities?: EntityConfigOrString[];
  hours_to_show?: number;
  default_zoom?: number;
  aspect_ratio?: string;
  title?: string;
  theme_mode?: "auto" | "light" | "dark";
  show_zones?: boolean;
  fit_bounds?: boolean;

  /** Per-entity color override, e.g. {"person.joe": "#ff0000"} */
  entity_colors?: Record<string, string>;

  /** History trail line width in px (default 4) */
  history_line_width?: number;
  /** History trail line color – defaults to the entity color */
  history_line_color?: string;
  /** History trail point color – defaults to the entity color */
  history_point_color?: string;
  /** History trail point style (default "dot") */
  history_point_type?: HistoryPointType;
}

export type HistoryPointType = "dot" | "ring" | "square" | "none";

export interface HistoryStreamLocation {
  entity_id: string;
  map_state: [number, number] | null;
  /** Point timestamp in epoch milliseconds (when available) */
  ts?: number;
}

export interface HistoryPoint {
  lat: number;
  lon: number;
  ts?: number;
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
    loadCardHelpers?: () => Promise<any>;
    MapyMapCard?: typeof import("./mapy-map-card").MapyMapCard;
  }

  interface HASSDomEvents {
    "value-changed": { value: unknown };
    "config-changed": { config: CardConfig };
  }
}

export type { HomeAssistant };
