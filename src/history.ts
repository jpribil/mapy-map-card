import type { HistoryStreamLocation } from "./types";
import type { HomeAssistant } from "./ha";

/**
 * Subscribe to the HA `history/history_stream` websocket API – the same
 * mechanism the built-in map card uses to receive position history.
 * Returns a promise resolving to an unsubscribe function.
 */
export async function subscribeHistoryStream(
  hass: HomeAssistant,
  entityIds: string[],
  hoursToShow: number,
  onLocations: (locations: HistoryStreamLocation[]) => void
): Promise<() => void> {
  const startTime = new Date(Date.now() - hoursToShow * 3600 * 1000).toISOString();

  const unsubscribe = await hass.connection.subscribeMessage(
    (message: { locations?: HistoryStreamLocation[] }) => {
      if (message && Array.isArray(message.locations) && message.locations.length > 0) {
        onLocations(message.locations);
      }
    },
    {
      type: "history/history_stream",
      start_time: startTime,
      entity_ids: entityIds,
      pretty_print: false,
    },
    { resubscribe: true }
  );

  return unsubscribe;
}
