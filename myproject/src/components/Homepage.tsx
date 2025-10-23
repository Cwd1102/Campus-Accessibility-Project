// // import { Container} from "react-bootstrap";
// // import Dropdown from 'react-bootstrap/Dropdown';
// // import DropdownButton from 'react-bootstrap/DropdownButton';

// // export default function Homepage() {
// //   return <span>
// //     <>
// //     <Container fluid className="p-4 d-flex flex-column">
// //         <DropdownButton id="from-button" title="Select your Starting Point">
// //           <Dropdown.Item href="#/action-1">RAC</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Sherman Hall</Dropdown.Item>
// //           <Dropdown.Item href="#/action-3">Biology</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">ILSB</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Commons</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">University Center</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Sondheim Hall</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Math & Psychology</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Performing Arts and Humanities</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Physics</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Public Policy</Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">AOK Library & Gallery</Dropdown.Item>
// //         </DropdownButton>
// //     </Container>

// //     <Container fluid className="p-4 d-flex flex-column">
// //       <DropdownButton id="to-button" title="Select your Destination">
// //         <Dropdown.Item href="#/action-1">RAC</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Sherman Hall</Dropdown.Item>
// //         <Dropdown.Item href="#/action-3">Biology</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">ILSB</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Commons</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">University Center</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Sondheim Hall</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Math & Psychology</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Performing Arts and Humanities</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Physics</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Public Policy</Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">AOK Library & Gallery</Dropdown.Item>
// //       </DropdownButton>
// //     </Container>
// //   </>
// //   </span>;
// // }

// import { Container } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// export default function Homepage() {
//   return (
//     <>
//       <Container fluid className="p-4 d-flex flex-column">
//         <DropdownButton id="from-button" title="Select your Starting Point">
//           <Dropdown.Item>RAC</Dropdown.Item>
//           <Dropdown.Item>Sherman Hall</Dropdown.Item>
//           <Dropdown.Item>Biology</Dropdown.Item>
//           <Dropdown.Item>ILSB</Dropdown.Item>
//           <Dropdown.Item>Commons</Dropdown.Item>
//           <Dropdown.Item>University Center</Dropdown.Item>
//           <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//           <Dropdown.Item>Math & Psychology</Dropdown.Item>
//           <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//           <Dropdown.Item>Physics</Dropdown.Item>
//           <Dropdown.Item>Public Policy</Dropdown.Item>
//           <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//         </DropdownButton>
//       </Container>

//       <Container fluid className="p-4 d-flex flex-column">
//         <DropdownButton id="to-button" title="Select your Destination">
//           <Dropdown.Item>RAC</Dropdown.Item>
//           <Dropdown.Item>Sherman Hall</Dropdown.Item>
//           <Dropdown.Item>Biology</Dropdown.Item>
//           <Dropdown.Item>ILSB</Dropdown.Item>
//           <Dropdown.Item>Commons</Dropdown.Item>
//           <Dropdown.Item>University Center</Dropdown.Item>
//           <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//           <Dropdown.Item>Math & Psychology</Dropdown.Item>
//           <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//           <Dropdown.Item>Physics</Dropdown.Item>
//           <Dropdown.Item>Public Policy</Dropdown.Item>
//           <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//         </DropdownButton>
//       </Container>

//       {/* PDF display */}
//       <Container fluid className="p-4 d-flex flex-column align-items-center">
//         <h3>Campus Map</h3>
//         <iframe
//           src="/2024-ACCESSIBLE-ROUTES-MAP-2.pdf"
//           width="80%"
//           height="600px"
//           title="Campus Map PDF"
//           style={{ border: "none" }}
//         ></iframe>
//       </Container>
//     </>
//   );
// }


