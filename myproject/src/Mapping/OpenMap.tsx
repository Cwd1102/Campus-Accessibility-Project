// import React, { useRef } from "react";
// import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
// import type { Map as LeafletMap, LatLngExpression } from "leaflet";
// import type { Feature, FeatureCollection, LineString } from "geojson";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { AMENITIES } from "./Amenities"; 

// type SegmentFeature = Feature<LineString, { id: string }>;

// interface MapDisplayProps {
//   center: LatLngExpression;           // original campus center
//   zoom?: number;
//   routeSegments: SegmentFeature[];
//   fromEntrance?: { position: LatLngExpression; name: string } | null;
//   toEntrance?: { position: LatLngExpression; name: string } | null;
//    showAmenities?: boolean; 
// }

// const MapDisplay: React.FC<MapDisplayProps> = ({ 
//     center, 
//     zoom = 16, 
//     routeSegments, 
//     fromEntrance,
//     toEntrance,
//     showAmenities = false, 
//  }) => {
//   const mapRef = useRef<LeafletMap | null>(null);

//   const featureCollection: FeatureCollection | null =
//     routeSegments.length > 0
//       ? { type: "FeatureCollection", features: routeSegments }
//       : null;
    
//     // useEffect(() => {
//     //     if (!mapRef.current || !featureCollection) return;

//     //     const layer = L.geoJSON(featureCollection);
//     //     const bounds = layer.getBounds();
//     //     if (bounds.isValid()) {
//     //     mapRef.current.fitBounds(bounds, { padding: [30, 30] });
//     //     }
//     // }, [featureCollection]);

//   const handleRecenter = () => {
//     if (!mapRef.current) return;
//     mapRef.current.setView(center, zoom);  // snap back to original view
//   };

//   const blueIcon = L.icon({
//     iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//   });

//    const redIcon = L.icon({
//     iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//    });

//    const elevatorIcon = L.divIcon({
//     className: "amenity-icon amenity-elevator",
//     html: "🛗",
//     iconSize: [40, 40],
//     iconAnchor: [12, 12],
//   });

//   const parkingIcon = L.divIcon({
//     className: "amenity-icon amenity-parking",
//     html: "♿",
//     iconSize: [24, 24],
//     iconAnchor: [12, 12],
//   });

//   const getAmenityIcon = (type: string) => {
//     switch (type) {
//       case "elevator":
//         return elevatorIcon;
//       case "accessible_parking":
//         return parkingIcon;
//       default:
//         return elevatorIcon;
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100%", // parent must give this component a real height
//       }}
//     >
//       <MapContainer
//         center={center}
//         zoom={zoom}
//         ref={mapRef}   // ⬅️ use ref instead of whenCreated
//         style={{ width: "100%", height: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; OpenStreetMap contributors'
//         />

//         {featureCollection && (
//           <GeoJSON
//             data={featureCollection}
//             style={() => ({
//               color: "#0066ff",
//               weight: 5,
//             })}
//           />
//         )}

//          {/* ⭐ NEW: entrance markers with clickable popups */}
//         {fromEntrance && (
//           <Marker position={fromEntrance.position} icon={redIcon}>
//             <Popup>
//               <strong>Start Entrance:</strong> {fromEntrance.name}
//             </Popup>
//           </Marker>
//         )}

//         {toEntrance && (
//           <Marker position={toEntrance.position} icon={blueIcon}>
//             <Popup>
//               <strong>Destination Entrance:</strong> {toEntrance.name}
//             </Popup>
//           </Marker>
//         )}

//         {showAmenities && AMENITIES.map((a) => (
//             <Marker
//               key={a.id}
//               position={a.position}
//               icon={getAmenityIcon(a.type)}
//             >
//               <Popup>
//                 <strong>{a.label}</strong>
//                 <br />
//                 <span>Type: {a.type.replace("_", " ")}</span>
//               </Popup>
//             </Marker>
//           ))}

//       </MapContainer>

      

