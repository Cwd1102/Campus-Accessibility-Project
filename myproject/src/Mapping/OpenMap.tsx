// import React from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import type { Feature, FeatureCollection, LineString } from "geojson";
// import type { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";

// type SegmentFeature = Feature<LineString, { id: string }>;

// interface MapDisplayProps {
//   center: LatLngExpression;
//   zoom?: number;
//   /** Route segments to display. If empty, nothing is drawn. */
//   routeSegments: SegmentFeature[];
// }

// const MapDisplay: React.FC<MapDisplayProps> = ({ center, zoom = 16, routeSegments }) => {
//   const featureCollection: FeatureCollection | null =
//     routeSegments.length > 0
//       ? {
//           type: "FeatureCollection",
//           features: routeSegments,
//         }
//       : null;

//   return (
//     <MapContainer
//        center={[39.2553, -76.711]} // campus center
//         zoom={16}
//         style={{
//         height: "100vh",   // full screen height
//         width: "100%",     // full width
//   }}
//     >
//       {/* OpenStreetMap tiles */}
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     attribution='&copy; OpenStreetMap contributors'
//       />

//       {/* Only draw route if we actually have segments */}
//       {featureCollection && (
//         <GeoJSON
//           data={featureCollection}
//           style={() => ({
//             color: "#ff6600",
//             weight: 5,
//           })}
//         />
//       )}
//     </MapContainer>
//   );
// };

// export default MapDisplay;

import React, { useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Map as LeafletMap, LatLngExpression } from "leaflet";
import type { Feature, FeatureCollection, LineString } from "geojson";
import "leaflet/dist/leaflet.css";

type SegmentFeature = Feature<LineString, { id: string }>;

interface MapDisplayProps {
  center: LatLngExpression;           // original campus center
  zoom?: number;
  routeSegments: SegmentFeature[];
}

const MapDisplay: React.FC<MapDisplayProps> = ({ center, zoom = 16, routeSegments }) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const featureCollection: FeatureCollection | null =
    routeSegments.length > 0
      ? { type: "FeatureCollection", features: routeSegments }
      : null;

  const handleRecenter = () => {
    if (!mapRef.current) return;
    mapRef.current.setView(center, zoom);  // snap back to original view
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // parent must give this component a real height
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        ref={mapRef}   // ⬅️ use ref instead of whenCreated
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {featureCollection && (
          <GeoJSON
            data={featureCollection}
            style={() => ({
              color: "#ff6600",
              weight: 5,
            })}
          />
        )}
      </MapContainer>

      {/* Recenter button in bottom-right */}
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