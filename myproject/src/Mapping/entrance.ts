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
  FA_0_E: [39.254924, -76.713396],
  PAHB_1_N: [39.25524, -76.714783],
  PAHB_1_E: [39.255138, -76.714633],
  PAHB_2_N: [39.255599, -76.715389],
  ENG_2_W: [39.254677, -76.714281],
  ENG_1_N: [39.254767,-76.713890],
  ENG_1_S: [39.254225, -76.714163],
  ENG_0_E: [39.254443, -76.713662],
  ITE_3_W: [39.254185, -76.714466],
  ITE_1_E: [39.253969, -76.713839],
  CHM_2_N: [39.255238, -76.712978],
  CHM_2_S: [39.254781, -76.713192],
  CHM_0_N: [39.255062, -76.712428],
  CHM_0_E: [39.254829, -76.712457],
  CHM_0_S: [39.254667, -76.712605],
  CHM_1_S: [39.254657, -76.712999],
  UC_3_W: [39.254387, -76.713460],
  UC_2_N: [39.254542, -76.713055],
  UC_1_E: [39.254391, -76.713050],
  UC_1_S: [39.254119, -76.713031],
  SHER_0_N: [39.253778, -76.713012],
  SHER_0_S: [39.253331, -76.713235], 
  MAT_1_N: [39.254347, -76.712449],
  MAT_1_S: [39.253894, -76.712653],
  SOND_1_N:[39.253722, -76.712809],
  SOND_1_S: [39.253261, -76.712980],
  ADM_1_E :[39.252968, -76.713401],
  ADM_1_S: [39.252914, -76.713541],
  RAC_2_W: [39.252862, -76.712983],
  BIO_1_S: [39.254522, -76.712401],
  BIO_1_N: [39.255039, -76.712141],
  BIO_1_E: [39.254993, -76.712010],
  BIO_1_N1: [39.255126, -76.712083],
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
