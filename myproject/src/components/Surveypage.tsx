// export default function Surveypage() {
//   return <span>We can add a quick survey for improvement</span>;
// // }
// import { useState } from "react";

// export default function SurveyPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     issueType: "",
//     comments: "",
//     routeRating: "",
//     accessibilityExperience: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Example: Send data to backend API
//     try {
//       const res = await fetch("/api/feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert("✅ Thank you for your feedback!");
//         setFormData({
//           name: "",
//           email: "",
//           issueType: "",
//           comments: "",
//           routeRating: "",
//           accessibilityExperience: "",
//         });
//       } else {
//         alert("❌ Error submitting feedback.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         Campus Accessibility Feedback
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           placeholder="Your name (optional)"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           placeholder="Your email (optional)"
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />

//         <label className="font-semibold">Issue Type:</label>
//         <select
//           name="issueType"
//           value={formData.issueType}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         >
//           <option value="">Select an issue</option>
//           <option value="inaccurate-route">Inaccurate Route</option>
//           <option value="missing-data">Missing Accessibility Info</option>
//           <option value="general-feedback">General Feedback</option>
//         </select>

//         <label className="font-semibold">Route Clarity & Usefulness:</label>
//         <select
//           name="routeRating"
//           value={formData.routeRating}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         >
//           <option value="">Rate the route</option>
//           <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
//           <option value="4">⭐️⭐️⭐️⭐️ Good</option>
//           <option value="3">⭐️⭐️⭐️ Average</option>
//           <option value="2">⭐️⭐️ Poor</option>
//           <option value="1">⭐️ Very Poor</option>
//         </select>

//         <label className="font-semibold">
//           How would you describe your campus accessibility experience?
//         </label>
//         <textarea
//           name="accessibilityExperience"
//           value={formData.accessibilityExperience}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           rows={3}
//           placeholder="Share your experience..."
//           required
//         />

//         <label className="font-semibold">Additional Comments:</label>
//         <textarea
//           name="comments"
//           value={formData.comments}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           rows={3}
//           placeholder="Optional details..."
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function SurveyPage() {
//   // Each question has an id, text, and whether it's text-based or rated
//   const questions = [
//     {
//       id: "q1",
//       text: "The accessible routes on the map are easy to understand.",
//       type: "likert",
//     },
//     {
//       id: "q2",
//       text: "The accessible routes on the map accurately reflect real campus paths.",
//       type: "likert",
//     },
//     {
//       id: "q3",
//       text: "I can easily find elevators, ramps, or other accessibility features on the map.",
//       type: "likert",
//     },
//     {
//       id: "q4",
//       text: "The color contrast and map design are easy to see and read.",
//       type: "likert",
//     },
//     {
//       id: "q5",
//       text: "Overall, how satisfied are you with the map’s accessibility features?",
//       type: "likert",
//     },
//     {
//       id: "q6",
//       text: "Describe any difficulties you experienced while navigating campus using the map.",
//       type: "text",
//     },
//     {
//       id: "q7",
//       text: "What additional accessibility features would you like to see on the map?",
//       type: "text",
//     },
//     {
//       id: "q8",
//       text: "Do you have any suggestions for improving route clarity or map usability?",
//       type: "text",
//     },
//   ];

//   // Store answers
//   const [responses, setResponses] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // Handle Likert and text responses
//   const handleChange = (questionId, value) => {
//     setResponses((prev) => ({
//       ...prev,
//       [questionId]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Optional: Send to backend (mocked here)
//     console.log("Submitted responses:", responses);

//     setSubmitted(true);
//   };

//   const likertOptions = [
//     "Strongly Disagree",
//     "Disagree",
//     "Neutral",
//     "Agree",
//     "Strongly Agree",
//   ];

//   if (submitted) {
//     return (
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10 text-center">
//         <h2 className="text-2xl font-bold mb-4 text-green-700">
//           🎉 Thank you for your feedback!
//         </h2>
//         <p className="text-gray-600">
//           Your responses have been recorded. We appreciate your help in improving
//           campus accessibility.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
//       <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         Campus Accessibility Survey
//       </h2>
//       <p className="text-center text-gray-600 mb-8">
//         Please share your experience using the campus accessibility map.  
//         Your feedback helps improve routes and accessibility features.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {questions.map((q) => (
//           <div key={q.id} className="border-b pb-4">
//             <p className="font-semibold mb-3 text-lg">{q.text}</p>

//             {q.type === "likert" ? (
//               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                 {likertOptions.map((option, idx) => (
//                   <label key={idx} className="flex flex-col items-center text-sm sm:text-base">
//                     <input
//                       type="radio"
//                       name={q.id}
//                       value={option}
//                       checked={responses[q.id] === option}
//                       onChange={(e) => handleChange(q.id, e.target.value)}
//                       required
//                       className="mb-1 accent-blue-600"
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             ) : (
//               <textarea
//                 rows={3}
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleChange(q.id, e.target.value)}
//                 className="w-full border rounded p-2 mt-2"
//                 placeholder="Type your response here..."
//               />
//             )}
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// }

