// ApplyObstructionsPage.tsx
import React, { useMemo, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LatLng } from "leaflet";
import MapDisplay from "./OpenMap";
import type { SegmentFeature } from "./Segments";
import { SEGMENTS } from "./Segments";
import { getAllEntranceMarkers } from "./entrance";

const ApplyObstructionsPage: React.FC = () => {
  const [selectedSegmentIds, setSelectedSegmentIds] = useState<string[]>([]);

  // 🔹 All segments as an array
  const allSegments: SegmentFeature[] = useMemo(
    () => Object.values(SEGMENTS),
    []
  );

  // Segments to show on the map are *all* segments, not just a path
  const [routeSegments] = useState<SegmentFeature[]>(allSegments);
  const [routeVersion, setRouteVersion] = useState(0);

  const entrances = getAllEntranceMarkers();

  const center = new LatLng(39.2557, -76.711); // same as Homepage

  const handleSegmentToggle = (segmentId: string) => {
    setSelectedSegmentIds((prev) => {
      const exists = prev.includes(segmentId);
      const next = exists
        ? prev.filter((id) => id !== segmentId)
        : [...prev, segmentId];

      // bump version so GeoJSON remounts & recalculates style
      setRouteVersion((v) => v + 1);
      return next;
    });
  };

  const handleClear = () => {
    setSelectedSegmentIds([]);
    setRouteVersion((v) => v + 1);
  };

  const handleApply = async () => {
    if (selectedSegmentIds.length === 0) {
      alert("No segments selected.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/apply-obstructions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          segmentIds: selectedSegmentIds,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        alert(`Failed to apply obstructions: ${err.error ?? response.status}`);
        return;
      }

      alert(
        `Applied obstructions to ${selectedSegmentIds.length} segment(s).`
      );
    } catch (e) {
      console.error(e);
      alert("Error contacting backend. Check console / server logs.");
    }
  };

  return (
    <Container
      fluid
      className="p-2"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <Row className="h-100 g-0">
        {/* Left: controls */}
        <Col
          md={3}
          className="d-flex flex-column gap-3 p-3"
          style={{ overflowY: "auto" }}
        >
          <h5>Apply Obstructions</h5>
          <p className="mb-1">
            Click a segment on the map to mark it as <span style={{ color: "red" }}>blocked</span>.
          </p>
          <p className="mb-2">
            Hover a segment to see its ID (e.g., <code>Segment 1234</code>).
          </p>

          <div className="mb-2">
            <strong>Selected:</strong> {selectedSegmentIds.length} segment
            {selectedSegmentIds.length === 1 ? "" : "s"}
          </div>

          {selectedSegmentIds.length > 0 && (
            <div
              style={{
                maxHeight: "150px",
                overflowY: "auto",
                fontSize: "0.9rem",
                border: "1px solid #ddd",
                padding: "0.4rem",
                borderRadius: "4px",
              }}
            >
              {selectedSegmentIds.map((id) => (
                <div key={id}>{id}</div>
              ))}
            </div>
          )}

          <div className="d-flex gap-2 mt-2">
            <Button variant="outline-secondary" onClick={handleClear}>
              Clear
            </Button>
            <Button variant="danger" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </Col>

        {/* Right: map */}
        <Col md={9} className="p-0 d-flex" style={{ height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <MapDisplay
              center={center}
              routeSegments={routeSegments}
              routeVersion={routeVersion}
              fromEntrance={null}
              toEntrance={null}
              showAmenities={false}
              entrances={entrances}
              onEntranceClick={undefined}
              // 🔴 NEW: obstruction selection mode turned ON
              segmentSelectionMode={true}
              selectedSegmentIds={selectedSegmentIds}
              onSegmentToggle={handleSegmentToggle}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyObstructionsPage;