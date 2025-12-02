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
      coordinates: [ 
      [-76.713761, 39.255757], [-76.713721, 39.255851],
      [-76.713986, 39.255923],[-76.714077, 39.255946],[-76.714182, 39.255936],[-76.714268, 39.255905], 
      [-76.714394, 39.255828], [-76.714477, 39.255739],
       //[inter with 1,2]..... [inter with 4]
    ],},},
   S4: {
    type: "Feature",
    properties: { id: "S4" },
    geometry: {
      type: "LineString",
      coordinates: [ [-76.714477, 39.255739], [-76.714083, 39.255423],], //[inter with 3], [inter with 5]
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
        [-76.714555, 39.255194], [-76.714579, 39.255124], //[I11] [I36]
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
        [-76.7132945, 39.254843], [-76.713085, 39.255274],[-76.712980, 39.255247] //[intersection w 33,34], [front ofCHEM_2_N]]
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
        [-76.712522, 39.254551], [-76.712401, 39.254522] //[I22],[Bio_1_S]
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
        [-76.712648,39.254281], [-76.712908, 39.254359] //[I24],[I25]
      ],},},

    S47: {
    type: "Feature",
    properties: { id: "S47" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712648, 39.254281], [-76.712852,39.253849] //[I24],[I26]
      ],},},

    S48: {
    type: "Feature",
    properties: { id: "S48" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712908, 39.254359], [-76.713050, 39.254391] //[I25],[UC_1_E]
      ],},},

    S49: {
    type: "Feature",
    properties: { id: "S49" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.712908, 39.254359], [-76.713031,39.254119] //[I25],[UC_1_S]
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
    properties: { id: "S61" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.713329,39.252851], [-76.713541, 39.252914] //[I30], [ADM_1_S]
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
        [-76.712031, 39.255585], [-76.711851, 39.255574] ,[-76.711626, 39.255431], //[I37],[],[I35]
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
        [-76.710875, 39.255232],[-76.710810, 39.255228], [-76.710749, 39.255219], [-76.710668, 39.255190],
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
    properties: { id: "S85" },
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
    properties: { id: "S86" },
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
    properties: { id: "S88" },
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
        [-76.712041, 39.256158],[-76.711864, 39.255973], [-76.712031, 39.255585], //[I42],[], [I37]
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
        [-76.710939, 39.255244], [-76.711191, 39.255697], //[I38], [I43]
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
        [-76.711191, 39.255697], [-76.711060, 39.255954], //[I43], [], [I45]
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
    properties: { id: "S105" },
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

    S110: {
    type: "Feature",
    properties: { id: "S110" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711518, 39.256192], [-76.711535, 39.256303] //[I54] [LIB_1_E]
      ],},},

    S111: {
    type: "Feature",
    properties: { id: "S111" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711518, 39.256192], [-76.711371, 39.256052] //[I54] [I44]
      ],},},

    S112: {
    type: "Feature",
    properties: { id: "S112" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711518, 39.256192], [-76.710692, 39.256740] //[I54] [I55]
      ],},},

    S113: {
    type: "Feature",
    properties: { id: "S113" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711060, 39.255954], [-76.710692, 39.256740] //[I45] [I55]
      ],},},

    S114: {
    type: "Feature",
    properties: { id: "S114" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710440, 39.256877], [-76.710692, 39.256740] //[I56] [I55]
      ],},},

    S115: {
    type: "Feature",
    properties: { id: "S115" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710692, 39.256740], //[I55]
        [-76.710636,39.256771], [-76.710536, 39.256746], [-76.710424, 39.256821],[-76.710402, 39.256723],
        [-76.710317, 39.256785], [-76.710298, 39.256694],
        [-76.710258, 39.256679] //[I57]
      ],},},

    S116: {
    type: "Feature",
    properties: { id: "S116" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710094, 39.256794], [-76.710129, 39.256733], [-76.710258, 39.256679] //[I58],[], [I57]
      ],},},

    S117: {
    type: "Feature",
    properties: { id: "S117" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709276, 39.256401], [-76.710258, 39.256679] //[I59] [I57]
      ],},},

    S118: {
    type: "Feature",
    properties: { id: "S118" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709276, 39.256401], [-76.709751, 39.255581] //[I59] [I47]
      ],},},

    S119: {
    type: "Feature",
    properties: { id: "S119" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709276, 39.256401], [-76.709118, 39.256355] //[I59] [I60]
      ],},},

    S120: {
    type: "Feature",
    properties: { id: "S120" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709217, 39.256156], [-76.709118, 39.256355] //[I61] [I60]
      ],},},

    S121: {
    type: "Feature",
    properties: { id: "S121" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709217, 39.256156], [-76.709099, 39.256125] //[I61] [CWB_0_W]
      ],},},

    S122: {
    type: "Feature",
    properties: { id: "S122" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.709217, 39.256156], //[I61] 
        [-76.709434, 39.255701], [-76.709437, 39.255660],
        [-76.709407, 39.255626]// [I62]
      ],},},

    S123: {
    type: "Feature",
    properties: { id: "S123" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709407, 39.255626], [-76.709515, 39.255512]// [I62], [I63]
      ],},},

    S124: {
    type: "Feature",
    properties: { id: "S124" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.709563, 39.255523], [-76.709515, 39.255512]// [I64], [I63]
      ],},},

    S125: {
    type: "Feature",
    properties: { id: "S125" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.709563, 39.255523], [-76.709751, 39.255581]// [I64], [I47]
      ],},},

    S126: {
    type: "Feature",
    properties: { id: "S126" },
    geometry: {
      type: "LineString",
      coordinates: [
         [-76.709563, 39.255523], [-76.709678, 39.255259]// [I64], [I65]
      ],},},

   S127: {
    type: "Feature",
    properties: { id: "S127" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709678, 39.255259], [-76.709490, 39.255205]// [I65], [PUB_1_W]
      ],},},

   S128: {
    type: "Feature",
    properties: { id: "S128" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709678, 39.255259], [-76.709721, 39.255163]// [I65], [I66]
      ],},},

   S129: {
    type: "Feature",
    properties: { id: "S129" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709721, 39.255163], [-76.709845, 39.254893] //  [I66], [I67]
      ],},},

    S130: {
    type: "Feature",
    properties: { id: "S130" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710000, 39.254936], [-76.709845, 39.254893] //  [I48], [I67]
      ],},},

    S131: {
    type: "Feature",
    properties: { id: "S131" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709883, 39.254802], [-76.709845, 39.254893] //  [I68], [I67]
      ],},},

    S132: {
    type: "Feature",
    properties: { id: "S132" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709883, 39.254802], [-76.709805, 39.254773] //  [I68], [I69]
      ],},},

    S133: {
    type: "Feature",
    properties: { id: "S133" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709687, 39.254742], [-76.709805, 39.254773] //  [PHYS_1_N], [I69]
      ],},},

    S134: {
    type: "Feature",
    properties: { id: "S134" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709883, 39.254802], [-76.710068, 39.254430] //  [I68], [I70]
      ],},},

    S135: {
    type: "Feature",
    properties: { id: "S135" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710068, 39.254430],
        [-76.709953, 39.254236],
        [-76.709923, 39.254225],
        [-76.709885, 39.254244] //  [I70], [PHYS_1_S]
      ],},},

    S136: {
    type: "Feature",
    properties: { id: "S136" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710068, 39.254430], [-76.710119, 39.254354] //  [I70], [I71]
      ],},},


    S137: {
    type: "Feature",
    properties: { id: "S137" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.711036, 39.254422],
        [-76.710931, 39.254372],[-76.710719, 39.254214],[ -76.710556, 39.254231], [-76.710414, 39.254273],
        [-76.710315, 39.254314], [-76.710119, 39.254354] //  [COM_0_E], [I71]
      ],},},

    S138: {
    type: "Feature",
    properties: { id: "S138" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710119, 39.254354], [-76.710073, 39.254204] //  [I71], [I72]
      ],},},
    
    S139: {
    type: "Feature",
    properties: { id: "S139" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.710073, 39.254204], [-76.710261, 39.254136] //  [I72], [I73]
      ],},},

    S140: {
    type: "Feature",
    properties: { id: "S140" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.710261, 39.254136], [-76.710510, 39.254152] //  [I73], [I53]
      ],},},

    S141: {
    type: "Feature",
    properties: { id: "S141" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.710261, 39.254136], [-76.710071, 39.253864] //  [I73], [COMG_1_W]
      ],},},

    S142: {
    type: "Feature",
    properties: { id: "S142" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.710073, 39.254204], [-76.709776, 39.254023] //  [I72], [I74]
      ],},},

    S143: {
    type: "Feature",
    properties: { id: "S143" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709776, 39.254023], [-76.709810 , 39.253944], [-76.709580, 39.253644] // [I74],[], [I75]
      ],},},

    S144: {
    type: "Feature",
    properties: { id: "S144" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709582, 39.253639], [-76.709676, 39.253598] //  [I75], [COMG_1_E]
      ],},},

    S145: {
    type: "Feature",
    properties: { id: "S145" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709582, 39.253639], [-76.709435, 39.253697] //  [I75], [I76]
      ],},},

    S146: {
    type: "Feature",
    properties: { id: "S146" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709100, 39.253845], [-76.709435, 39.253697] //  [I77], [I76]
      ],},},

    S147: {
    type: "Feature",
    properties: { id: "S147" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709100, 39.253845], [-76.709019, 39.253878] //  [I77], [I125]
      ],},},

    S148: {
    type: "Feature",
    properties: { id: "S148" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709776, 39.254023], //[I74]
       [-76.709727, 39.254090], [-76.709583, 39.254159],[-76.709443, 39.254175],[-76.709365, 39.254165],
       [-76.709258, 39.254115], [-76.709137, 39.254015],
       [-76.709019, 39.253878] // [I125]
      ],},},

    S149: {
    type: "Feature",
    properties: { id: "S149" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708392, 39.254258], [-76.709019, 39.253878] //  [I78], [I125]
      ],},},
    
    S150: {
    type: "Feature",
    properties: { id: "S150" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708392, 39.254258], [-76.708185, 39.254416] //  [I78], [I79]
      ],},},

