import type { HomeAssistant } from "./ha";

export interface EntityConfig {
  entity: string;
  name?: string;
  icon?: string;
  picture?: string;
}

export type EntityConfigOrString = string | EntityConfig;

export type TileStyle = "basic" | "outdoor" | "aerial";

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
}

export interface HistoryStreamLocation {
  entity_id: string;
  map_state: [number, number] | null;
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
