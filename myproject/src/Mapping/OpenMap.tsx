import React, { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Tooltip,
} from "react-leaflet";
import type {
  Map as LeafletMap,
  LatLngExpression,
  LatLngBoundsExpression,
} from "leaflet";
import L from "leaflet";
import type { Feature, FeatureCollection, LineString } from "geojson";
import "leaflet/dist/leaflet.css";
import type { EntranceMarker } from "./entrance";
import { AMENITIES } from "./Amenities";

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

  segmentSelectionMode?: boolean;               // when true, segments are clickable
  selectedSegmentIds?: string[];                // which segments are currently selected
  onSegmentToggle?: (segmentId: string) => void;
}

// Normalize LatLngExpression → [lat, lng]
const toLatLngTuple = (c: LatLngExpression): [number, number] => {
  if (Array.isArray(c)) {
    return [c[0], c[1]];
  }
  const anyC = c as any;
  if (typeof anyC.lat === "number" && typeof anyC.lng === "number") {
    return [anyC.lat, anyC.lng];
  }
  const ll = c as L.LatLng;
  return [ll.lat, ll.lng];
};

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

  segmentSelectionMode = false,
  selectedSegmentIds = [],
  onSegmentToggle
  
}) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const featureCollection: FeatureCollection | null =
    routeSegments.length > 0
      ? { type: "FeatureCollection", features: routeSegments }
      : null;

  // 🔒 Big bounding box around campus (several km)
  const [lat, lng] = toLatLngTuple(center);
  const padding = 0.01; // ≈ 10–12km box around center — campus is tiny inside this
  const campusBounds: LatLngBoundsExpression = [
    [lat - padding, lng - padding],
    [lat + padding, lng + padding],
  ];

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
        minZoom={15}              // optional: don't zoom out to whole world
        maxBounds={campusBounds}  
        maxBoundsViscosity={1.0}  // hard stop *only* at that big box edge
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
            // style={() => ({
            //   color: "#0066ff",
            //   weight: 5,
            // })}
        //  />
          style={(feature) => {
      const id = (feature?.properties as any)?.id as string | undefined;
      const isSelected =
        segmentSelectionMode && id && selectedSegmentIds.includes(id);
//
      return {
        color: isSelected ? "#ff0000" : "#0066ff", // red if selected, blue otherwise
        weight: 5,
      };
    }}
    onEachFeature={(feature, layer) => {
      const props: any = feature.properties || {};
      const id: string | undefined = props.id;
      if (!id) return;

      if (segmentSelectionMode) {
        // 🏷 show label on hover
        layer.bindTooltip(`Segment ${id}`, {
          sticky: true,
          direction: "auto",
        });

        // click = toggle selection
        layer.on("click", () => {
          if (onSegmentToggle) {
            onSegmentToggle(id);
          }
        });
      }
    }}
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
          bottom: "2rem",
          right: "2rem",
          zIndex: 1000,
          padding: "0.4rem 0.9rem",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#0d6efd",
          color: "white",
          fontSize: "1.2rem",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
      >
        Recenter
      </button>
    </div>
  );
};

export default MapDisplay;