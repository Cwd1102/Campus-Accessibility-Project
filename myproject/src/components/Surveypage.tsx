import { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  Table,
} from "react-bootstrap";

interface SurveyResponse {
  id: string;
  ratings: { [key: string]: number };
  comments: { [key: string]: string };
  timestamp: string;
}

const STORAGE_KEY = "campus_accessibility_survey_v1";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function download(filename: string, text: string, type = "text/csv") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function SurveyPage() {
  const questions = [
    "The campus map clearly indicates accessible routes.",
    "The accessibility information provided is accurate.",
    "The map is easy to use and navigate.",
    "It’s easy to identify accessible entrances and exits.",
    "Route descriptions match the actual physical paths.",
    "I feel confident using the map to plan my travel on campus.",
    "The accessibility icons and labels are clear.",
    "The colors and contrast on the map make it easy to read.",
    "I can find information about elevators, ramps, and restrooms easily.",
    "Overall, the campus accessibility map is helpful to me.",
  ];

  const [responses, setResponses] = useState<{ [key: string]: number }>({});
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [entries, setEntries] = useState<SurveyResponse[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (q: string, val: number) => {
    setResponses((prev) => ({ ...prev, [q]: val }));
  };

  const handleCommentChange = (q: string, val: string) => {
    setComments((prev) => ({ ...prev, [q]: val }));
  };

  const handleSubmit = () => {
    const missing = questions.filter((q) => responses[q] === undefined);
    if (missing.length > 0) {
      // Popup message if required questions are missing
      window.alert("Please complete all required questions before submitting.");
      return;
    }

    const entry: SurveyResponse = {
      id: uid(),
      ratings: responses,
      comments,
      timestamp: new Date().toISOString(),
    };
    const next = [...entries, entry];
    setEntries(next);
    setSubmitted(true);

    const csv = toCSV(next);
    download("campus_accessibility_survey.csv", csv);

    setResponses({});
    setComments({});
  };

  const toCSV = (entries: SurveyResponse[]) => {
    const header = ["id", "timestamp", ...questions, "Additional Comments"];
    const lines = entries.map((entry) => {
      const row = [
        entry.id,
        entry.timestamp,
        ...questions.map((q) => entry.ratings[q]?.toString() ?? ""),
        entry.comments["overall"] ?? "",
      ];
      return row.join(",");
    });
    return [header.join(","), ...lines].join("\n");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h4 mb-3 text-center">
                Campus Accessibility Feedback Survey
              </Card.Title>
              <Card.Subtitle className="text-muted mb-4 text-center">
                Please share your experience using the campus accessibility map.
                Your responses help us improve accessibility for everyone.
              </Card.Subtitle>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  Thank you for your feedback! Your responses have been saved locally
                  and downloaded as a CSV file.
                </Alert>
              )}

              {/* Likert scale table */}
              <div className="table-responsive mb-4">
                <Table bordered hover className="align-middle text-center">
                  <thead>
                    <tr>
                      <th className="text-start">Question <span className="text-danger">*</span></th>
                      <th>Strongly Disagree (1)</th>
                      <th>Disagree (2)</th>
                      <th>Neutral (3)</th>
                      <th>Agree (4)</th>
                      <th>Strongly Agree (5)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((q, idx) => (
                      <tr key={idx}>
                        <td className="text-start fw-semibold">{q}</td>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <td key={num}>
                            <Form.Check
                              type="radio"
                              name={`q-${idx}`}
                              value={num}
                              checked={responses[q] === num}
                              onChange={() => handleRatingChange(q, num)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              {/* Additional Comments */}
              <div className="mb-4">
                <h5 className="fw-semibold mb-3">
                  Additional Comments or Suggestions (optional)
                </h5>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Share any ideas, suggestions, or details you'd like us to know..."
                    value={comments["overall"] || ""}
                    onChange={(e) => handleCommentChange("overall", e.target.value)}
                  />
                </Form.Group>
              </div>

              {/* Submit button */}
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Submit Survey
                </Button>
              </div>

              {/* Local preview */}
              <hr className="my-4" />
              <h6 className="mb-3">Saved Responses (Local Preview)</h6>
              {entries.length === 0 ? (
                <div className="text-muted">No responses yet.</div>
              ) : (
                <div className="table-responsive">
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Summary (average score)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries
                        .slice()
                        .reverse()
                        .map((e) => {
                          const scores = Object.values(e.ratings);
                          const avg =
                            scores.reduce((a, b) => a + b, 0) / scores.length;
                          return (
                            <tr key={e.id}>
                              <td>{new Date(e.timestamp).toLocaleString()}</td>
                              <td>{avg.toFixed(2)} / 5</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              )}

              <div className="mt-3 small text-muted">
                Data is stored locally in your browser under key "
                {STORAGE_KEY}" and downloaded as a CSV for reference.
                In a real deployment, connect this to a backend database or
                server endpoint for long-term storage.
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

