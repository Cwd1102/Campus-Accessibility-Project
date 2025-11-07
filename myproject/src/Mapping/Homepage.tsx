// // Homepage.tsx
// import { useState } from "react";
// import { Container, Row, Col, Dropdown, Button, Form } from "react-bootstrap";
// import MapDisplay from "./OpenMap";
// import type { SegmentFeature } from "./Segments";
// import { LatLng } from "leaflet";
// import { SEGMENTS } from "./Segments";
// import { getEntranceMarker } from "./entrance";


// export default function Homepage() {
//   const [fromSelection, setFromSelection] = useState<{ building: string; entrance: string | null }>({
//     building: "",
//     entrance: null,
//   });
//   const [toSelection, setToSelection] = useState<{ building: string; entrance: string | null }>({
//     building: "",
//     entrance: null,
//   });

//   const [routeSegments, setRouteSegments] = useState<SegmentFeature[]>([]);
//   const [showAmenities, setShowAmenities] = useState(false); // ⭐ NEW

//   const buildingEntrances: Record<string, string[]> = {
//     "Fine Arts": ["FA_1_N", "FA_2_C", "FA_1_S", "FA_0_E"],
//     "Performing Arts and Humanities": ["PAHB_1_N", "PAHB_1_E", "PAHB_2_N"],
//     "Engineering": ["ENG_2_W"],
//     "ITE": ["ITE_3_W", "ITE_1_E"],
//     "RAC": [],
//     "Sherman Hall": [],
//     "Biology": [],
//     "ILSB": [],
//     "Commons": [],
//     "University Center": [],
//     "Sondheim Hall": [],
//     "Math & Psychology": [],
//     "Physics": [],
//     "Public Policy": [],
//     "AOK Library & Gallery": [],
//   };

//   const allBuildings = Object.keys(buildingEntrances);

//   // Function called when submit button is pressed
//   const handleSubmit = async () => {
//     if (!fromSelection.entrance || !toSelection.entrance) {
//       alert("Please select both a starting and destination entrance!");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:8080/route?srcId=${encodeURIComponent(
//           fromSelection.entrance
//         )}&dstId=${encodeURIComponent(toSelection.entrance)}`
//       );

//       if (!response.ok) {
//         const err = await response.json();
//         alert(`Error: ${err.error}`);
//         return;
//       }

//       const data = await response.json();
//       console.log("Route data:", data);

//       // data.route is like ["S7", "S7", "S16", "S5", "S13", "S12"]
//       const newRouteSegments: SegmentFeature[] = data.route
//         .map((segmentId: string) => SEGMENTS[segmentId])
//         .filter((f: SegmentFeature | undefined): f is SegmentFeature => Boolean(f));

//       if (newRouteSegments.length === 0) {
//         alert("No known geometries for these segments (check SEGMENTS map).");
//       }

//       setRouteSegments(newRouteSegments);

//       alert(`Route found! Total cost: ${data.totalCost}`);
//     } catch (err) {
//       console.error("Error fetching route:", err);
//       alert("Failed to fetch route. Check console for details.");
//     }
//   };

//   return (
//     <Container fluid className="p-2">
//       <Row>
//         <Col md={3} className="d-flex flex-column gap-4">
//           {/* FROM Dropdown */}
//           <Dropdown>
//             <Dropdown.Toggle id="from-dropdown" variant="secondary">
//               {fromSelection.entrance
//                 ? `From: ${fromSelection.entrance}`
//                 : fromSelection.building
//                 ? `From: ${fromSelection.building}`
//                 : "Select Starting Point"}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {allBuildings.map((b) => (
//                 <Dropdown key={b} drop="end">
//                   <Dropdown.Toggle as="div" className="dropdown-item">
//                     {b}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     {buildingEntrances[b]?.length ? (
//                       buildingEntrances[b].map((e) => (
//                         <Dropdown.Item
//                           key={e}
//                           onClick={() =>
//                             setFromSelection({ building: b, entrance: e })
//                           }
//                         >
//                           {e}
//                         </Dropdown.Item>
//                       ))
//                     ) : (
//                       <Dropdown.Item
//                         onClick={() =>
//                           setFromSelection({ building: b, entrance: null })
//                         }
//                       >
//                         (Main)
//                       </Dropdown.Item>
//                     )}
//                   </Dropdown.Menu>
//                 </Dropdown>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>

