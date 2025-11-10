// amenities.ts
import type { LatLngExpression } from "leaflet";

export type AmenityType = "elevator" | "accessible_parking" | "ramp";

export interface Amenity {
  id: string;
  type: AmenityType;
  position: LatLngExpression;  // [lat, lng] for Leaflet markers
  label: string;
}

export const AMENITIES: Amenity[] = [
  {
    id: "pahb_N",
    type: "elevator",
    position: [39.255543, -76.715392],
    label: "PAHB Elevator (Level 1)",
  },
  {
    id: "pahb_S",
    type: "elevator",
    position: [39.255145, -76.715316],
    label: "PAHB Elevator (Level 1)",
  },
  {
    id: "fa_N",
    type: "elevator",
    position: [39.255381, -76.713468],
    label: "Fine Arts Elevator",
  },
  {
    id: "fa_S",
    type: "elevator",
    position: [39.254912, -76.713702],
    label: "Fine Arts Elevator",
  },

  {
    id: "ENG_N",
    type: "elevator",
    position: [39.254605, -76.713769],
    label: "Engineering Elevator",
  },

   {
    id: "ENG_S",
    type: "elevator",
    position: [39.254372, -76.713903],
    label: "Fine Arts Elevator ",
  },

  


  //Accessibe Parking Lots
  {
     id: "park_accessible_lot1",
    type: "accessible_parking",
    position: [39.2563, -76.7120],
    label: "Lot 10 - Accessible Parking",
  },
  {
     id: "park_accessible_lot2",
    type: "accessible_parking",
    position: [39.2563, -76.7120],
    label: "Police Station - Accessible Parking",
  },
  
];
