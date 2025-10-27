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