//I80: 39.254497, -76.708458

    S151: {
    type: "Feature",
    properties: { id: "S151" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708458, 39.254497], [-76.708185, 39.254416] //  [I80], [I79]
      ],},},

    S152: {
    type: "Feature",
    properties: { id: "S152" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708185, 39.254416], [-76.708051, 39.254528], [-76.707839, 39.254734], [-76.707682, 39.254987] //  [I79], [I81]
      ],},},

    S153: {
    type: "Feature",
    properties: { id: "S153" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707682, 39.254987], [-76.708494, 39.255228] //  [I81], [I82]
      ],},},

    S154: {
    type: "Feature",
    properties: { id: "S154" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709043, 39.255380], [-76.708494, 39.255228] //  [I83], [I82]
      ],},},

    S155: {
    type: "Feature",
    properties: { id: "S155" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709043, 39.255380], [-76.709075, 39.255305], [-76.709121, 39.255313] //  [I83], [PUB_1_E]
      ],},},


    S156: {
    type: "Feature",
    properties: { id: "S156" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709043, 39.255380], [-76.709515, 39.255512] //  [I83], [I63]
      ],},},

    S157: {
    type: "Feature",
    properties: { id: "S157" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708494, 39.255228], [-76.708665, 39.254855] //  [I82], [I84]
      ],},},

    S158: {
    type: "Feature",
    properties: { id: "S158" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709721, 39.255163], [-76.708665, 39.254855] //  [I66], [I84]
      ],},},
      
    S159: {
    type: "Feature",
    properties: { id: "S159" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709509, 39.254796], [-76.708665, 39.254855] //  [I85], [I84]
      ],},},
      
    S160: {
    type: "Feature",
    properties: { id: "S160" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709509, 39.254796], [-76.709845, 39.254893] //  [I85], [I67]
      ],},},

    S161: {
    type: "Feature",
    properties: { id: "S161" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709509, 39.254796], [-76.709805, 39.254773] //  [I85], [I69]
      ],},},

    S162: {
    type: "Feature",
    properties: { id: "S162" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709509, 39.254796], [-76.708458, 39.254497] //  [I85], [I80]
      ],},},

    S163: {
    type: "Feature",
    properties: { id: "S163" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709407, 39.255626], [-76.708743, 39.255428] //  [I62], [I86]
      ],},},

    S164: {
    type: "Feature",
    properties: { id: "S164" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708699, 39.255540], [-76.708743, 39.255428] //  [SUS_0_S], [I86]
      ],},},
      
    S165: {
    type: "Feature",
    properties: { id: "S165" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708440, 39.255340], [-76.708721, 39.255421] //  [I87, [I86]
      ],},},

    S166: {
    type: "Feature",
    properties: { id: "S166" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708225, 39.255793], [-76.708228, 39.255795] //  [I87], [I88]
      ],},},
      
    S167: {
    type: "Feature",
    properties: { id: "S167" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708209, 39.255745], [-76.708228, 39.255795] //  [I89], [I88]
      ],},},

    S168: {
    type: "Feature",
    properties: { id: "S168" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708209, 39.255745], [-76.708099, 39.255787] //  [I89], [TRG_1_W]
      ],},},
      
    S169: {
    type: "Feature",
    properties: { id: "S169" },
    geometry: {
      type: "LineString",
      coordinates: [
      [-76.708209, 39.255745], 
      [-76.708185, 39.255677], [-76.708150, 39.255596], [-76.708086, 39.255517], [-76.708008, 39.255450],
      [-76.707928, 39.255428] //  [I89], [I90]
      ],},},
      
    S170: {
    type: "Feature",
    properties: { id: "S170" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708440, 39.255340], 
       [-76.708416, 39.255394], [-76.708317, 39.255421], [-76.708212, 39.255442], [-76.708008, 39.255448],
       [-76.707928, 39.255428] //  [I87], [I90]
      ],},},

    S171: {
    type: "Feature",
    properties: { id: "S171" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707928, 39.255428], [-76.707863, 39.255557] //  [I90], [TRG_1_S]
      ],},},

    S172: {
    type: "Feature",
    properties: { id: "S172" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707928, 39.255428], 
       [-76.707815, 39.255388], [-76.707673, 39.255403], [-76.707525, 39.255444],
      [-76.707386, 39.255513] //  [I90], [I92]
      ],},},

    S173: {
    type: "Feature",
    properties: { id: "S173" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707547, 39.255203], [-76.707386, 39.255513] //  [I91], [I92]
      ],},},

    S174: {
    type: "Feature",
    properties: { id: "S174" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707547, 39.255203], [-76.707513, 39.255195] //  [I91], [PAT_1_S]
      ],},},

    S175: {
    type: "Feature",
    properties: { id: "S175" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707735, 39.255135], [-76.707592, 39.255093] //  [I93], [I126]
      ],},},

    S176: {
    type: "Feature",
    properties: { id: "S176" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707735, 39.255135], [-76.707592, 39.255093] //  [I93], [I81]
      ],},},

    S177: {
    type: "Feature",
    properties: { id: "S177" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707735, 39.255135], [-76.708440, 39.255340] //  [I93], [I87]
      ],},},

    S178: {
    type: "Feature",
    properties: { id: "S178" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708225, 39.255793], [-76.708097, 39.256071] //  [I88], [I94]
      ],},},

    S179: {
    type: "Feature",
    properties: { id: "S179" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708772, 39.256267], [-76.708097, 39.256071] //  [I95], [I94]
      ],},},

    S180: {
    type: "Feature",
    properties: { id: "S180" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708772,39.256267], [-76.709118, 39.256355] //  [I95], [I60]
      ],},},
    
    S181: {
    type: "Feature",
    properties: { id: "S181" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708772,39.256267], [-76.708804, 39.256171] //  [I95], [CWb_1_N]
      ],},},
    
    S182: {
    type: "Feature",
    properties: { id: "S182" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709276, 39.256401], [-76.709260, 39.256636] //  [I59], [I96]
      ],},},

    S183: {
    type: "Feature",
    properties: { id: "S183" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709405, 39.256643], [ -76.709395,  39.256663], [-76.709260, 39.256636] //  [ERK_0_W], [I96]
      ],},},
    
    S184: {
    type: "Feature",
    properties: { id: "S184" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-76.709260, 39.256636], [ -76.709271,  39.256720], [-76.709258 , 39.256773], [-76.709194 , 39.256840 ],
        [-76.709019, 39.256927] //  [I96], [],[],[][I97]
      ],},},

    S185: {
    type: "Feature",
    properties: { id: "S185" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.709019, 39.256927], [-76.708875, 39.256888] //  [I97], [I98]
      ],},},

    S186: {
    type: "Feature",
    properties: { id: "S186" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708778, 39.257085], [-76.708875, 39.256888] //  [I99], [I98]
      ],},},

    S187: {
    type: "Feature",
    properties: { id: "S187" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708778, 39.257085], [-76.708309, 39.256950] //  [I99], [I100]
      ],},},

    S188: {
    type: "Feature",
    properties: { id: "S188" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708223, 39.257139], [-76.708309, 39.256950] //  [I111], [I100]
      ],},},

    S189: {
    type: "Feature",
    properties: { id: "S189" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708223, 39.257139], [-76.707933, 39.257054] //  [I111], [I105 = I101]
      ],},},

    S190: {
    type: "Feature",
    properties: { id: "S190" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707947, 39.257257], [-76.707852, 39.257232], [-76.707933, 39.257054] //  [HBR_2_W],  [I105 = I101]
      ],},},

    S191: {
    type: "Feature",
    properties: { id: "S191" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707716, 39.257185], [-76.707855, 39.257222], [-76.707933, 39.257054] //  [HBR_2_E], [I105]
      ],},},

    S192: {
    type: "Feature",
    properties: { id: "S192" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708043, 39.256778], [-76.707933, 39.257054] //  [I112], [I105]
      ],},},

    S193: {
    type: "Feature",
    properties: { id: "S193" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708043, 39.256778], [-76.708013, 39.256875], [-76.708309, 39.256950] //  [I112], [I100]
     
      ],},},

    S194: {
    type: "Feature",
    properties: { id: "S194" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708043, 39.256778], [-76.707786, 39.256686] //  [I112], [I113]
      ],},},

    S195: {
    type: "Feature",
    properties: { id: "S195" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707883, 39.256641], [-76.707786, 39.256686] //  [CHES_0_E], [I113]
      ],},},

    S196: {
    type: "Feature",
    properties: { id: "S196" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707659, 39.256647], [-76.707786, 39.256686] //  [I114], [I113]
      ],},},

    S197: {
    type: "Feature",
    properties: { id: "S197" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707659, 39.256647], 
       [-76.707656, 39.256650], [-76.707718, 39.256506], [-76.707603, 39.256431],[-76.707456, 39.256379], 
       [-76.707383, 39.256335], [-76.707324, 39.256273],
       [-76.707332, 39.256231] //  [I114], [I115]
      ],},},

    S198: {
    type: "Feature",
    properties: { id: "S198" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707415, 39.255980],[-76.707440, 39.256015], [-76.707332, 39.256231] //  [TRG_1_N], [I115]
      ],},},

    S199: {
    type: "Feature",
    properties: { id: "S199" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707115, 39.255889],[-76.707168, 39.255934],[-76.707276, 39.256086], [-76.707332, 39.256231] // [I116]], [I115]
      ],},},

    S200: {
    type: "Feature",
    properties: { id: "S200" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707115, 39.255889],[-76.707056, 39.255862], [-76.706745, 39.255961] // [I116]], [POT_1_W]
      ],},},

    S201: {
    type: "Feature",
    properties: { id: "S201" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.706590, 39.256420],[-76.706380, 39.256111], [-76.706517, 39.256057] // [LOT_12], [POT_0_E]
      ],},},

    S202: {
    type: "Feature",
    properties: { id: "S202" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707115, 39.255889], [-76.707109, 39.255887], [-76.707270, 39.255650], [-76.707386, 39.255513] // [I116]], [I92]
      ],},},

    S203: {
    type: "Feature",
    properties: { id: "S203" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708223, 39.257139],
       [-76.708290, 39.257158], [-76.708266, 39.257216], [-76.708357, 39.257245],[-76.708282, 39.257425],
       [-76.708431, 39.257466] // [I111], [I117]
      ],},},
  
  
    S204: {
    type: "Feature",
    properties: { id: "S204" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708419, 39.257485], [-76.708431, 39.257466] //  [HBR_2_N], [I117]
      ],},},

    S205: {
    type: "Feature",
    properties: { id: "S205" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708442, 39.257446], [-76.708431, 39.257466] //  [HBR_2_S], [I117]
      ],},},

    S206: {
    type: "Feature",
    properties: { id: "S206" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708582, 39.257508], [-76.708431, 39.257466] //  [I118], [I117]
      ],},},

    S207: {
    type: "Feature",
    properties: { id: "S207" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708778, 39.257085], [-76.708477, 39.257733] //  [I118], [I99]
      ],},},

    S208: {
    type: "Feature",
    properties: { id: "S208" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708582, 39.257508], [-76.708477, 39.257733] //  [I118], [I119]
      ],},},

    S209: {
    type: "Feature",
    properties: { id: "S209" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707895, 39.257567], [-76.708477, 39.257733] //  [LOT_5], [I119]
      ],},},

   S210: {
    type: "Feature",
    properties: { id: "S210" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707895, 39.257567], [-76.707820, 39.257548], [-76.707947, 39.257257] //  [LOT_5], [HBR_2_W]
      ],},},

   S211: {
    type: "Feature",
    properties: { id: "S211" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708471, 39.257743], [-76.708402, 39.257889] //  [I119, [I120]
      ],},},

   S212: {
    type: "Feature",
    properties: { id: "S212" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708167, 39.257939], [-76.708204, 39.257837],[-76.708402, 39.257889] //  [PRE_1_S] [I120]
      ],},},

   S213: {
    type: "Feature",
    properties: { id: "S213" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708659, 39.257698], [-76.708550, 39.257922],[-76.708402, 39.257889] //  [I121] [I120]
      ],},},

   S214: {
    type: "Feature",
    properties: { id: "S214" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.708659, 39.257698], [-76.709019, 39.256927] //  [I121] [I97]
      ],},},

    S216: {
    type: "Feature",
    properties: { id: "S216" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.712031, 39.255585], 
       [-76.711851, 39.255579], [-76.711750, 39.255594], [-76.711637, 39.255639], [-76.711551, 39.255687],
       [-76.711447, 39.255834] //  [I37] [I123]
      ],},},
     
    S217: {
    type: "Feature",
    properties: { id: "S217" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.711371, 39.256052], [-76.711447, 39.255834] //  [I44] [I123]
      ],},},
     
    S218: {
    type: "Feature",
    properties: { id: "S218" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.711191, 39.255697], [-76.711447, 39.255834] //  [I43] [I123]
      ],},},
  
    S219: {
    type: "Feature",
    properties: { id: "S219" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.714579, 39.255124], [-76.714633, 39.255138] //  [I36], [PAHB_1_E]
      ],},},

    S220: {
    type: "Feature",
    properties: { id: "S220" },
    geometry: {
      type: "LineString",
      coordinates: [
       [-76.707547, 39.255203], [-76.707592, 39.255093] //  [I91], [I126]
      ],},},
};

