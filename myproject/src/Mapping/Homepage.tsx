// Homepage.tsx
import { useState } from "react";
import { Container, Row, Col, Dropdown, Button, Form } from "react-bootstrap";
import MapDisplay from "./OpenMap";
import type { SegmentFeature } from "./Segments";
import { LatLng } from "leaflet";
import { SEGMENTS } from "./Segments";
import {
  getEntranceMarker,
  getAllEntranceMarkers,
} from "./entrance";
import ElevatorInstructions from "./ElevatorInstructions";
import type { RouteLeg } from "./ElevatorInstructions";

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
  const [routeVersion, setRouteVersion] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);

  const [elevatorLegs, setElevatorLegs] = useState<RouteLeg[]>([]);

  const buildingEntrances: Record<string, string[]> = {
    "Fine Arts": ["FA_1_N", "FA_2_C", "FA_1_S", "FA_0_E"],
    "Performing Arts and Humanities": ["PAHB_1_N", "PAHB_1_E", "PAHB_2_N"],
    "Engineering": ["ENG_2_W", "ENG_0_E", "ENG_1_N","ENG_1_S"],
    "ITE": ["ITE_3_W", "ITE_1_E", "ITE_2_N"],
    "RAC": ["RAC_2_W"],
    "Sherman Hall": ["SHER_0_N", "SHER_0_S"],
    "Chemistry": ["CHM_2_N", "CHM_2_S", "CHM_0_N", "CHM_0_E", "CHM_0_S", "CHM_1_S"], 
    "Biology": ["BIO_1_S", "BIO_1_N", "BIO_1_E", "BIO_1_N1"],
    "ILSB": [],
    "Commons": ["UC_3_W", "UC_2_N", "UC_1_E", "UC_1_S"],
    "University Center": [],
    "Sondheim Hall": ["SOND_1_N", "SOND_1_S"],
    "Math & Psychology": ["MAT_1_N", "MAT_1_S"],
    "Physics": [],
    "Public Policy": [],
    "AOK Library & Gallery": [],
  };

  const allBuildings = Object.keys(buildingEntrances);
  const allEntranceMarkers = getAllEntranceMarkers();

  const findBuildingForEntrance = (entranceId: string): string => {
    for (const [building, entrances] of Object.entries(buildingEntrances)) {
      if (entrances.includes(entranceId)) return building;
    }
    return "";
  };

  // When user clicks an entrance icon on the map
  const handleEntranceClick = (entranceId: string) => {
    const building = findBuildingForEntrance(entranceId);

    if (!fromSelection.entrance) {
      setFromSelection({ building, entrance: entranceId });
    } else if (!toSelection.entrance) {
      setToSelection({ building, entrance: entranceId });
    } else {
      // both filled: replace destination
      setToSelection({ building, entrance: entranceId });
    }
  };

  const clearFrom = () =>
    setFromSelection({ building: "", entrance: null });

  const clearTo = () =>
    setToSelection({ building: "", entrance: null });

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

      //store legs for elevator instructions
        if (data.legs) {
        setElevatorLegs(data.legs as RouteLeg[]);
      } else {
        setElevatorLegs([]);
      }


      const newRouteSegments: SegmentFeature[] = data.route
        .map((segmentId: string) => SEGMENTS[segmentId])
        .filter(
          (f: SegmentFeature | undefined): f is SegmentFeature => Boolean(f)
        );

      if (newRouteSegments.length === 0) {
        alert("No known geometries for these segments (check SEGMENTS map).");
      }

      setRouteSegments(newRouteSegments);
      setRouteVersion((v) => v + 1); 

      //alert(`Route found! Total cost: ${data.totalCost}`);
      alert('Your route was found!')
    } catch (err) {
      console.error("Error fetching route:", err);
      alert("Failed to fetch route. Check console for details.");
    }
  };

  // return (
  //   <Container fluid className="p-1">
  //     <Row>
  //       {/* LEFT: controls */}
  //       <Col md={3} className="d-flex flex-column gap-4">
  //         {/* FROM Dropdown with clear X */}
  //         <div className="d-flex align-items-center gap-2">
  //           <Dropdown>
  //             <Dropdown.Toggle id="from-dropdown" variant="secondary" style={{ backgroundColor: '#c91b1bff', color: 'white', borderColor: '#dc2626' }}>
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

  //           {fromSelection.entrance && (
  //             <Button
  //               variant="outline-secondary"
  //               size="sm"
  //               onClick={clearFrom}
  //             >
  //               ×
  //             </Button>
  //           )}
  //         </div>

  //         {/* TO Dropdown with clear X */}
  //         <div className="d-flex align-items-center gap-2">
  //           <Dropdown>
  //             <Dropdown.Toggle id="to-dropdown" variant="secondary" style={{ backgroundColor: '#3751d0ff', color: 'white', borderColor: '#3751d0ff' }}>
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

  //           {toSelection.entrance && (
  //             <Button variant="outline-secondary" size="sm" onClick={clearTo}>
  //               ×
  //             </Button>
  //           )}
  //         </div>

  //         {/* Submit Button */}
  //         <Button
  //           variant="primary"
  //           onClick={handleSubmit}
  //           style={{ width: "fit-content", backgroundColor: '#8a9191ff', color: 'white', borderColor: '#8a9191ff' }}
  //         >
  //           Find Route
  //         </Button>
    
  //        {/* Elevator directions under the dropdowns */}
  //         {elevatorLegs.length > 0 && (
  //           <div className="mt-2 d-flex flex-column" >
  //             <ElevatorInstructions legs={elevatorLegs}/>
  //           </div>
  //         )}
  //       </Col>

  //       {/* CENTER: Map with checkbox on RIGHT side */}
  //       <Col
  //         md={6}
  //         className="d-flex flex-column align-items-center justify-content-center me-auto"
  //         style={{ height: "700px" }}
  //       >
  //         {/* <h4 className="mb-3 text-center w-100">Campus Map</h4> */}

  //         <div
  //           style={{
  //             position: "relative",
  //             width: "1090px",
  //             height: "800px",
  //             margin: "0 auto",
  //           }}
  //         >
  //           <MapDisplay
  //             center={new LatLng(39.2557, -76.711)}
  //             routeSegments={routeSegments}
  //             routeVersion={routeVersion} 
  //             fromEntrance={getEntranceMarker(fromSelection.entrance)}
  //             toEntrance={getEntranceMarker(toSelection.entrance)}
  //             showAmenities={showAmenities}
  //             entrances={allEntranceMarkers}
  //             onEntranceClick={handleEntranceClick}
  //           />

  //           {/* Checkbox on the RIGHT side of map */}
  //           <div
  //             style={{
  //               position: "absolute",
  //               top: "11.0rem",
  //               right: "100%",
  //               marginRight: "8.5rem",
  //               whiteSpace: "nowrap",
  //               color: "blue"
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
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  //);
  return (
  <Container
    fluid
    className="p-0" // no padding, so row doesn't overflow
    style={{ height: "calc(100vh - 56px)" }} // 56px ≈ navbar height; adjust if needed
  >
    <Row className="h-100 g-0">  {/* g-0 removes gutter/negative margins */}
      {/* LEFT: controls */}
      <Col
        md={3}
        className="d-flex flex-column gap-4 p-3"
        style={{ overflowY: "auto" }}
      >
        {/* FROM Dropdown with clear X */}
        <div className="d-flex align-items-center gap-2">
          <Dropdown>
            <Dropdown.Toggle
              id="from-dropdown"
              variant="secondary"
              style={{
                backgroundColor: "#c91b1bff",
                color: "white",
                borderColor: "#dc2626",
              }}
            >
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

          {fromSelection.entrance && (
            <Button variant="outline-secondary" size="sm" onClick={clearFrom}>
              ×
            </Button>
          )}
        </div>

        {/* TO Dropdown with clear X */}
        <div className="d-flex align-items-center gap-2">
          <Dropdown>
            <Dropdown.Toggle
              id="to-dropdown"
              variant="secondary"
              style={{
                backgroundColor: "#3751d0ff",
                color: "white",
                borderColor: "#3751d0ff",
              }}
            >
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

          {toSelection.entrance && (
            <Button variant="outline-secondary" size="sm" onClick={clearTo}>
              ×
            </Button>
          )}
        </div>

        {/* Submit Button */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{
            width: "fit-content",
            backgroundColor: "#8a9191ff",
            color: "white",
            borderColor: "#8a9191ff",
          }}
        >
          Find Route
        </Button>

        <div className="mt-1">
          <Form.Check
            type="checkbox"
            id="show-amenities"
            label="Show Accessibility Amenities"
            checked={showAmenities}
            onChange={(e) => setShowAmenities(e.target.checked)}
          />
        </div>

        {/* Elevator directions under the dropdowns */}
        {elevatorLegs.length > 0 && (
          <div className="mt-1 d-flex flex-column">
            <ElevatorInstructions legs={elevatorLegs} />
          </div>
        )}
      </Col>

      {/* RIGHT: Map fills remaining space */}
      <Col
        md={9}
        className="p-0 d-flex"
        style={{ height: "100%" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <MapDisplay
            center={new LatLng(39.2557, -76.711)}
            routeSegments={routeSegments}
            routeVersion={routeVersion}
            fromEntrance={getEntranceMarker(fromSelection.entrance)}
            toEntrance={getEntranceMarker(toSelection.entrance)}
            showAmenities={showAmenities}
            entrances={allEntranceMarkers}
            onEntranceClick={handleEntranceClick}
          />

          {/* <div
              style={{
                position: "absolute",
                top: "11.0rem",
                right: "100%",
                marginRight: "8.5rem",
                whiteSpace: "nowrap",
                color: "blue"
              }}
          >
            <Form.Check
              type="checkbox"
              id="show-amenities"
              label="Show Accessibility Amenities"
              checked={showAmenities}
              onChange={(e) => setShowAmenities(e.target.checked)}
            />
          </div> */}
        </div>
      </Col>
    </Row>
  </Container>
);
}