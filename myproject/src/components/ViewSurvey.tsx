// import { useEffect, useState, useMemo } from "react";
// import { Container, Row, Col, Card, Table, Alert, Spinner } from "react-bootstrap";

// interface SurveyStats {
//   total: number;
//   averages: number[]; // raw averages from backend
// }

// const questions = [
//   "The campus map clearly indicates accessible routes.",
//   "The accessibility information provided is accurate.",
//   "The map is easy to use and navigate.",
//   "It’s easy to identify accessible entrances and exits.",
//   "Route descriptions match the actual physical paths.",
//   "I feel confident using the map to plan my travel on campus.",
//   "The accessibility icons and labels are clear.",
//   "The colors and contrast on the map make it easy to read.",
//   "I can find information about elevators, ramps, and restrooms easily.",
//   "Overall, the campus accessibility map is helpful to me.",
// ];

// // Likert labels for 1–5
// const likertLabels: { [score: number]: string } = {
//   1: "Strongly Disagree",
//   2: "Disagree",
//   3: "Neutral",
//   4: "Agree",
//   5: "Strongly Agree",
// };

// // Standard rounding already does exactly what you want:
// // x.5 and above → up, x.4 and below → down.
// function roundLikert(avg: number): number {
//   return Math.round(avg);
// }

// export default function ViewSurveyPage() {
//   const [stats, setStats] = useState<SurveyStats | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/survey/stats");
//         if (!res.ok) {
//           throw new Error(`Failed to load stats: ${res.status} ${res.statusText}`);
//         }
//         const data = await res.json();
//         setStats(data);
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message || "Failed to load survey statistics.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   const roundedScores = useMemo(() => {
//     if (!stats || !stats.averages || stats.averages.length === 0) {
//       return [];
//     }
//     return stats.averages.map((avg) => roundLikert(avg));
//   }, [stats]);

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <Card className="shadow-sm border-0">
//             <Card.Body>
//               <Card.Title className="h4 mb-3 text-center">
//                 Campus Accessibility Survey Results
//               </Card.Title>
//               <Card.Subtitle className="text-muted mb-4 text-center">
//                 Aggregated feedback based on submitted surveys.
//               </Card.Subtitle>

//               {loading && (
//                 <div className="d-flex justify-content-center my-4">
//                   <Spinner animation="border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                   </Spinner>
//                 </div>
//               )}

//               {error && (
//                 <Alert variant="danger">
//                   {error}
//                 </Alert>
//               )}

//               {!loading && !error && stats && (
//                 <>
//                   {/* Total surveys submitted */}
//                   <Alert variant="info" className="mb-4">
//                     <strong>Total surveys submitted:</strong>{" "}
//                     {stats.total}
//                   </Alert>

//                   {stats.total === 0 ? (
//                     <div className="text-muted">
//                       No survey responses have been submitted yet.
//                     </div>
//                   ) : (
//                     <div className="table-responsive">
//                       <Table bordered hover className="align-middle">
//                         <thead>
//                           <tr>
//                             <th>Question</th>
//                             <th>Average</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {questions.map((q, idx) => {
//                             const avg = stats.averages[idx];
//                             const rounded = roundedScores[idx];
//                             const label = likertLabels[rounded] || "N/A";

//                             // In case of mismatch or missing data
//                             if (typeof avg !== "number" || Number.isNaN(avg)) {
//                               return (
//                                 <tr key={idx}>
//                                   <td>{q}</td>
//                                   <td>-</td>
//                                 </tr>
//                               );
//                             }

//                             return (
//                               <tr key={idx}>
//                                 <td>{q}</td>
//                                 <td>
//                                   {/* e.g., "3 (Neutral)" or "4 (Agree)" */}
//                                   {avg.toFixed(1)}  ({label})
//                                 </td>
//                               </tr>
//                             );
//                           })}
//                         </tbody>
//                       </Table>
//                     </div>
//                   )}
//                 </>
//               )}

//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import { useEffect, useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Alert,
  Spinner,
  Button,
} from "react-bootstrap";

interface SurveyStats {
  total: number;
  averages: number[]; // raw averages from backend
}

interface SurveyDoc {
  _id: string;
  comments?: string;
  timestamp?: string;
  responses?: number[];
}

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

// Likert labels for 1–5
const likertLabels: { [score: number]: string } = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};

function roundLikert(avg: number): number {
  return Math.round(avg);
}