// import { useState, useMemo } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Form,
//   Alert,
//   Table,
// } from "react-bootstrap";

// // Remember to import Bootstrap CSS once at app entrypoint:
// // import "bootstrap/dist/css/bootstrap.min.css";

// interface SurveyResponse {
//   id: string;
//   ratings: { [key: string]: number };
//   comments: { [key: string]: string };
//   timestamp: string;
// }

// const STORAGE_KEY = "campus_accessibility_survey_v1";

// function uid() {
//   return Math.random().toString(36).slice(2) + Date.now().toString(36);
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

// export default function SurveyPage() {
//   // Survey questions
//   const questions = [
//     "The campus map clearly indicates accessible routes.",
//     "The accessibility information provided is accurate.",
//     "The map is easy to use and navigate.",
//     "It’s easy to identify accessible entrances and exits.",
//     "Route descriptions match the actual physical paths.",
//     "I feel confident using the map to plan my travel on campus.",
//     "The accessibility icons and labels are clear.",
//     "The colors and contrast on the map make it easy to read.",
//     "I can find information about elevators, ramps, and restrooms easily.",
//     "Overall, the campus accessibility map is helpful to me.",
//   ];

//   const [responses, setResponses] = useState<{ [key: string]: number }>({});
//   const [comments, setComments] = useState<{ [key: string]: string }>({});
//   const [entries, setEntries] = useState<SurveyResponse[]>([]);
//   const [submitted, setSubmitted] = useState(false);

//   const allAnswered = useMemo(
//     () => questions.every((q) => responses[q] !== undefined),
//     [responses]
//   );

//   const handleRatingChange = (q: string, val: number) => {
//     setResponses((prev) => ({ ...prev, [q]: val }));
//   };

//   const handleCommentChange = (q: string, val: string) => {
//     setComments((prev) => ({ ...prev, [q]: val }));
//   };

//   const handleSubmit = () => {
//     if (!allAnswered) return alert("Please answer all required questions.");
//     const entry: SurveyResponse = {
//       id: uid(),
//       ratings: responses,
//       comments,
//       timestamp: new Date().toISOString(),
//     };
//     const next = [...entries, entry];
//     setEntries(next);
//     setSubmitted(true);

//     const csv = toCSV(next);
//     download("campus_accessibility_survey.csv", csv);

//     setResponses({});
//     setComments({});
//   };

//   const toCSV = (entries: SurveyResponse[]) => {
//     const header = ["id", "timestamp", ...questions];
//     const lines = entries.map((entry) => {
//       const row = [
//         entry.id,
//         entry.timestamp,
//         ...questions.map((q) => entry.ratings[q]?.toString() ?? ""),
//       ];
//       return row.join(",");
//     });
//     return [header.join(","), ...lines].join("\n");
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <Card className="shadow-sm border-0">
//             <Card.Body>
//               <Card.Title className="h4 mb-3 text-center">
//                 Campus Accessibility Feedback Survey
//               </Card.Title>
//               <Card.Subtitle className="text-muted mb-4 text-center">
//                 Please share your experience using the campus accessibility map.  
//                 Your responses help us improve accessibility for everyone.
//               </Card.Subtitle>

//               {submitted && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setSubmitted(false)}
//                   dismissible
//                 >
//                   Thank you for your feedback! Your responses have been saved locally
//                   and downloaded as a CSV file.
//                 </Alert>
//               )}

//               {/* Likert scale table */}
//               <div className="table-responsive mb-4">
//                 <Table bordered hover className="align-middle text-center">
//                   <thead>
//                     <tr>
//                       <th className="text-start">Question</th>
//                       <th>Strongly Disagree (1)</th>
//                       <th>Disagree (2)</th>
//                       <th>Neutral (3)</th>
//                       <th>Agree (4)</th>
//                       <th>Strongly Agree (5)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {questions.map((q, idx) => (
//                       <tr key={idx}>
//                         <td className="text-start fw-semibold">{q}</td>
//                         {[1, 2, 3, 4, 5].map((num) => (
//                           <td key={num}>
//                             <Form.Check
//                               type="radio"
//                               name={`q-${idx}`}
//                               value={num}
//                               checked={responses[q] === num}
//                               onChange={() => handleRatingChange(q, num)}
//                               required
//                             />
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </div>

