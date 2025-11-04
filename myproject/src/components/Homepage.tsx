// // import { useState } from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import DropdownButton from "react-bootstrap/DropdownButton";
// // import MapDisplay from "./MapDisplay";

// // export default function Homepage() {
// //   const [fromBuilding, setFromBuilding] = useState<string | null>(null);
// //   const [toBuilding, setToBuilding] = useState<string | null>(null);
// //   const [fromEntrances, setFromEntrances] = useState<string[]>([]);
// //   const [toEntrances, setToEntrances] = useState<string[]>([]);

// //   const buildings = [
// //     "RAC",
// //     "Sherman Hall",
// //     "Biology",
// //     "ILSB",
// //     "Commons",
// //     "University Center",
// //     "Sondheim Hall",
// //     "Math & Psychology",
// //     "Performing Arts and Humanities",
// //     "Physics",
// //     "Public Policy",
// //     "AOK Library & Gallery",
// //     "Fine Arts"
// //   ];

// //   // Fetch entrances for selected building
// //   const fetchEntrances = async (buildingName: string, type: "from" | "to") => {
// //     try {
// //       const response = await fetch(`http://localhost:8080/entrances?buildingName=${encodeURIComponent(buildingName)}`);
// //       const data = await response.json();
// //       if (type === "from") setFromEntrances(data.entrances);
// //       else setToEntrances(data.entrances);
// //     } catch (err) {
// //       console.error("Error fetching entrances:", err);
// //     }
// //   };

// //   const handleSelectBuilding = (building: string, type: "from" | "to") => {
// //     if (type === "from") {
// //       setFromBuilding(building);
// //       fetchEntrances(building, "from");
// //     } else {
// //       setToBuilding(building);
// //       fetchEntrances(building, "to");
// //     }
// //   };

// //   return (
// //     <Container fluid className="p-4">
// //       <Row>
// //         {/* Left side - Dropdowns */}
// //         <Col md={6} className="d-flex flex-column gap-4">
// //           <DropdownButton id="from-button" title={fromBuilding || "Select your Starting Point"}>
// //             {buildings.map((b) => (
// //               <Dropdown.Item key={b} onClick={() => handleSelectBuilding(b, "from")}>
// //                 {b}
// //               </Dropdown.Item>
// //             ))}
// //           </DropdownButton>

// //           {/* Entrances for starting point */}
// //           {fromEntrances.length > 0 && (
// //             <DropdownButton id="from-entrance-button" title="Select Entrance">
// //               {fromEntrances.map((e) => (
// //                 <Dropdown.Item key={e}>{e}</Dropdown.Item>
// //               ))}
// //             </DropdownButton>
// //           )}

// //           <DropdownButton id="to-button" title={toBuilding || "Select your Destination"}>
// //             {buildings.map((b) => (
// //               <Dropdown.Item key={b} onClick={() => handleSelectBuilding(b, "to")}>
// //                 {b}
// //               </Dropdown.Item>
// //             ))}
// //           </DropdownButton>

// //           {/* Entrances for destination */}
// //           {toEntrances.length > 0 && (
// //             <DropdownButton id="to-entrance-button" title="Select Entrance">
// //               {toEntrances.map((e) => (
// //                 <Dropdown.Item key={e}>{e}</Dropdown.Item>
// //               ))}
// //             </DropdownButton>
// //           )}
// //         </Col>

// //         {/* Right side - Map */}
// //         <Col
// //           md={6}
// //           className="d-flex flex-column align-items-center justify-content-center"
// //         >
// //           <h4 className="mb-3 text-center">Campus Map</h4>
// //           <MapDisplay />
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // import { useEffect, useState } from "react";
// // import { Container, Row, Col, Dropdown } from "react-bootstrap";
// // import MapDisplay from "./MapDisplay";

// // export default function Homepage() {
// //   const [entranceData, setEntranceData] = useState<Record<string, string[]>>({});
// //   const [fromSelection, setFromSelection] = useState<{ building: string; entrance: string | null }>({
// //     building: "",
// //     entrance: null,
// //   });
// //   const [toSelection, setToSelection] = useState<{ building: string; entrance: string | null }>({
// //     building: "",
// //     entrance: null,
// //   });

// //   const buildings = [
// //     "RAC",
// //     "Sherman Hall",
// //     "Biology",
// //     "ILSB",
// //     "Commons",
// //     "University Center",
// //     "Sondheim Hall",
// //     "Math & Psychology",
// //     "Performing Arts and Humanities",
// //     "Physics",
// //     "Public Policy",
// //     "AOK Library & Gallery",
// //     "Fine Arts",
// //   ];

// //   // Fetch all entrances for buildings once (to avoid multiple fetches)
// //   useEffect(() => {
// //     async function fetchAllEntrances() {
// //       const newData: Record<string, string[]> = {};
// //       for (const b of buildings) {
// //         try {
// //           const res = await fetch(
// //             `http://localhost:8080/entrances?buildingName=${encodeURIComponent(b)}`
// //           );
// //           const data = await res.json();
// //           newData[b] = data.entrances || [];
// //         } catch (err) {
// //           console.error(`Error fetching entrances for ${b}:`, err);
// //           newData[b] = [];
// //         }
// //       }
// //       setEntranceData(newData);
// //     }
// //     fetchAllEntrances();
// //   }, []);

// //   return (
// //     <Container fluid className="p-4">
// //       <Row>
// //         {/* Left side - Dropdowns */}
// //         <Col md={6} className="d-flex flex-column gap-4">
// //           {/* FROM DROPDOWN */}
// //           <Dropdown>
// //             <Dropdown.Toggle id="from-dropdown" variant="secondary">
// //               {fromSelection.entrance
// //                 ? `From: ${fromSelection.entrance}`
// //                 : fromSelection.building
// //                 ? `From: ${fromSelection.building}`
// //                 : "Select Starting Point"}
// //             </Dropdown.Toggle>

