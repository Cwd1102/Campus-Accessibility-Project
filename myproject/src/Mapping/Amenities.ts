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
  //Academic Buildings
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
    label: "Fine Arts Elevator",
  },
   {
    id: "ITE_N",
    type: "elevator",
    position: [39.254019, -76.714275],
    label: "ITE Elevator",
  },

   {
    id: "ITE_S",
    type: "elevator",
    position: [39.253652, -76.714551],
    label: "ITE Elevator",
  },

   {
    id: "RAC",
    type: "elevator",
    position: [39.252746, -76.712870],
    label: "RAC Elevator",
  },

   {
    id: "ADMIN_N",
    type: "elevator",
    position: [39.253031, -76.713371],
    label: "Admin Elevator",
  },

   {
    id: "ADMIN_S",
    type: "elevator",
    position: [39.253000, -76.713379],
    label: "Admin Elevator",
  },

   {
    id: "SHER_N",
    type: "elevator",
    position: [39.253957, -76.713513],
    label: "Sherman Elevator",
  },
  {
    id: "SHER_S",
    type: "elevator",
    position: [39.253444, -76.713766],
    label: "Sherman Elevator",
  },
   {
    id: "SOND_N",
    type: "elevator",
    position: [39.253718, -76.712722],
    label: "Sondheim Elevator",
  },
   {
    id: "SOND_S",
    type: "elevator",
    position: [39.253280, -76.712910],
    label: "Sondheim Elevator",
  },
  {
    id: "MP_N",
    type: "elevator",
    position: [39.254376, -76.712432],
    label: "Math & Pysch Elevator",
  },
  {
    id: "MP_S",
    type: "elevator",
    position: [39.253863, -76.712679],
    label: "Math & Pysch Elevator",
  },

    {
    id: "UC_N",
    type: "elevator",
    position: [39.254304, -76.713073],
    label: "University Center Elevator",
  },

    {
    id: "UC_S",
    type: "elevator",
    position: [39.254063, -76.713256],
    label: "University Center Elevator",
  },
{
    id: "BIO_N",
    type: "elevator",
    position: [39.255008, -76.712170],
    label: "Biological Sciences Elevator",
  },

    {
    id: "BIO_S",
    type: "elevator",
    position: [39.254539, -76.712387],
    label: "Biological Sciences Elevator",
  },

  {
    id: "MEY_N",
    type: "elevator",
    position: [39.255259, -76.712886],
    label: "Meyerhoff Elevator",
  },

    {
    id: "MEY_S",
    type: "elevator",
    position: [39.254713, -76.713146],
    label: "Meyerhoff Elevator",
  },

  {
    id: "MARSW",
    type: "elevator",
    position: [39.255172, -76.711818],
    label: "Martin Schwartz Elevator",
  },

    {
    id: "PUP_L",
    type: "elevator",
    position: [39.255133, -76.709203],
    label: "Public Policy Elevator",
  },
  {
    id: "PUP_R",
    type: "elevator",
    position: [39.255116, -76.709149],
    label: "Public Policy Elevator",
  },
  {
    id: "PHYS_L",
    type: "elevator",
    position: [39.254572, -76.709587],
    label: "Physics Elevator",
  },
  {
    id: "PHYS_R",
    type: "elevator",
    position: [39.254552, -76.709533],
    label: "Physics Elevator",
  },
   {
    id: "CHESA_L1",
    type: "elevator",
    position: [39.252037, -76.707819],
    label: "Chesapeake Arena Elevator",
  },
  {
    id: "CHESA_L2",
    type: "elevator",
    position: [39.251997, -76.707736],
    label: "Chesapeake Arena Elevator",
  },
   {
    id: "CHESA_R",
    type: "elevator",
    position: [39.251684, -76.707027],
    label: "Chesapeake Arena Elevator",
  },
  {
    id: "CFWB",
    type: "elevator",
    position: [39.256075, -76.708935],
    label: "Center for Well Being Elevator",
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




  //Residential Halls

  //PTAP
   {
     id: "PTAP_S",
    type: "elevator",
    position: [39.255145, -76.707119],
    label: "Patapsco Hall Elevator",
  },
  {
     id: "PTAP_N",
    type: "elevator",
    position: [39.255444, -76.706048],
    label: "Patapsco Hall Elevator",
  },
  {
    id: "SUS",
    type: "elevator",
    position: [39.255712, -76.708586],
    label: "Susquehanna Hall Elevator",
  },{
    id: "PMC",
    type: "elevator",
    position: [39.255948, -76.706573],
    label: "Potomac Hall Elevator",
  },
  {
    id: "CPK",
    type: "elevator",
    position: [39.256688, -76.708557],
    label: "Cheseapeake Hall Elevator",
  },
  {
    id: "HBR_N",
    type: "elevator",
    position: [39.257515, -76.708466],
    label: "Harbor Hall Elevator",
  },
   {
    id: "HBR_L",
    type: "elevator",
    position: [39.257272, -76.708130],
    label: "Harbor Hall Elevator",
  },
   {
    id: "HBR_S",
    type: "elevator",
    position: [39.257104, -76.707578],
    label: "Harbor Hall Elevator",
  },
  {
    id: "ERK",
    type: "elevator",
    position: [39.256913, -76.709230],
    label: "Erickson Hall Elevator",
  },
  {
    id: "ERK",
    type: "elevator",
    position: [39.256994, -76.709952],
    label: "Erickson Hall Elevator",
  },
  
];
