import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Table, Alert, Spinner } from "react-bootstrap";

type LocationType = "Elevator" | "Ramp" | "Accessibility Route" | "Door Button" | "Other";

interface ReportRow {
  id: string;              // Mongo _id as string
  building: string;
  floor: string;
  locationType: LocationType;
  notes?: string;
  timestamp: string;       // ISO
}

const API_BASE = "http://localhost:8080/report";

export default function ManageObstruction() {
  const [items, setItems] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/list`);
      if (!res.ok) throw new Error(`List failed: ${res.status}`);
      const data = await res.json();
      setItems(data.items ?? []);
    } catch (e: any) {
      setError(e?.message || "Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleDelete = async (id: string) => {
    if (!id) return;
    setDeleting(id);
    setError(null);
    setSuccessMsg(null);
    try {
      const res = await fetch(`${API_BASE}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      const data = await res.json();
      if (!data.success) throw new Error("No matching document found");
      setItems((prev) => prev.filter((r) => r.id !== id));
      setSuccessMsg("Report deleted.");
    } catch (e: any) {
      setError(e?.message || "Failed to delete");
    } finally {
      setDeleting(null);
    }
  };

  const count = items.length;
  const subtitle = useMemo(() => {
    if (loading) return "Loading reports…";
    if (count === 0) return "No reports yet.";
    return `${count} report${count === 1 ? "" : "s"} total`;
  }, [loading, count]);

  return (
    <Container className="py-6">
      <Row className="justify-content-center">
        <Col md={11} lg={10}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <Card.Title className="h4 mb-0">Manage Accessibility Reports</Card.Title>
                  <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
                </div>
                <div className="d-flex gap-2">
                  <Button variant="outline-secondary" onClick={fetchAll} disabled={loading}>
                    {loading ? <Spinner size="sm" /> : "Refresh"}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="danger" className="mt-3" onClose={() => setError(null)} dismissible>
                  {error}
                </Alert>
              )}
              {successMsg && (
                <Alert
                  variant="success"
                  className="mt-3"
                  onClose={() => setSuccessMsg(null)}
                  dismissible
                >
                  {successMsg}
                </Alert>
              )}

              <div className="table-responsive mt-3">
                <Table hover size="sm" className="align-middle">
                  <thead>
                    <tr>
                      <th>When</th>
                      <th>Building</th>
                      <th>Floor</th>
                      <th>Type</th>
                      <th>Notes</th>
                      <th style={{ width: 120 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((r) => (
                      <tr key={r.id}>
                        <td>{new Date(r.timestamp).toLocaleString()}</td>
                        <td>{r.building}</td>
                        <td>{r.floor}</td>
                        <td>{r.locationType}</td>
                        <td style={{ maxWidth: 360, whiteSpace: "pre-wrap" }}>{r.notes}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDelete(r.id)}
                              disabled={deleting === r.id}
                              title={`Delete ${r.id}`}
                            >
                              {deleting === r.id ? "Deleting…" : "Delete"}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {!loading && items.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-muted">
                          Nothing to display yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>

              <div className="small text-muted mt-2">
                Tip: If you added reports before this page existed, hit Refresh.
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