// //             <Dropdown.Menu>
// //               {buildings.map((b) => (
// //                 <Dropdown key={b} drop="end">
// //                   <Dropdown.Toggle as="div" className="dropdown-item">
// //                     {b}
// //                   </Dropdown.Toggle>
// //                   <Dropdown.Menu>
// //                     {entranceData[b]?.length ? (
// //                       entranceData[b].map((e) => (
// //                         <Dropdown.Item
// //                           key={e}
// //                           onClick={() =>
// //                             setFromSelection({ building: b, entrance: e })
// //                           }
// //                         >
// //                           {e}
// //                         </Dropdown.Item>
// //                       ))
// //                     ) : (
// //                       <Dropdown.Item disabled>No entrances found</Dropdown.Item>
// //                     )}
// //                   </Dropdown.Menu>
// //                 </Dropdown>
// //               ))}
// //             </Dropdown.Menu>
// //           </Dropdown>

// //           {/* TO DROPDOWN */}
// //           <Dropdown>
// //             <Dropdown.Toggle id="to-dropdown" variant="secondary">
// //               {toSelection.entrance
// //                 ? `To: ${toSelection.entrance}`
// //                 : toSelection.building
// //                 ? `To: ${toSelection.building}`
// //                 : "Select Destination"}
// //             </Dropdown.Toggle>

// //             <Dropdown.Menu>
// //               {buildings.map((b) => (
// //                 <Dropdown key={b} drop="end">
// //                   <Dropdown.Toggle as="div" className="dropdown-item">
// //                     {b}
// //                   </Dropdown.Toggle>
// //                   <Dropdown.Menu>
// //                     {entranceData[b]?.length ? (
// //                       entranceData[b].map((e) => (
// //                         <Dropdown.Item
// //                           key={e}
// //                           onClick={() =>
// //                             setToSelection({ building: b, entrance: e })
// //                           }
// //                         >
// //                           {e}
// //                         </Dropdown.Item>
// //                       ))
// //                     ) : (
// //                       <Dropdown.Item disabled>No entrances found</Dropdown.Item>
// //                     )}
// //                   </Dropdown.Menu>
// //                 </Dropdown>
// //               ))}
// //             </Dropdown.Menu>
// //           </Dropdown>
// //         </Col>

// //         {/* Right side - Map */}
// //         <Col
// //           md={6}
// //           className="d-flex flex-column align-items-center justify-content-center"
// //         >
// //           <h4 className="mb-3 text-center">Campus Map</h4>
// //           <MapDisplay />
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// import { useState } from "react";
// import { Container, Row, Col, Dropdown } from "react-bootstrap";
// import MapDisplay from "./MapDisplay";

// export default function Homepage() {
//   // State for selected starting and destination entrances
//   const [fromSelection, setFromSelection] = useState<{ building: string; entrance: string | null }>({
//     building: "",
//     entrance: null,
//   });
//   const [toSelection, setToSelection] = useState<{ building: string; entrance: string | null }>({
//     building: "",
//     entrance: null,
//   });

//   // Hardcoded buildings and entrances
//   const buildingEntrances: Record<string, string[]> = {
//     "Fine Arts": ["FA_1_N", "FA_2_C", "FA_1_S", "FA_0_E"],
//     "Performing Arts and Humanities": ["PAHB_1_N", "PAHB_1_E", "PAHB_2_N"],
//     "Engineering": ["ENG_2_W"],
//     "ITE": ["ITE_3_W", "ITE_1_E"],
//     // Other buildings can be listed without entrances
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

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Left side - Dropdowns */}
//         <Col md={6} className="d-flex flex-column gap-4">
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
//         </Col>

//         {/* Right side - MapDisplay */}
//         <Col
//           md={6}
//           className="d-flex flex-column align-items-center justify-content-center"
//         >
//           <h4 className="mb-3 text-center">Campus Map</h4>
//           <MapDisplay />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import { useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import MapDisplay from "./MapDisplay";

export default function Homepage() {
  const [fromSelection, setFromSelection] = useState<{ building: string; entrance: string | null }>({
    building: "",
    entrance: null,
  });
  const [toSelection, setToSelection] = useState<{ building: string; entrance: string | null }>({
    building: "",
    entrance: null,
  });

  const buildingEntrances: Record<string, string[]> = {
    "Fine Arts": ["FA_1_N", "FA_2_C", "FA_1_S", "FA_0_E"],
    "Performing Arts and Humanities": ["PAHB_1_N", "PAHB_1_E", "PAHB_2_N"],
    "Engineering": ["ENG_2_W"],
    "ITE": ["ITE_3_W", "ITE_1_E"],
    "RAC": [],
    "Sherman Hall": [],
    "Biology": [],
    "ILSB": [],
    "Commons": [],
    "University Center": [],
    "Sondheim Hall": [],
    "Math & Psychology": [],
    "Physics": [],
    "Public Policy": [],
    "AOK Library & Gallery": [],
  };

  const allBuildings = Object.keys(buildingEntrances);

  // Function called when submit button is pressed
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
      // TODO: Pass `data` to your MapDisplay component to visualize route
      alert(`Route found! Total cost: ${data.totalCost}`);
    } catch (err) {
      console.error("Error fetching route:", err);
      alert("Failed to fetch route. Check console for details.");
    }
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={6} className="d-flex flex-column gap-4">
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
          <Button variant="primary" onClick={handleSubmit}>
            Find Route
          </Button>
        </Col>

        {/* Right side - MapDisplay */}
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


