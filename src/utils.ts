import type { EntityConfig, EntityConfigOrString } from "./types";
import type { HassState, HomeAssistant } from "./ha";

export const PALETTE = [
  "#e53935",
  "#d81b60",
  "#8e24aa",
  "#5e35b1",
  "#3949ab",
  "#1e88e5",
  "#039be5",
  "#00acc1",
  "#00897b",
  "#43a047",
  "#7cb342",
  "#c0ca33",
  "#fdd835",
  "#ffb300",
  "#fb8c00",
  "#f4511e",
  "#6d4c41",
  "#546e7a",
];

export function colorForIndex(index: number): string {
  return PALETTE[index % PALETTE.length];
}

export function normalizeEntities(list: EntityConfigOrString[]): EntityConfig[] {
  return list
    .map((item) => (typeof item === "string" ? { entity: item } : item))
    .filter((item) => typeof item?.entity === "string" && item.entity.length > 0);
}

const LOCATION_DOMAINS = new Set(["person", "device_tracker", "geo_location"]);

export function entityPosition(state: HassState): { lat: number; lon: number } | null {
  if (!state) return null;
  const lat = Number(state.attributes?.latitude);
  const lon = Number(state.attributes?.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return { lat, lon };
}

/** All entities that currently expose a GPS position and would be shown by default. */
export function getLocationEntities(hass: HomeAssistant): string[] {
  return Object.values(hass.states)
    .filter((st) => LOCATION_DOMAINS.has(st.entity_id.split(".")[0]) && entityPosition(st))
    .map((st) => st.entity_id)
    .sort();
}

export function friendlyName(cfg: EntityConfig, state?: HassState): string {
  if (cfg.name) return cfg.name;
  return state?.attributes?.friendly_name ?? cfg.entity;
}

export function isDarkMode(hass: HomeAssistant, mode?: string): boolean {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return !!hass.themes?.darkMode;
}
