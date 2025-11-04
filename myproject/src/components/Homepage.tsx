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
          <Button variant="primary" onClick={handleSubmit} style={{ width: 'fit-content' }}>
            Find Route
          </Button>
        </Col>

        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center me-auto"
          //style={{ marginLeft: "400px" }}
        >
          <h4 className="mb-3 text-center">Campus Map</h4>
          <MapDisplay className="align-items-left" />
        </Col>
      </Row>  
    </Container>
  );
}