//               {/* Comment fields */}
//               {/*  Additional Comments (optional) */}
//               <div className="mb-4">
//                 <h5 className="fw-semibold mb-3">Additional Comments or Suggestions (optional)</h5>
//                 <Form.Group>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     placeholder="Share any ideas, suggestions, or details you'd like us to know..."
//                     value={comments["overall"] || ""}
//                     onChange={(e) => handleCommentChange("overall", e.target.value)}
//                   />
//                 </Form.Group>
//               </div>


//               {/* Submit button */}
//               <div className="d-flex justify-content-center">
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   disabled={!allAnswered}
//                   onClick={handleSubmit}
//                 >
//                   Submit Survey
//                 </Button>
//               </div>

//               {/* Local preview */}
//               <hr className="my-4" />
//               <h6 className="mb-3">Saved Responses (Local Preview)</h6>
//               {entries.length === 0 ? (
//                 <div className="text-muted">No responses yet.</div>
//               ) : (
//                 <div className="table-responsive">
//                   <Table hover size="sm">
//                     <thead>
//                       <tr>
//                         <th>Time</th>
//                         <th>Summary (average score)</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {entries
//                         .slice()
//                         .reverse()
//                         .map((e) => {
//                           const scores = Object.values(e.ratings);
//                           const avg =
//                             scores.reduce((a, b) => a + b, 0) / scores.length;
//                           return (
//                             <tr key={e.id}>
//                               <td>{new Date(e.timestamp).toLocaleString()}</td>
//                               <td>{avg.toFixed(2)} / 5</td>
//                             </tr>
//                           );
//                         })}
//                     </tbody>
//                   </Table>
//                 </div>
//               )}

//               <div className="mt-3 small text-muted">
//                 Data is stored locally in your browser under key "
//                 {STORAGE_KEY}" and downloaded as a CSV for reference.  
//                 In a real deployment, connect this to a backend database or
//                 server endpoint for long-term storage.
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// import { useState, useMemo } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Form,
//   Alert,
//   Table,
// } from "react-bootstrap";

// // Remember to import Bootstrap CSS once at app entrypoint:
// // import "bootstrap/dist/css/bootstrap.min.css";

// interface SurveyResponse {
//   id: string;
//   ratings: { [key: string]: number };
//   comments: { [key: string]: string };
//   timestamp: string;
// }

// const STORAGE_KEY = "campus_accessibility_survey_v1";

// function uid() {
//   return Math.random().toString(36).slice(2) + Date.now().toString(36);
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

// export default function SurveyPage() {
//   // Survey questions
//   const questions = [
//     "The campus map clearly indicates accessible routes.",
//     "The accessibility information provided is accurate.",
//     "The map is easy to use and navigate.",
//     "It’s easy to identify accessible entrances and exits.",
//     "Route descriptions match the actual physical paths.",
//     "I feel confident using the map to plan my travel on campus.",
//     "The accessibility icons and labels are clear.",
//     "The colors and contrast on the map make it easy to read.",
//     "I can find information about elevators, ramps, and restrooms easily.",
//     "Overall, the campus accessibility map is helpful to me.",
//   ];

//   const [responses, setResponses] = useState<{ [key: string]: number }>({});
//   const [comments, setComments] = useState<{ [key: string]: string }>({});
//   const [entries, setEntries] = useState<SurveyResponse[]>([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [unanswered, setUnanswered] = useState<string[]>([]);

//   const allAnswered = useMemo(
//     () => questions.every((q) => responses[q] !== undefined),
//     [responses]
//   );

//   const handleRatingChange = (q: string, val: number) => {
//     setResponses((prev) => ({ ...prev, [q]: val }));
//     if (unanswered.includes(q)) {
//       setUnanswered((prev) => prev.filter((item) => item !== q));
//     }
//   };

//   const handleCommentChange = (q: string, val: string) => {
//     setComments((prev) => ({ ...prev, [q]: val }));
//   };

//   const handleSubmit = () => {
//     const missing = questions.filter((q) => responses[q] === undefined);
//     if (missing.length > 0) {
//       setUnanswered(missing);

//       // Scroll to first missing question for UX
//       const firstMissing = document.getElementsByName(
//         `q-${questions.indexOf(missing[0])}`
//       )[0];
//       firstMissing?.scrollIntoView({ behavior: "smooth", block: "center" });
//       return;
//     }

