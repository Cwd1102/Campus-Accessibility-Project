// segments.ts
import type { Feature, LineString } from "geojson";

export type SegmentFeature = Feature<LineString, { id: string }>;

export const SEGMENTS: Record<string, SegmentFeature> = {

   S1: {
    type: "Feature",
    properties: { id: "S1" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713468, 39.255477],
      [-76.713439, 39.255531],[-76.713434, 39.255575], [-76.713428, 39.255618],[-76.713460, 39.255664],[-76.713509, 39.255689],
      [-76.713761, 39.255757]], //[from fine arts]... [inter with 2, 3]
     },
  },

   S2: {
    type: "Feature",
    properties: { id: "S2" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713761, 39.255757], [-76.713978, 39.255394],], //[inter with 1], [inter with 5]
     },
  },
   S3: {
    type: "Feature",
    properties: { id: "S3" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713761, 39.255757], [39.255851, -76.713721],
      [39.255923, -76.713986],[39.255946, -76.714077],[39.255936, -76.714182],[39.255905, -76.714268], [39.255822, -76.714402], [39.255739, -76.714477],
       //[inter with 1,2]..... [inter with 4]
    ],
     },
  },

   S4: {
    type: "Feature",
    properties: { id: "S4" },
    geometry: {
      type: "LineString",
      coordinates: [ [39.255739, -76.714477], [-76.714083, 39.255423],], //[inter with 3], [inter with 5]
     },
  },

  S5: {
    type: "Feature",
    properties: { id: "S5" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713978, 39.255394], [-76.714083, 39.255423],], //[inter with 2, 13], [inter with 4]
     },
  },

  S6: {
    type: "Feature",
    properties: { id: "S6" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714083, 39.255423], [-76.714287, 39.254983],],
     },
  },

  S7: {
    type: "Feature",
    properties: { id: "S7" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714281, 39.254974], [-76.714453, 39.254654],],//[int w 6], [int w 14]
     },
  },

  S8: {
    type: "Feature",
    properties: { id: "S8" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714453, 39.254654], [-76.714622, 39.254345] , [-76.714458, 39.254289],[-76.714466, 39.254185]], 
      //[intersection with 14],[],[] [door end to ite]
     },
  },

  S9: {
    type: "Feature",
    properties: { id: "S9" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714281, 39.254677], [-76.714158, 39.254937],],
     },
  },
  
   S10: {
    type: "Feature",
    properties: { id: "S10" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714158, 39.254937], [-76.714287, 39.254983],], //[intersection with 11], [intersection with 6,7]
     },
  },
  
  S11: {
    type: "Feature",
    properties: { id: "S11" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714053, 39.255219], [-76.714158, 39.254937],], //[intersection from 12, 13], [intersection with 10]
     },
  },

   S12: {
    type: "Feature",
    properties: { id: "S12" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713734, 39.255140], [-76.714053, 39.255219],], //[door start], [intersection with 11, 13]
     },
  },

    S13: {
    type: "Feature",
    properties: { id: "S13" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714053, 39.255219], [-76.713978, 39.255394],],
     },
  },

   S14: {
    type: "Feature",
    properties: { id: "S14" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714600, 39.254650], [-76.714453, 39.254654],], //[intersection with 15, 20], [intersection with 7,8]
     },
  },


   S15: {
    type: "Feature",
    properties: { id: "S15" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714555, 39.255194], [-76.714600, 39.254650],], //second [] is where it meets 14
     },
  },

  S16: {
    type: "Feature",
    properties: { id: "S16" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714083, 39.255423], [-76.714246, 39.255406], [-76.714386, 39.255350], [-76.714480, 39.255296], [-76.714555, 39.255194],
      ],
    },
  },

  //-76.714630, 39.255564, 
  S17: {
    type: "Feature",
    properties: { id: "S17" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714630, 39.255564], [-76.714083, 39.255423], //[interwith 17] [interwith 4,5,16,6]
      ],
    },
  },

  S18: {
    type: "Feature",
    properties: { id: "S18" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714748, 39.255311], [-76.714630, 39.255564], //[PAHB door] , inter w 17
      ],
    },
  },

  S19: {
    type: "Feature",
    properties: { id: "S19" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.714555, 39.255194], [-76.714748, 39.255311],//[-76.714783, 39.255240], //[]..[PAHB door]
      ],
    },
  },

   S20: {
    type: "Feature",
    properties: { id: "S20" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714555, 39.255194], [-76.714871, 39.254642],[-76.715021, 39.254322],
      ],
    },
  },

  
   S21: {
    type: "Feature",
    properties: { id: "S21" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715021, 39.254322], [-76.714622, 39.254345],[-76.714600, 39.254650],
      ],
    },
  },

    S22: {
    type: "Feature",
    properties: { id: "S22" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713890, 39.254767], [-76.713825,39.254891], //[eng door] [fa door]
      ],
    },
  },

   S23: {
    type: "Feature",
    properties: { id: "S23" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714163, 39.254225], [-76.714209, 39.254141], //[eng door] [ite door]
      ],},},

S24: {
    type: "Feature",
    properties: { id: "S24" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714477,39.255739, ], [-76.715542, 39.256034], //[inter w 4] [inter w 25]
      ],},},

  S25: {
    type: "Feature",
    properties: { id: "S25" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715542, 39.256034], [-76.715636, 39.255851], //[inter w 24] [inter w 26,7]
      ],
    },
  },

    S26: {
    type: "Feature",
    properties: { id: "S26" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715636, 39.255851], [-76.714630, 39.255564], //[inter w 25] [inter w 17]
      ],},},

  S27: {
    type: "Feature",
    properties: { id: "S27" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715636, 39.255851], [-76.715354, 39.255668], [-76.715389,39.255599], //[inter w 25] [PAHB 2N door]
      ], }, },

    
};

