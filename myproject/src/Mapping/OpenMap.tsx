import React, { useRef, useEffect, useState } from "react";
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
import "./OpenMap.css";

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

  locateMeVersion?: number;
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
  onSegmentToggle,

  locateMeVersion,
  
}) => {
  const mapRef = useRef<LeafletMap | null>(null);
  const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);
  const [followUser] = useState(true);
  const [userHeading, setUserHeading] = useState<number | null>(null);
  //for gliding
  const animFrameRef = useRef<number | null>(null);


  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     console.warn("Geolocation is not supported by this browser.");
  //     return;
  //   }

  //   const watchId = navigator.geolocation.watchPosition(
  //     (pos) => {
  //       const { latitude, longitude, heading } = pos.coords;
  //       const newPos: LatLngExpression = [latitude, longitude];

  //       setUserPosition(newPos);

  //       if (heading != null && !Number.isNaN(heading)) {
  //       setUserHeading(heading);  // degrees: 0 = north
  //   }
  

  //       // Keep map roughly centered on the user while followUser = true
  //       if (followUser && mapRef.current) {
  //         mapRef.current.setView(newPos, mapRef.current.getZoom());
  //       }
  //     },
  //     (err) => {
  //       console.error("Error watching geolocation:", err);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       maximumAge: 10_000,  // accept locations up to 10s old
  //       timeout: 20_000,
  //     }
  //   );

  //   return () => {
  //     navigator.geolocation.clearWatch(watchId);
  //   };
  // }, [followUser]);

  const lastPosRef = useRef<{ lat: number; lng: number } | null>(null);

  const startSmoothMove = (
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
  durationMs = 2000
) => {
  // Cancel any previous animation
  if (animFrameRef.current !== null) {
    cancelAnimationFrame(animFrameRef.current);
  }

  const startTime = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - startTime) / durationMs); // 0 → 1
    const lat = from.lat + (to.lat - from.lat) * t;
    const lng = from.lng + (to.lng - from.lng) * t;

    setUserPosition([lat, lng]);

    if (t < 1) {
      animFrameRef.current = requestAnimationFrame(step);
    }
  };

  animFrameRef.current = requestAnimationFrame(step);
};

useEffect(() => {
  if (!navigator.geolocation) {
    console.warn("Geolocation is not supported by this browser.");
    return;
  }

  const watchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const newLat = latitude;
      const newLng = longitude;
      const newPos = { lat: newLat, lng: newLng };

      console.log("geo update:", {
        lat: newLat,
        lng: newLng,
        accuracy,
        ts: Date.now(),
      });

      const last = lastPosRef.current;

      // First fix: just set directly
      if (!last) {
        lastPosRef.current = newPos;
        setUserPosition([newLat, newLng]);
      } else {
        // Compute distance so we can ignore crazy tiny jitters
        const toRad = (d: number) => (d * Math.PI) / 180;
        const R = 6371000; // meters
        const dLat = toRad(newLat - last.lat);
        const dLng = toRad(newLng - last.lng);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(last.lat)) *
            Math.cos(toRad(newLat)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const dist = R * c;

        if (dist > 1) {
          // 👉 moved at least ~1m: animate from last → new
          startSmoothMove(last, newPos, 2000); // 2s glide

          // Compute bearing from last → new for the cone
          const lat1 = toRad(last.lat);
          const lat2 = toRad(newLat);
          const y = Math.sin(dLng) * Math.cos(lat2);
          const x =
            Math.cos(lat1) * Math.sin(lat2) -
            Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
          let brng = (Math.atan2(y, x) * 180) / Math.PI;
          brng = (brng + 360) % 360;
          setUserHeading(brng);
        } else {
          // barely moved: just update position without animating
          setUserPosition([newLat, newLng]);
        }

        lastPosRef.current = newPos;
      }

      // Keep map roughly centered on the (target) user location
      if (followUser && mapRef.current) {
        mapRef.current.setView([newLat, newLng], mapRef.current.getZoom());
      }
    },
    (err) => {
      console.error("Error watching geolocation:", err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,   // don't reuse old positions
      timeout: 10000,
    }
  );

  return () => {
    navigator.geolocation.clearWatch(watchId);
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
    }
  };
}, [followUser]);

// useEffect(() => {
//   if (!navigator.geolocation) {
//     console.warn("Geolocation is not supported by this browser.");
//     return;
//   }

//   const watchId = navigator.geolocation.watchPosition(
//     (pos) => {
//       console.log("timestamp:", Date.now());
//       const { latitude, longitude, accuracy, speed } = pos.coords;
//       const newLat = latitude;
//       const newLng = longitude;
//       const newPos: LatLngExpression = [newLat, newLng];
    

