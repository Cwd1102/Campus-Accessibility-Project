import React, { useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import type { Map as LeafletMap, LatLngExpression } from "leaflet";
import type { Feature, FeatureCollection, LineString } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type SegmentFeature = Feature<LineString, { id: string }>;

interface MapDisplayProps {
  center: LatLngExpression;           // original campus center
  zoom?: number;
  routeSegments: SegmentFeature[];
  fromEntrance?: { position: LatLngExpression; name: string } | null;
  toEntrance?: { position: LatLngExpression; name: string } | null;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ 
    center, 
    zoom = 16, 
    routeSegments, 
    fromEntrance,
    toEntrance,
 }) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const featureCollection: FeatureCollection | null =
    routeSegments.length > 0
      ? { type: "FeatureCollection", features: routeSegments }
      : null;
    
    // useEffect(() => {
    //     if (!mapRef.current || !featureCollection) return;

    //     const layer = L.geoJSON(featureCollection);
    //     const bounds = layer.getBounds();
    //     if (bounds.isValid()) {
    //     mapRef.current.fitBounds(bounds, { padding: [30, 30] });
    //     }
    // }, [featureCollection]);

  const handleRecenter = () => {
    if (!mapRef.current) return;
    mapRef.current.setView(center, zoom);  // snap back to original view
  };

  const blueIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

   const redIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
   });

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
              color: "#0066ff",
              weight: 5,
            })}
          />
        )}

         {/* ⭐ NEW: entrance markers with clickable popups */}
        {fromEntrance && (
          <Marker position={fromEntrance.position} icon={redIcon}>
            <Popup>
              <strong>Start Entrance:</strong> {fromEntrance.name}
            </Popup>
          </Marker>
        )}

        {toEntrance && (
          <Marker position={toEntrance.position} icon={blueIcon}>
            <Popup>
              <strong>Destination Entrance:</strong> {toEntrance.name}
            </Popup>
          </Marker>
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