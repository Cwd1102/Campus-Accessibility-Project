// entrances.ts
import type { LatLngExpression } from "leaflet";

export interface EntranceMarker {
  name: string;                  // ⬅️ use `name` to match OpenMap.tsx
  position: LatLngExpression;
}

const ENTRANCE_COORDS: Record<string, LatLngExpression> = {
  "FA_1_N": [39.2560, -76.7111],
  "FA_2_C": [39.2556, -76.7109],
  "FA_1_S": [39.2552, -76.7110],
  "FA_0_E": [39.2554, -76.7105],
  "PAHB_1_N": [39.255240, -76.714783],
  "PAHB_1_E": [39.255240, -76.714783],
  "PAHB_2_N": [39.2575, -76.7139],
  "ENG_2_W": [39.254677, -76.714281],
  "ITE_3_W": [39.2553, -76.7128],
  "ITE_1_E": [39.2551, -76.7121],
  // ...
};

export function getEntranceMarker(
  entranceId: string | null | undefined
): EntranceMarker | null {
  if (!entranceId) return null;
  const position = ENTRANCE_COORDS[entranceId];
  if (!position) return null;

  return {
    name: entranceId,   // ⬅️ this will be used in the Popup
    position,
  };
}