//       // 🔍 Debug: see how often updates come in and how good they are
//       console.log("geo update:", {
//         lat: newLat,
//         lng: newLng,
//         accuracy,
//         speed,
//       });

//       setUserPosition(newPos);

//       // 🧭 Compute heading from last position if available
//       const last = lastPosRef.current;
//       if (last) {
//         const toRad = (d: number) => (d * Math.PI) / 180;
//         const toDeg = (r: number) => (r * 180) / Math.PI;

//         const lat1 = toRad(last.lat);
//         const lat2 = toRad(newLat);
//         const dLon = toRad(newLng - last.lng);

//         // Bearing formula
//         const y = Math.sin(dLon) * Math.cos(lat2);
//         const x =
//           Math.cos(lat1) * Math.sin(lat2) -
//           Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

//         let brng = toDeg(Math.atan2(y, x));
//         brng = (brng + 360) % 360; // normalize 0–360

//         // Only update heading if we've moved at least ~1m to avoid crazy noise
//         const R = 6371000; // Earth radius in meters
//         const dLat = toRad(newLat - last.lat);
//         const dLng = toRad(newLng - last.lng);
//         const a =
//           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//           Math.cos(lat1) *
//             Math.cos(lat2) *
//             Math.sin(dLng / 2) *
//             Math.sin(dLng / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const dist = R * c;

//         if (dist > 1) {
//           // moved > 1m, heading makes sense
//           setUserHeading(brng);
//         }
//       }

//       // Save current as last
//       lastPosRef.current = { lat: newLat, lng: newLng };

//       // 🗺️ Keep map centered on you while followUser = true
//       if (followUser && mapRef.current) {
//         mapRef.current.setView(newPos, mapRef.current.getZoom());
//       }
//     },
//     (err) => {
//       console.error("Error watching geolocation:", err);
//     },
//     {
//       enableHighAccuracy: true,
//       maximumAge: 0,    // 👉 don't reuse old locations; get fresh ones
//       timeout: 10000,
//     }
//   );

//   return () => {
//     navigator.geolocation.clearWatch(watchId);
//   };
// }, [followUser]);

  useEffect(() => {
  if (!locateMeVersion) return;          // undefined or 0 → ignore
  if (!mapRef.current) return;
  if (!userPosition) {
    // Optional: could show a toast/alert here if you want
    console.warn("User position not yet available.");
    return;
  }

  mapRef.current.setView(userPosition, 18); // 18 = nice close zoom
}, [locateMeVersion, userPosition]);

  const featureCollection: FeatureCollection | null =
    routeSegments.length > 0
      ? { type: "FeatureCollection", features: routeSegments }
      : null;

  //Big bounding box around campus (several km)
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
  const createConeIcon = (bearing: number | null) =>
  L.divIcon({
    className: "leaflet-div-icon user-cone-icon",
    html: `
      <div class="user-cone-wrapper" style="transform: rotate(${bearing ?? 0}deg);">
        <div class="cone-shape"></div>
      </div>
    `,
    iconSize: [80, 80],        // large so the cone extends in front
    iconAnchor: [40, 40],      // center this exactly on the user
  });
    const userIcon = L.icon({
    iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/man.png",     
    iconSize: [30, 30],
    iconAnchor: [13, 26],
  });

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
      {userPosition && (
        <>
          {/* Cone behind the person */}
          <Marker
            position={userPosition}
            icon={createConeIcon(userHeading)}
            interactive={false} // cone shouldn't absorb clicks
            zIndexOffset={-1000} // ensure it sits UNDER the person
          />

          {/* Your walking person icon */}
          <Marker
            position={userPosition}
            icon={userIcon}
            zIndexOffset={1000}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
              You are here
            </Tooltip>
          </Marker>
        </>
      )}
        {featureCollection && (
          <>
            {/* Visible line (same colors/logic you already had) */}
            <GeoJSON
              key={`route-visible-${routeVersion}`}
              data={featureCollection}
              style={(feature) => {
                const id = (feature?.properties as any)?.id as string | undefined;
                const isSelected =
                  segmentSelectionMode && id && selectedSegmentIds.includes(id);

                return {
                  color: isSelected ? "#ff0000" : "#0066ff", // red if selected, blue otherwise
                  weight: 5,                                 // visual thickness
                };
              }}
            />

    {/* Fat invisible hitbox, only when selecting segments */}
    {segmentSelectionMode && (
      <GeoJSON
        key={`route-hitbox-${routeVersion}`}
        data={featureCollection}
        style={() => ({
          color: "#000000", // any color, we hide it with opacity
          opacity: 0,       // invisible but still interactive
          weight: 20,       // 👈 big click radius
        })}
        onEachFeature={(feature, layer) => {
          const props: any = feature.properties || {};
          const id: string | undefined = props.id;
          if (!id) return;

          // show label on hover
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
        }}
      />
    )}
  </>
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