// import { Container, Row, Col } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// export default function Homepage() {
//   return (
//     <>
//       <Container fluid className="p-4">
//         <Row>
//           {/* Left side - Dropdowns */}
//           <Col md={6} className="d-flex flex-column gap-4">
//             <DropdownButton id="from-button" title="Select your Starting Point">
//               <Dropdown.Item>RAC</Dropdown.Item>
//               <Dropdown.Item>Sherman Hall</Dropdown.Item>
//               <Dropdown.Item>Biology</Dropdown.Item>
//               <Dropdown.Item>ILSB</Dropdown.Item>
//               <Dropdown.Item>Commons</Dropdown.Item>
//               <Dropdown.Item>University Center</Dropdown.Item>
//               <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//               <Dropdown.Item>Math & Psychology</Dropdown.Item>
//               <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//               <Dropdown.Item>Physics</Dropdown.Item>
//               <Dropdown.Item>Public Policy</Dropdown.Item>
//               <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton id="to-button" title="Select your Destination">
//               <Dropdown.Item>RAC</Dropdown.Item>
//               <Dropdown.Item>Sherman Hall</Dropdown.Item>
//               <Dropdown.Item>Biology</Dropdown.Item>
//               <Dropdown.Item>ILSB</Dropdown.Item>
//               <Dropdown.Item>Commons</Dropdown.Item>
//               <Dropdown.Item>University Center</Dropdown.Item>
//               <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//               <Dropdown.Item>Math & Psychology</Dropdown.Item>
//               <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//               <Dropdown.Item>Physics</Dropdown.Item>
//               <Dropdown.Item>Public Policy</Dropdown.Item>
//               <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//             </DropdownButton>
//           </Col>

//           {/* Right side - PDF map */}
//           <Col
//             md={6}
//             className="d-flex flex-column align-items-center justify-content-center"
//           >
//             <h4 className="mb-3">Campus Map</h4>
//             <iframe
//               src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
//               width="100%"
//               height="750px"
//               title="Campus Map PDF"
//               style={{ border: "1px solid #ccc", borderRadius: "8px" }}
//             ></iframe>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }


// import { Container, Row, Col } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import MapDisplay from "./MapDisplay";


// export default function Homepage() {
//   return (
//     <>
//       <Container fluid className="p-4">
//         <Row>
//           {/* Left side - Dropdowns */}
//           <Col md={6} className="d-flex flex-column gap-4">
//             <DropdownButton id="from-button" title="Select your Starting Point">
//               <Dropdown.Item>RAC</Dropdown.Item>
//               <Dropdown.Item>Sherman Hall</Dropdown.Item>
//               <Dropdown.Item>Biology</Dropdown.Item>
//               <Dropdown.Item>ILSB</Dropdown.Item>
//               <Dropdown.Item>Commons</Dropdown.Item>
//               <Dropdown.Item>University Center</Dropdown.Item>
//               <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//               <Dropdown.Item>Math & Psychology</Dropdown.Item>
//               <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//               <Dropdown.Item>Physics</Dropdown.Item>
//               <Dropdown.Item>Public Policy</Dropdown.Item>
//               <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton id="to-button" title="Select your Destination">
//               <Dropdown.Item>RAC</Dropdown.Item>
//               <Dropdown.Item>Sherman Hall</Dropdown.Item>
//               <Dropdown.Item>Biology</Dropdown.Item>
//               <Dropdown.Item>ILSB</Dropdown.Item>
//               <Dropdown.Item>Commons</Dropdown.Item>
//               <Dropdown.Item>University Center</Dropdown.Item>
//               <Dropdown.Item>Sondheim Hall</Dropdown.Item>
//               <Dropdown.Item>Math & Psychology</Dropdown.Item>
//               <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
//               <Dropdown.Item>Physics</Dropdown.Item>
//               <Dropdown.Item>Public Policy</Dropdown.Item>
//               <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
//             </DropdownButton>
//           </Col>

//           {/* Right side - Map image */}
//           {/* <Col
//             md={6}
//             className="d-flex flex-column align-items-center justify-content-center"
//           >
//             <h4 className="mb-3">Campus Map</h4>
//             <img
//               src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
//               alt="Campus Map"
//               style={{
//                 width: "90%",
//                 height: "auto",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               }}
//             />
//           </Col> */}
//           {/* Right side - MapDisplay component */}
//         <Col md={6}>
//           <MapDisplay />
//         </Col>

//         </Row>
//       </Container>
//     </>
//   );
// }


import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MapDisplay from "./MapDisplay";