//           {/* TO Dropdown */}
//           <Dropdown>
//             <Dropdown.Toggle id="to-dropdown" variant="secondary">
//               {toSelection.entrance
//                 ? `To: ${toSelection.entrance}`
//                 : toSelection.building
//                 ? `To: ${toSelection.building}`
//                 : "Select Destination"}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {allBuildings.map((b) => (
//                 <Dropdown key={b} drop="end">
//                   <Dropdown.Toggle as="div" className="dropdown-item">
//                     {b}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     {buildingEntrances[b]?.length ? (
//                       buildingEntrances[b].map((e) => (
//                         <Dropdown.Item
//                           key={e}
//                           onClick={() =>
//                             setToSelection({ building: b, entrance: e })
//                           }
//                         >
//                           {e}
//                         </Dropdown.Item>
//                       ))
//                     ) : (
//                       <Dropdown.Item
//                         onClick={() =>
//                           setToSelection({ building: b, entrance: null })
//                         }
//                       >
//                         (Main)
//                       </Dropdown.Item>
//                     )}
//                   </Dropdown.Menu>
//                 </Dropdown>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>

//           {/* Submit Button */}
//           <Button variant="primary" onClick={handleSubmit} style={{ width: "fit-content" }}>
//             Find Route
//           </Button>
//         </Col>
//         <div
//             style={{
//               position: "absolute",
//               top: "1rem",
//               left: "1rem",
//               zIndex: 1000,
//               background: "white",
//               padding: "0.4rem 0.8rem",
//               borderRadius: "8px",
//               boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
//               fontSize: "0.9rem",
//             }}
//           >
//             <Form.Check
//               type="checkbox"
//               id="show-amenities"
//               label="Show Accessibility Amenities"
//               checked={showAmenities}
//               onChange={(e) => setShowAmenities(e.target.checked)}
//             />
//           </div>
//         <Col
//           md={6}
//           className="d-flex flex-column align-items-center justify-content-center me-auto"
//           style={{ height: "700px", width: "800px" }}
//         >
//           <h4 className="mb-3 text-center">Campus Map</h4>
//           <MapDisplay
//             center={new LatLng(39.2557, -76.7110)}
//             routeSegments={routeSegments}
//             fromEntrance={getEntranceMarker(fromSelection.entrance)} // NEW
//             toEntrance={getEntranceMarker(toSelection.entrance)}     // NEW
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// Homepage.tsx
import { useState } from "react";
import { Container, Row, Col, Dropdown, Button, Form } from "react-bootstrap";
import MapDisplay from "./OpenMap";
import type { SegmentFeature } from "./Segments";
import { LatLng } from "leaflet";
import { SEGMENTS } from "./Segments";
import { getEntranceMarker } from "./entrance";

export default function Homepage() {
  const [fromSelection, setFromSelection] = useState<{
    building: string;
    entrance: string | null;
  }>({
    building: "",
    entrance: null,
  });

  const [toSelection, setToSelection] = useState<{
    building: string;
    entrance: string | null;
  }>({
    building: "",
    entrance: null,
  });

  const [routeSegments, setRouteSegments] = useState<SegmentFeature[]>([]);
  const [showAmenities, setShowAmenities] = useState(false);

  const buildingEntrances: Record<string, string[]> = {
    "Fine Arts": ["FA_1_N", "FA_2_C", "FA_1_S", "FA_0_E"],
    "Performing Arts and Humanities": ["PAHB_1_N", "PAHB_1_E", "PAHB_2_N"],
    Engineering: ["ENG_2_W"],
    ITE: ["ITE_3_W", "ITE_1_E"],
    RAC: [],
    "Sherman Hall": [],
    Biology: [],
    ILSB: [],
    Commons: [],
    "University Center": [],
    "Sondheim Hall": [],
    "Math & Psychology": [],
    Physics: [],
    "Public Policy": [],
    "AOK Library & Gallery": [],
  };

  const allBuildings = Object.keys(buildingEntrances);

  const handleSubmit = async () => {
    if (!fromSelection.entrance || !toSelection.entrance) {
      alert("Please select both a starting and destination entrance!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/route?srcId=${encodeURIComponent(
          fromSelection.entrance
        )}&dstId=${encodeURIComponent(toSelection.entrance)}`
      );

      if (!response.ok) {
        const err = await response.json();
        alert(`Error: ${err.error}`);
        return;
      }

      const data = await response.json();
      console.log("Route data:", data);

      const newRouteSegments: SegmentFeature[] = data.route
        .map((segmentId: string) => SEGMENTS[segmentId])
        .filter(
          (f: SegmentFeature | undefined): f is SegmentFeature => Boolean(f)
        );

      if (newRouteSegments.length === 0) {
        alert("No known geometries for these segments (check SEGMENTS map).");
      }

      setRouteSegments(newRouteSegments);
      alert(`Route found! Total cost: ${data.totalCost}`);
    } catch (err) {
      console.error("Error fetching route:", err);
      alert("Failed to fetch route. Check console for details.");
    }
  };

  return (
    <Container fluid className="p-2">
      <Row>
        {/* LEFT SIDE CONTROLS */}
        <Col md={3} className="d-flex flex-column gap-4">
          {/* FROM Dropdown */}
          <Dropdown>
            <Dropdown.Toggle id="from-dropdown" variant="secondary">
              {fromSelection.entrance
                ? `From: ${fromSelection.entrance}`
                : fromSelection.building
                ? `From: ${fromSelection.building}`
                : "Select Starting Point"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {allBuildings.map((b) => (
                <Dropdown key={b} drop="end">
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    {b}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {buildingEntrances[b]?.length ? (
                      buildingEntrances[b].map((e) => (
                        <Dropdown.Item
                          key={e}
                          onClick={() =>
                            setFromSelection({ building: b, entrance: e })
                          }
                        >
                          {e}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item
                        onClick={() =>
                          setFromSelection({ building: b, entrance: null })
                        }
                      >
                        (Main)
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* TO Dropdown */}
          <Dropdown>
            <Dropdown.Toggle id="to-dropdown" variant="secondary">
              {toSelection.entrance
                ? `To: ${toSelection.entrance}`
                : toSelection.building
                ? `To: ${toSelection.building}`
                : "Select Destination"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {allBuildings.map((b) => (
                <Dropdown key={b} drop="end">
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    {b}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {buildingEntrances[b]?.length ? (
                      buildingEntrances[b].map((e) => (
                        <Dropdown.Item
                          key={e}
                          onClick={() =>
                            setToSelection({ building: b, entrance: e })
                          }
                        >
                          {e}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item
                        onClick={() =>
                          setToSelection({ building: b, entrance: null })
                        }
                      >
                        (Main)
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Submit Button */}
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{ width: "fit-content" }}
          >
            Find Route
          </Button>
        </Col>

        {/* CENTER: Map with Checkbox on RIGHT SIDE */}
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center me-auto"
          style={{ height: "700px" }}
        >
          <h4 className="mb-3 text-center w-100">Campus Map</h4>

          {/* Map wrapper (keeps map centered) */}
          <div
            style={{
              position: "relative",
              width: "800px",
              height: "700px",
              margin: "0 auto",
            }}
          >
            {/* Map fills wrapper */}
            <MapDisplay
              center={new LatLng(39.2557, -76.7110)}
              routeSegments={routeSegments}
              fromEntrance={getEntranceMarker(fromSelection.entrance)}
              toEntrance={getEntranceMarker(toSelection.entrance)}
              showAmenities={showAmenities}
            />

            {/* Checkbox on the RIGHT SIDE of the map */}
            <div
              style={{
                position: "absolute",
                top: "0.5rem",
                left: "100%", // push to right of map
                marginLeft: "0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              <Form.Check
                type="checkbox"
                id="show-amenities"
                label="Show Accessibility Amenities"
                checked={showAmenities}
                onChange={(e) => setShowAmenities(e.target.checked)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


