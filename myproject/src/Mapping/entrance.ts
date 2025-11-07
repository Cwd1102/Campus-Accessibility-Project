// entrances.ts
import type { LatLngExpression } from "leaflet";

export interface EntranceMarker {
  name: string;
  position: LatLngExpression; // [lat, lng] for Leaflet
}

// ALL entrance coordinates
export const ENTRANCE_COORDS: Record<string, LatLngExpression> = {
  FA_1_N: [39.255394, -76.713452],
  FA_2_C: [39.25514, -76.713734],
  FA_1_S: [39.254891, -76.713825],
  FA_0_E: [0, 0],
  PAHB_1_N: [39.25524, -76.714783],
  PAHB_1_E: [39.255138, -76.714633],
  PAHB_2_N: [39.255599, -76.715389],
  ENG_2_W: [39.254677, -76.714281],
  ITE_3_W: [39.254185, -76.714466],
  ITE_1_E: [0, 0],
};

export function getEntranceMarker(
  entranceId: string | null | undefined
): EntranceMarker | null {
  if (!entranceId) return null;
  const position = ENTRANCE_COORDS[entranceId];
  if (!position) return null;

  return {
    name: entranceId,
    position,
  };
}

// NEW: helper to get all entrances for the map
export function getAllEntranceMarkers(): EntranceMarker[] {
  return Object.entries(ENTRANCE_COORDS).map(([name, position]) => ({
    name,
    position,
  }));
}