export default function Homepage() {
  return (
    <Container fluid className="p-4">
      <Row>
        {/* Left side - Dropdowns */}
        <Col md={6} className="d-flex flex-column gap-4">
          <DropdownButton id="from-button" title="Select your Starting Point">
            <Dropdown.Item>RAC</Dropdown.Item>
            <Dropdown.Item>Sherman Hall</Dropdown.Item>
            <Dropdown.Item>Biology</Dropdown.Item>
            <Dropdown.Item>ILSB</Dropdown.Item>
            <Dropdown.Item>Commons</Dropdown.Item>
            <Dropdown.Item>University Center</Dropdown.Item>
            <Dropdown.Item>Sondheim Hall</Dropdown.Item>
            <Dropdown.Item>Math & Psychology</Dropdown.Item>
            <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
            <Dropdown.Item>Physics</Dropdown.Item>
            <Dropdown.Item>Public Policy</Dropdown.Item>
            <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="to-button" title="Select your Destination">
            <Dropdown.Item>RAC</Dropdown.Item>
            <Dropdown.Item>Sherman Hall</Dropdown.Item>
            <Dropdown.Item>Biology</Dropdown.Item>
            <Dropdown.Item>ILSB</Dropdown.Item>
            <Dropdown.Item>Commons</Dropdown.Item>
            <Dropdown.Item>University Center</Dropdown.Item>
            <Dropdown.Item>Sondheim Hall</Dropdown.Item>
            <Dropdown.Item>Math & Psychology</Dropdown.Item>
            <Dropdown.Item>Performing Arts and Humanities</Dropdown.Item>
            <Dropdown.Item>Physics</Dropdown.Item>
            <Dropdown.Item>Public Policy</Dropdown.Item>
            <Dropdown.Item>AOK Library & Gallery</Dropdown.Item>
          </DropdownButton>
        </Col>

        {/* Right side - MapDisplay with title */}
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h4 className="mb-3 text-center">Campus Map</h4>
          <MapDisplay />
        </Col>
      </Row>
    </Container>
  );
}








// import { useState, useEffect } from "react";
// import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
// import MapDisplay from "./MapDisplay";

// interface Point {
//   x: number;
//   y: number;
// }

// export default function Homepage() {
//   const [start, setStart] = useState<string | null>(null);
//   const [end, setEnd] = useState<string | null>(null);
//   const [path, setPath] = useState<Point[]>([]);

//   // Example: dropdown options
//   const locations = [
//     "RAC",
//     "Sherman Hall",
//     "Biology",
//     "ILSB",
//     "Commons",
//     "University Center",
//     "Sondheim Hall",
//     "Math & Psychology",
//     "Performing Arts and Humanities",
//     "Physics",
//     "Public Policy",
//     "AOK Library & Gallery",
//   ];

//   // When start or end changes, fetch path from backend
//   useEffect(() => {
//     if (!start || !end) return;

//     // Example: fetch path from backend
//     // Replace this with your real API call
//     async function fetchPath() {
//       try {
//         // Example API call
//         const res = await fetch(
//           `/api/path?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
//         );
//         const data = await res.json(); // expected [{x, y}, {x, y}, ...]
//         setPath(data);
//       } catch (err) {
//         console.error("Failed to fetch path:", err);
//       }
//     }

//     fetchPath();
//   }, [start, end]);

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Left side - Dropdowns */}
//         <Col md={6} className="d-flex flex-column gap-4">
//           <DropdownButton
//             id="from-button"
//             title={start || "Select your Starting Point"}
//           >
//             {locations.map((loc) => (
//               <Dropdown.Item key={loc} onClick={() => setStart(loc)}>
//                 {loc}
//               </Dropdown.Item>
//             ))}
//           </DropdownButton>

//           <DropdownButton
//             id="to-button"
//             title={end || "Select your Destination"}
//           >
//             {locations.map((loc) => (
//               <Dropdown.Item key={loc} onClick={() => setEnd(loc)}>
//                 {loc}
//               </Dropdown.Item>
//             ))}
//           </DropdownButton>
//         </Col>

//         {/* Right side - Map */}
//         <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
//           <h4 className="mb-3">Campus Map</h4>
//           <MapDisplay path={path} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

