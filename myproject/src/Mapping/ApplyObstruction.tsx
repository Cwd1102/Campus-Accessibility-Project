import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LatLng } from "leaflet";
import MapDisplay from "./OpenMap";
import type { SegmentFeature } from "./Segments";
import { SEGMENTS } from "./Segments";
import { getAllEntranceMarkers } from "./entrance";

const ApplyObstruction: React.FC = () => {
  const [initialBlockedIds, setInitialBlockedIds] = useState<string[]>([]);
  const [blockedIds, setBlockedIds] = useState<string[]>([]);
  const [routeVersion, setRouteVersion] = useState(0);
  const [loading, setLoading] = useState(true);

  const entrances = getAllEntranceMarkers();
  const center = new LatLng(39.2557, -76.711); // same as Homepage

  // Use ALL segments on this page (admin wants to see everything)
  const allSegments: SegmentFeature[] = useMemo(
    () => Object.values(SEGMENTS),
    []
  );

  // 1) On mount: pull obstruction stats from /getobstruction
  useEffect(() => {
    const fetchObstructions = async () => {
      try {
        const resp = await fetch("http://localhost:8080/getobstruction");
        if (!resp.ok) {
          console.error("Failed to fetch obstructions:", resp.status);
          setLoading(false);
          return;
        }

        const data: { id: string; isObstructed: boolean }[] =
          await resp.json();

        const blocked = data
          .filter((s) => s.isObstructed === true)
          .map((s) => s.id);

        setInitialBlockedIds(blocked);
        setBlockedIds(blocked);
        setRouteVersion((v) => v + 1);
      } catch (err) {
        console.error("Error fetching obstructions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchObstructions();
  }, []);

  // 2) Toggle red/blue when segment clicked
  const handleSegmentToggle = (segmentId: string) => {
    setBlockedIds((prev) => {
      const exists = prev.includes(segmentId);
      const next = exists
        ? prev.filter((id) => id !== segmentId) // red -> blue
        : [...prev, segmentId];                // blue -> red

      setRouteVersion((v) => v + 1);
      return next;
    });
  };

  const handleClear = () => {
    setBlockedIds([]);
    setRouteVersion((v) => v + 1);
  };

  // 3) On Apply, compute block/unblock and POST to /apply-obstructions
  const handleApply = async () => {
    // compute diff
    const block = blockedIds.filter((id) => !initialBlockedIds.includes(id));
    const unblock = initialBlockedIds.filter(
      (id) => !blockedIds.includes(id)
    );

    if (block.length === 0 && unblock.length === 0) {
      alert("No changes to apply.");
      return;
    }

    try {
      const resp = await fetch("http://localhost:8080/apply-obstructions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ block, unblock }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        alert(
          `Failed to apply obstructions: ${err.error ?? resp.statusText}`
        );
        return;
      }

      const result = await resp.json();
      console.log("Apply result:", result);

      alert(
        `Obstructions updated. Blocked: ${result.blocked}, Unblocked: ${result.unblocked}.`
      );

      // Sync baseline with what we just saved
      setInitialBlockedIds(blockedIds);
    } catch (err) {
      console.error("Error applying obstructions:", err);
      alert("Error applying obstructions. Check console/server logs.");
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
          ////////////
          <h5>Apply Obstructions</h5>
          <p className="mb-1">
            **Hover a segment to see its ID**
          </p>


          <p className="mb-7">
            Click segments to select:<br />
            <span style={{ color: "red", fontWeight: "bold"}}>blocked (red)</span><br />
            <span style={{ color: "#0066ff", fontWeight: "bold"}}>available (blue)</span>
          </p>
          
          <div className="mb-2">
            <strong>Selected segments to block:</strong> {blockedIds.length}
          </div>

          {blockedIds.length > 0 && (
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
              {blockedIds.map((id) => (
                <div key={id}>{id}</div>
              ))}
            </div>
          )}

          <div className="d-flex gap-2 mt-2">
            <Button variant="outline-secondary" onClick={handleClear}>
              Clear crurent selection
            </Button>
            <Button
              variant="danger"
              onClick={handleApply}
              disabled={loading}
            >
              {loading ? "Loading..." : "Apply Changes"}
            </Button>
          </div>
        </Col>

        {/* Right: map */}
        <Col md={9} className="p-0 d-flex" style={{ height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <MapDisplay
              center={center}
              routeSegments={allSegments}           // show ALL segments
              routeVersion={routeVersion}
              fromEntrance={null}
              toEntrance={null}
              showAmenities={false}
              entrances={entrances}
              onEntranceClick={undefined}
              segmentSelectionMode={true}
              selectedSegmentIds={blockedIds}      // red = obstructed
              onSegmentToggle={handleSegmentToggle}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyObstruction;