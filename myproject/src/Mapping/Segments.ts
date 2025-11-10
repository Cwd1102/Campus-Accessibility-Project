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
    ],},},
   S4: {
    type: "Feature",
    properties: { id: "S4" },
    geometry: {
      type: "LineString",
      coordinates: [ [39.255739, -76.714477], [-76.714083, 39.255423],], //[inter with 3], [inter with 5]
     },},
  S5: {
    type: "Feature",
    properties: { id: "S5" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713978, 39.255394], [-76.714083, 39.255423],], //[inter with 2, 13], [inter with 4]
     },},
  S6: {
    type: "Feature",
    properties: { id: "S6" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714083, 39.255423], [-76.714287, 39.254983],],
     },},
  S7: {
    type: "Feature",
    properties: { id: "S7" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714281, 39.254974], [-76.714453, 39.254654],],//[int w 6], [int w 14]
     },},
  S8: {
    type: "Feature",
    properties: { id: "S8" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714453, 39.254654], [-76.714622, 39.254345] , [-76.714458, 39.254289],[-76.714466, 39.254185]], 
      //[intersection with 14],[],[] [door end to ite]
     },},
  S9: {
    type: "Feature",
    properties: { id: "S9" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714281, 39.254677], [-76.714158, 39.254937],],
     },},
   S10: {
    type: "Feature",
    properties: { id: "S10" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714158, 39.254937], [-76.714287, 39.254983],], //[intersection with 11], [intersection with 6,7]
     },},
  S11: {
    type: "Feature",
    properties: { id: "S11" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714053, 39.255219], [-76.714158, 39.254937],], //[intersection from 12, 13], [intersection with 10]
     },},
   S12: {
    type: "Feature",
    properties: { id: "S12" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.713734, 39.255140], [-76.714053, 39.255219],], //[door start], [intersection with 11, 13]
     }, },
    S13: {
    type: "Feature",
    properties: { id: "S13" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714053, 39.255219], [-76.713978, 39.255394],],
     },},
   S14: {
    type: "Feature",
    properties: { id: "S14" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714600, 39.254650], [-76.714453, 39.254654],], //[intersection with 15, 20], [intersection with 7,8]
     },},
   S15: {
    type: "Feature",
    properties: { id: "S15" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714579, 39.255124], [-76.714600, 39.254650],], //second [] is where it meets 14
     },},
  S16: {
    type: "Feature",
    properties: { id: "S16" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714083, 39.255423], [-76.714187, 39.255421], [-76.714254, 39.255410],
        [-76.714354, 39.255371],[-76.714388, 39.255361],[-76.714431,39.255332], [-76.714477,39.255302], 
        [-76.714514, 39.255261],[-76.714555, 39.255194],
      ], //[inter with 4].....[inter with 15]
    },}, 

  S17: {
    type: "Feature",
    properties: { id: "S17" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714630, 39.255564], [-76.714083, 39.255423], //[interwith 17] [interwith 4,5,16,6]
      ],},},
  S18: {
    type: "Feature",
    properties: { id: "S18" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714748, 39.255311], [-76.714630, 39.255564], //[PAHB door] , inter w 17
      ],},},
  S19: {
    type: "Feature",
    properties: { id: "S19" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.714555, 39.255194], [-76.714748, 39.255311],//[-76.714783, 39.255240], //[]..[PAHB door]
      ],}, },
   S20: {
    type: "Feature",
    properties: { id: "S20" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714555, 39.255194], [-76.714871, 39.254642],[-76.715021, 39.254322],
      ],},},
   S21: {
    type: "Feature",
    properties: { id: "S21" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715021, 39.254322], [-76.714622, 39.254345],[-76.714600, 39.254650],
      ],},},
    S22: {
    type: "Feature",
    properties: { id: "S22" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713890, 39.254767], [-76.713825,39.254891], //[eng door] [fa door]
      ],},},
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
        [-76.714477,39.255739 ], [-76.715542, 39.256034], //[inter w 4] [inter w 25]
      ],},},
S25: {
    type: "Feature",
    properties: { id: "S25" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.715542, 39.256034], [-76.715636, 39.255851], //[inter w 24] [inter w 26,7]
      ], }, },

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
      ],},},
      /////////////
      /////

    S28: {
    type: "Feature",
    properties: { id: "S28" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.714555, 39.255194], [-76.714579, 39.255124], //[inter w 16] [inter w 15]
      ],},},

    S29: {
    type: "Feature",
    properties: { id: "S29" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713662, 39.254443], [-76.713506, 39.254405], //[ENG_0_2] to  [intersection w S30]
      ],},},

    S30: {
    type: "Feature",
    properties: { id: "S30" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713460, 39.254387], [-76.713506, 39.254405], //[UC_3_W]  [intersection w S29]
      ],},},

    S31: {
    type: "Feature",
    properties: { id: "S31" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713506, 39.254405], [-76.713739, 39.253936], //[intersection w 29,30], [I36] 
      ],},},

    S32: {
    type: "Feature",
    properties: { id: "S32" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713506, 39.254405], [-76.713294, 39.254843], //[intersection w 29,30], [intersection w 33, 34] 
      ],},},

    S33: {
    type: "Feature",
    properties: { id: "S33" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.7132945, 39.254843], [-76.713192, 39.254781], //[intersection w 33,34], [chem 2S]
      ],},},
    
    S34: {
    type: "Feature",
    properties: { id: "S34" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.7132945, 39.254843], [-76.713396, 39.254924], //[intersection w 33,34], [FA_0_E]
      ],},},

    S35: {
    type: "Feature",
    properties: { id: "S35" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.7132945, 39.254843], [-76.713082, 39.255267], //[intersection w 33,34], [front ofCHEM_2_N]]
      ],},},

    S36: {
    type: "Feature",
    properties: { id: "S36" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713055, 39.254542], [-76.712999, 39.254657], //[UC_2_N], [CHM_1_S]
      ],},},

    S37: {
    type: "Feature",
    properties: { id: "S37" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712428,39.255062], [-76.712302, 39.255024], //[CHM_0-N], [I19]
      ],},},

    //
    S38: {
    type: "Feature",
    properties: { id: "S38" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712302, 39.255024], [-76.712398,39.254812], //[I19], [I20]
      ],},},

    S39: {
    type: "Feature",
    properties: { id: "S39" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712398,39.254812], [-76.712457,39.254829] //[I20], [CHM_0_E door]
      ],},},

    S40: {
    type: "Feature",
    properties: { id: "S40" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712398,39.254812], [-76.712484, 39.254634] //[I20],[I21],
      ],},},

    S41: {
    type: "Feature",
    properties: { id: "S41" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712484, 39.254634], [-76.712605,39.254667] //[I21],[CHM_0_S],
      ],},},
    S42: {
    type: "Feature",
    properties: { id: "S42" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712484, 39.254634], [-76.712522,39.254551] //[I21],[I22]
      ],},},
    
    S43: {
    type: "Feature",
    properties: { id: "S43" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712522,39.254551], [-76.712401, 39.254522] //[I22],[Bio_1_S]
      ],},},

    S44: {
    type: "Feature",
    properties: { id: "S44" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712522,39.254551], [-76.712597,39.254387] //[I22],[I23]
      ],},},
    
    S45: {
    type: "Feature",
    properties: { id: "S45" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712597,39.254387], [-76.712648,39.254281] //[I23],[I24]
      ],},},

    S46: {
    type: "Feature",
    properties: { id: "S46" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712648,39.254281], [-76.712648,39.254281] //[I24],[I25]
      ],},},

    S47: {
    type: "Feature",
    properties: { id: "S47" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712648, 39.254281], [-76.712852, 39.253849] //[I24],[I26]
      ],},},

    S48: {
    type: "Feature",
    properties: { id: "S48" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712648,39.254281], [-76.713050, 39.254391] //[I25],[UC_1_E]
      ],},},

    S49: {
    type: "Feature",
    properties: { id: "S49" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712648,39.254281], [-76.713031,39.254119] //[I25],[UC_1_S]
      ],},},

    S50: {
    type: "Feature",
    properties: { id: "S50" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713031,39.254119], [-76.712852,39.253849] //[UC_1_S], [I26]
      ],},},

    S51: {
    type: "Feature",
    properties: { id: "S51" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712852,39.253849], [-76.712897, 39.253749] //[I26], [I27]
      ],},},

    S52: {
    type: "Feature",
    properties: { id: "S52" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712897, 39.253749], [-76.713012, 39.253778] //[I27], [SHER_0_N]
      ],},},

    S53: {
    type: "Feature",
    properties: { id: "S53" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712897,39.253749], [ -76.712809, 39.253722] //[I27], [SOND_1_N]]
      ],},},
    
    S54: {
    type: "Feature",
    properties: { id: "S54" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712897,39.253749], [-76.713115, 39.253300] //[I27], [I28]
      ],},},

    S55: {
    type: "Feature",
    properties: { id: "S55" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713115, 39.253300], [-76.713235, 39.253331] //[I28], [SHER_0_S]
      ],},},

    S56: {
    type: "Feature",
    properties: { id: "S56" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713115, 39.253300], [-76.712980, 39.253261] //[I28], [SOND_1_S]
      ],},},

    S57: {
    type: "Feature",
    properties: { id: "S57" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713115, 39.253300], [-76.713278, 39.252947] //[I28], [I29]
      ],},},

    S58: {
    type: "Feature",
    properties: { id: "S58" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713278, 39.252947], [-76.713401,39.252968] //[I29], [ADM_1_E]
      ],},},

    S59: {
    type: "Feature",
    properties: { id: "S59" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713278, 39.252947], [-76.712983, 39.252862] //[I29], [RAC_2_W]
      ],},},

    //I30: 39.252851, -76.713329
    S60: {
    type: "Feature",
    properties: { id: "S60" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713278, 39.252947], [-76.713329,39.252851] //[I29], [I30]
      ],},},
    
    S61: {
    type: "Feature",
    properties: { id: "S60" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713278, 39.252947], [-76.713541, 39.252914] //[I30], [ADM_1_S]
      ],},},

    //S62: U
    S62: {
    type: "Feature",
    properties: { id: "S62" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712852,39.253849], [-76.712685,39.253802], [-76.712653, 39.253894] //[I26], [just for curve] [MAT_1_S]
      ],},},

    S63: {
    type: "Feature",
    properties: { id: "S63" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712597,39.254387], [-76.712449,39.254347] //[I23],[MAT_1_N]
      ],},},

    S64: {
    type: "Feature",
    properties: { id: "S64" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712302, 39.255024], [-76.712244, 39.255145] //[I19],[I31]
      ],},},

    S65: {
    type: "Feature",
    properties: { id: "S65" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712244, 39.255145], [-76.712090,39.255101] //[I31],[I32]
      ],},},

    S66: {
    type: "Feature",
    properties: { id: "S66" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712090,39.255101], [-76.712083, 39.255126] //[I32],[Bio_1_N1]
      ],},},
    
    S67: {
    type: "Feature",
    properties: { id: "S67" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712090,39.255101], [-76.712141, 39.255039] //[I32],[Bio_1_N]
      ],},},

    S68: {
    type: "Feature",
    properties: { id: "S68" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712090,39.255101], [-76.711817, 39.255027] //[I32],[I33]
      ],},},
    
    S69: {
    type: "Feature",
    properties: { id: "S69" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711817, 39.255027], [-76.711849,39.254952], [-76.712010, 39.254993] //[I33],[for the curve],[BIO_1_E]
      ],},},

    S70: {
    type: "Feature",
    properties: { id: "S70" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711817, 39.255027], [-76.711629,39.255431], //[I33] [I35]
      ],},},
    
    S71: {
    type: "Feature",
    properties: { id: "S71" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711817, 39.255027], [-76.711653, 39.254973], //[I33] [I34]
      ],},},

    S72: {
    type: "Feature",
    properties: { id: "S72" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713739, 39.253936], [-76.713839, 39.253969], //[I36] [ITE_1_E]
      ],},},

    S73: {
    type: "Feature",
    properties: { id: "S73" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713739, 39.253936], [-76.713608, 39.253946], //[I36][SHER_1_N]
      ],},},
    
    S74: {
    type: "Feature",
    properties: { id: "S74" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713739, 39.253936], [-76.713946, 39.253543] ,[-76.713836,39.253510], //[I36][SHER_1_S]
      ],},},

    S75: {
    type: "Feature",
    properties: { id: "S75" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711653, 39.254973],[-76.711586, 39.255115], //[I34],[COM_1_W]
      ],},},
    
    S76: {
    type: "Feature",
    properties: { id: "S76" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711653, 39.254973], [-76.711127, 39.254818] ,[-76.711073, 39.254937], //[I34],[],[COM_1_E]
      ],},},
