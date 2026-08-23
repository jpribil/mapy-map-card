import type { HistoryStreamLocation } from "./types";
import type { HomeAssistant } from "./ha";

/**
 * Subscribe to the HA `history/stream` websocket API – the same
 * mechanism the built-in map card uses to receive position history.
 * Returns a promise resolving to an unsubscribe function.
 *
 * NOTE: the command is `history/stream` (NOT `history/history_stream`,
 * which does not exist) and messages arrive as
 * `{states: {[entity_id]: [{s, a, lu}, ...]}, start_time, end_time}`.
 */
export async function subscribeHistoryStream(
  hass: HomeAssistant,
  entityIds: string[],
  hoursToShow: number,
  onLocations: (locations: HistoryStreamLocation[]) => void
): Promise<() => void> {
  const startTime = new Date(Date.now() - hoursToShow * 3600 * 1000).toISOString();

  let gotData = false;
  const unsubscribe = await hass.connection.subscribeMessage(
    (message: { states?: Record<string, Array<Record<string, any>>> }) => {
      if (!message || !message.states || typeof message.states !== "object") return;
      gotData = true;
      onLocations(parseHistoryStates(message.states, entityIds));
    },
    {
      type: "history/stream",
      start_time: startTime,
      end_time: new Date().toISOString(),
      entity_ids: entityIds,
    },
    { resubscribe: true }
  );

  // `history/stream` sends the initial window as a single burst right after
  // the subscription is established. If nothing arrived within a short grace
  // period (recorder empty/unavailable), drop the subscription – the one-shot
  // fallback in the card takes over.
  setTimeout(() => {
    if (!gotData) unsubscribe();
  }, 10000);

  return unsubscribe;
}

/**
 * Convert the `{[entity_id]: [{s, a, lu}, ...]}` shape used by both
 * `history/stream` and `history/history_during_period` into the internal
 * location list.
 */
export function parseHistoryStates(
  states: Record<string, Array<Record<string, any>>>,
  entityIds?: string[]
): HistoryStreamLocation[] {
  const out: HistoryStreamLocation[] = [];
  for (const entityId of entityIds && entityIds.length > 0 ? entityIds : Object.keys(states)) {
    const items = states[entityId];
    if (!Array.isArray(items)) continue;
    for (const item of items) {
      if (!item || typeof item !== "object") continue;
      const attrs = item.a ?? item.attributes ?? null;
      const lat = Number(attrs?.latitude);
      const lon = Number(attrs?.longitude);
      out.push({
        entity_id: entityId,
        map_state:
          Number.isFinite(lat) && Number.isFinite(lon) ? ([lat, lon] as [number, number]) : null,
      });
    }
  }
  return out;
}