//       {/* Recenter button in bottom-right */}
//       <button
//         type="button"
//         onClick={handleRecenter}
//         style={{
//           position: "absolute",
//           bottom: "1rem",
//           right: "1rem",
//           zIndex: 1000,
//           padding: "0.4rem 0.9rem",
//           borderRadius: "999px",
//           border: "none",
//           backgroundColor: "#0d6efd",
//           color: "white",
//           fontSize: "0.9rem",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
//           cursor: "pointer",
//         }}
//       >
//         Recenter
//       </button>
//     </div>
//   );
// };

// export default MapDisplay;

// OpenMap.tsx

import React, { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Tooltip,
} from "react-leaflet";
import type { Map as LeafletMap, LatLngExpression } from "leaflet";
import L from "leaflet";
import type { Feature, FeatureCollection, LineString } from "geojson";
import "leaflet/dist/leaflet.css";
import type { EntranceMarker } from "./entrance";
import { AMENITIES } from "./Amenities"; // if you have this; otherwise remove showAmenities logic

export type SegmentFeature = Feature<LineString, { id: string }>;

interface MapDisplayProps {
  center: LatLngExpression;
  zoom?: number;
  routeSegments: SegmentFeature[];
   routeVersion?: number;  
  fromEntrance?: EntranceMarker | null;
  toEntrance?: EntranceMarker | null;
  showAmenities?: boolean;
  entrances: EntranceMarker[]; // ALL entrances, always shown
  onEntranceClick?: (name: string) => void;
}

const MapDisplay: React.FC<MapDisplayProps> = ({
  center,
  zoom = 16,
  routeSegments,
  routeVersion,
  fromEntrance,
  toEntrance,
  showAmenities = false,
  entrances,
  onEntranceClick,
}) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const featureCollection: FeatureCollection | null =
    routeSegments.length > 0
      ? { type: "FeatureCollection", features: routeSegments }
      : null;

  const handleRecenter = () => {
    if (!mapRef.current) return;
    mapRef.current.setView(center, zoom);
  };

  // Icons
  const redIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
    iconSize: [26, 26],
    iconAnchor: [13, 26],
  });

  const blueIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
    iconSize: [26, 26],
    iconAnchor: [13, 26],
  });

  const greyIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png",
    iconSize: [22, 22],
    iconAnchor: [11, 22],
  });

  const elevatorIcon = L.divIcon({
    className: "amenity-icon amenity-elevator",
    html: "🛗",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const parkingIcon = L.divIcon({
    className: "amenity-icon amenity-parking",
    html: "♿",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const rampIcon = L.divIcon({
    className: "amenity-icon amenity-ramp",
    html: "↗",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const getAmenityIcon = (type: string) => {
    switch (type) {
      case "elevator":
        return elevatorIcon;
      case "accessible_parking":
        return parkingIcon;
      case "ramp":
        return rampIcon;
      default:
        return elevatorIcon;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* Route */}
        {featureCollection && (
          <GeoJSON
            key={routeVersion}
            data={featureCollection}
            style={() => ({
              color: "#0066ff",
              weight: 5,
            })}
          />
        )}

        {/* Amenities (optional, toggled) */}
        {showAmenities &&
          AMENITIES.map((a) => (
            <Marker
              key={a.id}
              position={a.position}
              icon={getAmenityIcon(a.type)}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                {a.label}
              </Tooltip>
            </Marker>
          ))}

        {/* ALL entrances, always visible */}
        {entrances.map((e) => {
          const isFrom = fromEntrance && fromEntrance.name === e.name;
          const isTo = toEntrance && toEntrance.name === e.name;
          const icon = isFrom ? redIcon : isTo ? blueIcon : greyIcon;

          return (
            <Marker
              key={e.name}
              position={e.position}
              icon={icon}
              eventHandlers={{
                click: () => onEntranceClick && onEntranceClick(e.name),
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                {e.name}
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Recenter button */}
      <button
        type="button"
        onClick={handleRecenter}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          zIndex: 1000,
          padding: "0.4rem 0.9rem",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#0d6efd",
          color: "white",
          fontSize: "0.9rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
      >
        Recenter
      </button>
    </div>
  );
};

export default MapDisplay;