//     setUnanswered([]);

//     const entry: SurveyResponse = {
//       id: uid(),
//       ratings: responses,
//       comments,
//       timestamp: new Date().toISOString(),
//     };
//     const next = [...entries, entry];
//     setEntries(next);
//     setSubmitted(true);

//     const csv = toCSV(next);
//     download("campus_accessibility_survey.csv", csv);

//     setResponses({});
//     setComments({});
//   };

//   const toCSV = (entries: SurveyResponse[]) => {
//     const header = ["id", "timestamp", ...questions, "Additional Comments"];
//     const lines = entries.map((entry) => {
//       const row = [
//         entry.id,
//         entry.timestamp,
//         ...questions.map((q) => entry.ratings[q]?.toString() ?? ""),
//         entry.comments["overall"] ?? "",
//       ];
//       return row.join(",");
//     });
//     return [header.join(","), ...lines].join("\n");
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <Card className="shadow-sm border-0">
//             <Card.Body>
//               <Card.Title className="h4 mb-3 text-center">
//                 Campus Accessibility Feedback Survey
//               </Card.Title>
//               <Card.Subtitle className="text-muted mb-4 text-center">
//                 Please share your experience using the campus accessibility map.
//                 Your responses help us improve accessibility for everyone.
//               </Card.Subtitle>

//               {submitted && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setSubmitted(false)}
//                   dismissible
//                 >
//                   Thank you for your feedback! Your responses have been saved locally
//                   and downloaded as a CSV file.
//                 </Alert>
//               )}

//               {/* Likert scale table */}
//               <div className="table-responsive mb-4">
//                 <Table bordered hover className="align-middle text-center">
//                   <thead>
//                     <tr>
//                       <th className="text-start">Question</th>
//                       <th>Strongly Disagree (1)</th>
//                       <th>Disagree (2)</th>
//                       <th>Neutral (3)</th>
//                       <th>Agree (4)</th>
//                       <th>Strongly Agree (5)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {questions.map((q, idx) => (
//                       <tr key={idx}>
//                         <td className="text-start fw-semibold">
//                           {q} <span className="text-danger">*</span>
//                         </td>
//                         {[1, 2, 3, 4, 5].map((num) => (
//                           <td key={num}>
//                             <Form.Check
//                               type="radio"
//                               name={`q-${idx}`}
//                               value={num}
//                               checked={responses[q] === num}
//                               onChange={() => handleRatingChange(q, num)}
//                               style={{
//                                 outline: unanswered.includes(q)
//                                   ? "2px solid red"
//                                   : undefined,
//                                 borderRadius: "4px",
//                                 padding: "2px",
//                               }}
//                             />
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </div>

//               {/* Additional Comments */}
//               <div className="mb-4">
//                 <h5 className="fw-semibold mb-3">
//                   Additional Comments or Suggestions (optional)
//                 </h5>
//                 <Form.Group>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     placeholder="Share any ideas, suggestions, or details you'd like us to know..."
//                     value={comments["overall"] || ""}
//                     onChange={(e) => handleCommentChange("overall", e.target.value)}
//                   />
//                 </Form.Group>
//               </div>

//               {/* Submit button */}
//               <div className="d-flex justify-content-center">
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={handleSubmit}
//                 >
//                   Submit Survey
//                 </Button>
//               </div>

//               {/* Local preview */}
//               <hr className="my-4" />
//               <h6 className="mb-3">Saved Responses (Local Preview)</h6>
//               {entries.length === 0 ? (
//                 <div className="text-muted">No responses yet.</div>
//               ) : (
//                 <div className="table-responsive">
//                   <Table hover size="sm">
//                     <thead>
//                       <tr>
//                         <th>Time</th>
//                         <th>Summary (average score)</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {entries
//                         .slice()
//                         .reverse()
//                         .map((e) => {
//                           const scores = Object.values(e.ratings);
//                           const avg =
//                             scores.reduce((a, b) => a + b, 0) / scores.length;
//                           return (
//                             <tr key={e.id}>
//                               <td>{new Date(e.timestamp).toLocaleString()}</td>
//                               <td>{avg.toFixed(2)} / 5</td>
//                             </tr>
//                           );
//                         })}
//                     </tbody>
//                   </Table>
//                 </div>
//               )}

//               <div className="mt-3 small text-muted">
//                 Data is stored locally in your browser under key "
//                 {STORAGE_KEY}" and downloaded as a CSV for reference.
//                 In a real deployment, connect this to a backend database or
//                 server endpoint for long-term storage.
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


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
