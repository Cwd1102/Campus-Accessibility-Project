//export default function ReportObstruction() {

    
 // return <span>We can add a quick survey for improvement</span>;
//}
import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton, Form, Alert,
} from "react-bootstrap";

// IMPORTANT: be sure your app includes Bootstrap's CSS once at the root entrypoint:
// import 'bootstrap/dist/css/bootstrap.min.css'

// ---- Types ----
interface ReportEntry {
  id: string;
  building: string;
  floor: string;
  locationType: "Elevator" | "Ramp" | "Accessibility Route" | "Door Button"| "Other";
  notes?: string;
  timestamp: string; // ISO
}

const STORAGE_KEY = "accessibility_reports_v1";

// ---- Helpers ----
function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// function toCSV(entries: ReportEntry[]): string {
//   const header = [
//     "id",
//     "timestamp",
//     "building",
//     "floor",
//     "locationType",
//     "notes",
//   ];
//   const escape = (val: string | undefined) =>
//     '"' + String(val ?? "").replaceAll('"', '""') + '"';
//   const lines = [header.join(",")].concat(
//     entries.map((e) =>
//       [
//         escape(e.id),
//         escape(e.timestamp),
//         escape(e.building),
//         escape(e.floor),
//         escape(e.locationType),
//         escape(e.notes ?? ""),
//       ].join(",")
//     )
//   );
//   return lines.join("\n");
// }

// function download(filename: string, text: string, type = "text/csv") {
//   const blob = new Blob([text], { type });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = filename;
//   document.body.appendChild(a);
//   a.click();
//   a.remove();
//   URL.revokeObjectURL(url);
// }

// Example campus data (customize as needed)
const BUILDINGS = [
  "AOK Library & Gallery (852)",
  "Biological Sciences (851)",
  "Commons (895)",
  "Engineering (886)",
  "Fine Arts (865)",
  "Information Technology Building (897)",
  "Interdisciplinary Life Sciences Building (908)",
  "Math & Psychology (860)", 
  "Performing Arts and Humanities (905)", 
  "Physics (892)", 
  "Public Policy (898)",
  "Retrievers Activity Center (861)",
  "Sherman Hall (877)",
  "Sondheim Hall (856)",
  "University Center (857)",
];

const FLOORS = ["Basement", "Ground", "1", "2", "3", "4", "5"];

const LOCATION_TYPES: ReportEntry["locationType"][] = [
  "Elevator",
  "Ramp",
  "Accessibility Route",
  "Door Button",
];

export default function ReportObstruction() {
  // Selections
  const [building, setBuilding] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [locationType, setLocationType] = useState<ReportEntry["locationType"] | "">("");
  const [notes, setNotes] = useState<string>("");

  // Data store (local)
  const [entries, setEntries] = useState<ReportEntry[]>([]);

  // UI state
  const [saved, setSaved] = useState<null | { id: string }>(null);
  const isComplete = useMemo(
    () => Boolean(building && floor && locationType),
    [building, floor, locationType]
  );

  // Load existing from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to load stored reports", e);
    }
  }, []);

  // Persist when entries change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.warn("Failed to persist reports", e);
    }
  }, [entries]);

  const resetForm = () => {
    setBuilding("");
    setFloor("");
    setLocationType("");
    setNotes("");
  };

  const handleSubmit = async () => {
    if (!isComplete) return;

    const entry: ReportEntry = {
      id: uid(),
      building,
      floor,
      locationType: locationType as ReportEntry["locationType"],
      notes: notes.trim() || undefined,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:8080/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });

      if (!res.ok) throw new Error("Failed to save report");
      
      const data = await res.json();



      console.log("Saved report:", data);
      setSaved({ id: data.id });
      resetForm();
    } catch (err) {
      console.error("Error submitting report:", err);
      alert("Failed to submit report — please try again.");
    }

  };

  return (
    <Container className="py-6">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h4 mb-3">Accessibility Issue Report</Card.Title>
              <Card.Subtitle className="text-muted mb-4">
                Use the dropdowns to describe where the issue is and what type it is.
              </Card.Subtitle>

              {saved && (
                <Alert
                  variant="success"
                  onClose={() => setSaved(null)}
                  dismissible
                  className="mb-4"
                >
                  Thanks — your report was saved locally and a CSV download was generated.
                </Alert>
              )}

              <Row className="g-3">
                {/* Building */}
                <Col xs={12} md={6}>
                  <Form.Label className="fw-semibold">Building</Form.Label>
                  <DropdownButton
                    id="building-dropdown"
                    title={building || "Select building"}
                    className="w-100"
                    onSelect={(evtKey) => setBuilding(evtKey || "")}
                  >
                    {BUILDINGS.map((b) => (
                      <Dropdown.Item eventKey={b} key={b} active={building === b}>
                        {b}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>

                {/* Floor */}
                <Col xs={12} md={6}>
                  <Form.Label className="fw-semibold">Floor</Form.Label>
                  <DropdownButton
                    id="floor-dropdown"
                    title={floor || "Select floor"}
                    className="w-100"
                    onSelect={(evtKey) => setFloor(evtKey || "")}
                  >
                    {FLOORS.map((f) => (
                      <Dropdown.Item eventKey={f} key={f} active={floor === f}>
                        {f}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>

                {/* Location Type */}
                <Col xs={12} md={6}>
                  <Form.Label className="fw-semibold">Type</Form.Label>
                  <DropdownButton
                    id="type-dropdown"
                    title={locationType || "Elevator / Ramp / Route / Door Button"}
                    className="w-100"
                    onSelect={(evtKey) =>
                      setLocationType((evtKey as ReportEntry["locationType"]) || "")
                    }
                  >
                    {LOCATION_TYPES.map((t) => (
                      <Dropdown.Item eventKey={t} key={t} active={locationType === t}>
                        {t}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>

                {/* Notes (optional) */}
                <Col xs={12}>
                  <Form.Label className="fw-semibold">Notes (optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="e.g., Out of order since this morning; nearest alternative route?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </Col>

                {/* Actions */}
                <Col xs={12} className="d-flex gap-2 mt-2">
                  <Button
                    variant="primary"
                    disabled={!isComplete}
                    onClick={handleSubmit}
                  >
                    Enter
                  </Button>
                </Col>
              </Row>

              {/* Preview of locally saved entries
              <hr className="my-4" />
              <h6 className="mb-3">Saved reports (local preview)</h6>
              {entries.length === 0 ? (
                <div className="text-muted">No entries yet.</div>
              ) : (
                <div className="table-responsive">
                  <Table hover size="sm" className="align-middle">
                    <thead>
                      <tr>
                        <th>When</th>
                        <th>Building</th>
                        <th>Floor</th>
                        <th>Type</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries
                        .slice()
                        .reverse()
                        .map((e) => (
                          <tr key={e.id}>
                            <td>{new Date(e.timestamp).toLocaleString()}</td>
                            <td>{e.building}</td>
                            <td>{e.floor}</td>
                            <td>{e.locationType}</td>
                            <td style={{ maxWidth: 320 }}>{e.notes}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              )} */}

              <div className="mt-3 small text-muted">
                Data is saved in your browser's localStorage under key "{STORAGE_KEY}".
                For a multi-user/production setup, wire the Enter button to a backend endpoint (see notes below).
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