export default function ViewSurveyPage() {
  const [stats, setStats] = useState<SurveyStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // comment-related state
  const [commentPage, setCommentPage] = useState(1);
  const [commentsPageData, setCommentsPageData] = useState<SurveyDoc[]>([]);
  const [hasMoreComments, setHasMoreComments] = useState(false);
  const COMMENTS_PER_PAGE = 10;

  const loadCommentsPage = async (page: number) => {
    const res = await fetch(
      `http://localhost:8080/survey/loadpage?page=${page}`
    );
    if (!res.ok) {
      throw new Error(
        `Failed to load comments page: ${res.status} ${res.statusText}`
      );
    }
    const data: SurveyDoc[] = await res.json();
    setCommentsPageData(data);
    setHasMoreComments(data.length === COMMENTS_PER_PAGE);
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const resStats = await fetch("http://localhost:8080/survey/stats");
        if (!resStats.ok) {
          throw new Error(
            `Failed to load stats: ${resStats.status} ${resStats.statusText}`
          );
        }
        const dataStats = await resStats.json();
        setStats(dataStats);
        await loadCommentsPage(1);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to load survey data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const roundedScores = useMemo(() => {
    if (!stats || !stats.averages || stats.averages.length === 0) {
      return [];
    }
    return stats.averages.map((avg) => roundLikert(avg));
  }, [stats]);

  const visibleComments = useMemo(
    () =>
      commentsPageData.filter(
        (c) => c.comments && c.comments.trim().length > 0
      ),
    [commentsPageData]
  );

  const handleNextComments = async () => {
    const nextPage = commentPage + 1;
    try {
      setLoading(true);
      await loadCommentsPage(nextPage);
      setCommentPage(nextPage);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load next page of comments.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrevComments = async () => {
    if (commentPage === 1) return;
    const prevPage = commentPage - 1;
    try {
      setLoading(true);
      await loadCommentsPage(prevPage);
      setCommentPage(prevPage);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load previous page of comments.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-10">
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="h4 mb-3 text-center">
                Campus Accessibility Survey Results
              </Card.Title>
              <Card.Subtitle className="text-muted mb-4 text-center">
                Aggregated feedback based on submitted surveys.
              </Card.Subtitle>

              {loading && (
                <div className="d-flex justify-content-center my-4">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}

              {error && <Alert variant="danger">{error}</Alert>}

              {!loading && !error && stats && (
                <>
                  <Alert variant="info" className="mb-4">
                    <strong>Total surveys submitted:</strong> {stats.total}
                  </Alert>

                  {stats.total === 0 ? (
                    <div className="text-muted">
                      No survey responses have been submitted yet.
                    </div>
                  ) : (
                    <Row>
                      {/* LEFT SIDE: Average Scores */}
                      <Col md={6} className="mb-4">
                        <h5 className="mb-3">Average Scores</h5>
                        <div className="table-responsive">
                          <Table bordered hover className="align-middle">
                            <thead>
                              <tr>
                                <th>Question</th>
                                <th>Average</th>
                              </tr>
                            </thead>
                            <tbody>
                              {questions.map((q, idx) => {
                                const avg = stats.averages[idx];
                                const rounded = roundedScores[idx];
                                const label = likertLabels[rounded] || "N/A";

                                if (
                                  typeof avg !== "number" ||
                                  Number.isNaN(avg)
                                ) {
                                  return (
                                    <tr key={idx}>
                                      <td>{q}</td>
                                      <td>-</td>
                                    </tr>
                                  );
                                }

                                return (
                                  <tr key={idx}>
                                    <td>{q}</td>
                                    <td>
                                      {avg.toFixed(1)} ({label})
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </div>
                      </Col>

                      {/* RIGHT SIDE: Comments */}
                      <Col md={6} className="mb-4">
                        <h5 className="mb-3">Comments</h5>
                        <div className="table-responsive">
                          <Table bordered hover size="sm" className="align-middle">
                            <thead>
                              <tr>
                                <th style={{ width: "20%" }}>Date</th>
                                <th>Comment</th>
                              </tr>
                            </thead>
                            <tbody>
                              {visibleComments.length === 0 ? (
                                <tr>
                                  <td colSpan={2} className="text-muted text-center">
                                    No comments on this page.
                                  </td>
                                </tr>
                              ) : (
                                visibleComments.map((survey) => {
                                  const time = survey.timestamp
                                    ? new Date(
                                        survey.timestamp
                                      ).toLocaleDateString()
                                    : "Unknown time";
                                  return (
                                    <tr key={survey._id}>
                                      <td>
                                        <small className="text-muted">{time}</small>
                                      </td>
                                      <td style={{ whiteSpace: "pre-wrap" }}>
                                        {survey.comments}
                                      </td>
                                    </tr>
                                  );
                                })
                              )}
                            </tbody>
                          </Table>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handlePrevComments}
                            disabled={commentPage === 1}
                          >
                            {"<"} Previous
                          </Button>
                          <span className="text-muted small align-self-center">
                            Page {commentPage}
                          </span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handleNextComments}
                            disabled={!hasMoreComments}
                          >
                            Next &gt;
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