//
    S77: {
    type: "Feature",
    properties: { id: "S77" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712244, 39.255145], [-76.712031, 39.255585], //[I31],[I37]
      ],},},

    S78: {
    type: "Feature",
    properties: { id: "S78" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712031, 39.255585], [76.711851, 39.255574] ,[-76.711626, 39.255431], //[I37],[],[I35]
      ],},},

    S79: {
    type: "Feature",
    properties: { id: "S79" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711626, 39.255431], [-76.710939, 39.255244], //[I35],[I38]
      ],},},
    
    S80: {
    type: "Feature",
    properties: { id: "S80" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710939, 39.255244], [-76.710907, 39.255186], //[I38],[COM_2_W]
      ],},},

    S81: {
    type: "Feature",
    properties: { id: "S81" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710939, 39.255244], //[I38] 
        [-76.710875,39.255232],[-76.710810, 39.255228], [-76.710749, 39.255219], [-76.710668, 39.255190],
        [-76.710577, 39.255146], //[I39]
      ],},},

    S82: {
    type: "Feature",
    properties: { id: "S82" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710577, 39.255146], [-76.710628, 39.255117], //[I39],[COM_2_E]
      ],},},

    S83: {
    type: "Feature",
    properties: { id: "S83" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712244, 39.255145], //[I31]
        [-76.712358, 39.255178], [-76.712358, 39.255178], [-76.712503, 39.255277], [-76.712522, 39.255327],
        [-76.712535, 39.255373], [-76.712532, 39.255414], [-76.712516, 39.255454] ,[-76.712487, 39.255504],
        [-76.712465, 39.255539], [-76.712425, 39.255589], [-76.712404, 39.255626], [-76.712374, 39.255751],
        [-76.712406, 39.255855] ,[-76.712447, 39.255927], [-76.712457, 39.255969], [-76.712444, 39.256015],
        [-76.712414, 39.256098], [-76.712404, 39.256158], 
        [-76.712425, 39.256187], //,[I40]
      ],},},
    
    S84: {
    type: "Feature",
    properties: { id: "S84" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712591, 39.256910], //,[WKLG_1_S],
        [-76.712626, 39.256874], [-76.712634, 39.256856], [-76.712642, 39.256825], [-76.712642, 39.256740],
        [-76.712674, 39.256715], [-76.712771, 39.256673], [-76.712793, 39.256661], [-76.712809, 39.256632],
        [-76.712835, 39.256523], [-76.712806, 39.256411], [-76.712771, 39.256364],
        [-76.712425, 39.256187], //[I40]
      ],},},

    S85: {
    type: "Feature",
    properties: { id: "S84" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712425, 39.256187], //[I40],
        [-76.712404, 39.256204], [-76.712404, 39.256218], [-76.712406, 39.256227], [-76.712422, 39.256237], 
        [-76.712522, 39.256278], [-76.712540, 39.256289], [-76.712551, 39.256305], [-76.712562, 39.256324], 
        [-76.712548, 39.256384],
        [-76.712374, 39.256492], //[I41]
      ],},},

    S86: {
    type: "Feature",
    properties: { id: "S85" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712374, 39.256492], [-76.712347, 39.256511], //[I41], [LIB_0_W]
      ],},},

    S87: {
    type: "Feature",
    properties: { id: "S87" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712374, 39.256492], [-76.712041, 39.256158], //[I41], [I42]
      ],},},

    S88: {
    type: "Feature",
    properties: { id: "S87" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712041, 39.256158], [-76.712001, 39.256185], //[I42], [LIB_0_E]
      ],},},
    
    S89: {
    type: "Feature",
    properties: { id: "S89" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712041, 39.256158],[39.255973, -76.711864], [-76.712031, 39.255585], //[I42],[], [I37]
      ],},},

    S90: {
    type: "Feature",
    properties: { id: "S90" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710577, 39.255146], [-76.710000, 39.254936], //[I39], [I48]
      ],},},
    
    S91: {
    type: "Feature",
    properties: { id: "S91" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710939, 39.255244], [76.711191, 39.255697], //[I38], [I43]
      ],},},

    S92: {
    type: "Feature",
    properties: { id: "S92" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711191, 39.255697], [-76.711371, 39.256052], //[I43], [I44]
      ],},},
    
    S93: {
    type: "Feature",
    properties: { id: "S93" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711191, 39.255697], [-76.711333, 39.256031], [-76.711060, 39.255954], //[I43], [], [I45]
      ],},},

    S94: {
    type: "Feature",
    properties: { id: "S94" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711371, 39.256052], [-76.711060, 39.255954], //[I44] [I45]
      ],},},

    S95: {
    type: "Feature",
    properties: { id: "S95" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711060, 39.255954], [-76.710247, 39.255381], //[I45] [I46]
      ],},},

    S96: {
    type: "Feature",
    properties: { id: "S96" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711060, 39.255954], [-76.709751, 39.255581], //[I45] [I47]
      ],},},
    
    S97: {
    type: "Feature",
    properties: { id: "S97" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710247, 39.255381], [-76.709751, 39.255581], //[I46] [I47]
      ],},},

    S98: {
    type: "Feature",
    properties: { id: "S98" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710247, 39.255381], [-76.710000, 39.254936], //[I46] [I48]
      ],},},

    S99: {
    type: "Feature",
    properties: { id: "S99" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711653, 39.254973], //[I34]
        [-76.711626, 39.254933], [-76.711674, 39.254839], [-76.711690, 39.254752], [-76.711674, 39.254719],
        [-76.711749, 39.254652], [-76.711800, 39.254636], 
        [-76.711873, 39.254490]//[I49]
      ],},},

    S100: {
    type: "Feature",
    properties: { id: "S100" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711873, 39.254490], [-76.711323, 39.254343], //[I49] [I50]
      ],},},

    S101: {
    type: "Feature",
    properties: { id: "S101" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711323, 39.254343],[-76.711181, 39.254469] //[I50], [COM_0_W]
      ],},},

    S102: {
    type: "Feature",
    properties: { id: "S102" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711323, 39.254343],[-76.711299, 39.254251] //[I50], [I51]
      ],},},

    S103: {
    type: "Feature",
    properties: { id: "S103" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711873, 39.254490], [-76.711942, 39.254503], [-76.712237, 39.253857] //[I49], [], [I52]
      ],},},

    S104: {
    type: "Feature",
    properties: { id: "S104" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712237, 39.253857], [-76.712452, 39.253767], [-76.712640, 39.253813] //[I52], [], [SOND_0_N]
      ],},},

    S105: {
    type: "Feature",
    properties: { id: "S106" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712237, 39.253857],//[I52]
        [-76.712087, 39.253950], [-76.711921, 39.254046], [-76.711741, 39.254131], [-76.711548, 39.254195], 
        [-76.711299, 39.254251] //[I51]
      ],},},

    S106: {
    type: "Feature",
    properties: { id: "S106" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711299, 39.254251], [-76.711285, 39.254177], [-76.711183, 39.254145] //[I51],[] ,[ILSB_1_W]
      ],},},

    S107: {
    type: "Feature",
    properties: { id: "S107" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711299, 39.254251], //[I51]
        [-76.711065, 39.254278], [-76.710856, 39.254210], [-76.710716, 39.254214], [-76.710612, 39.254162],
        [-76.710510, 39.254152] //[I53]
      ],},},

    S108: {
    type: "Feature",
    properties: { id: "S108" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710510, 39.254152], [-76.710526, 39.254091] //[I53] [ILSB_1_N]
      ],},},
    
    S109: {
    type: "Feature",
    properties: { id: "S109" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711299, 39.254251], [-76.711065, 39.254278], [-76.711036, 39.254422] //[I51] [COM_0_E]
      ],},},




    

    


};

