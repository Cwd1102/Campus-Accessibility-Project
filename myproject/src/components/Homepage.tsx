import { Container} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Homepage() {
  return <span>
    <>
    <Container fluid className="p-4 d-flex flex-column">
        <DropdownButton id="from-button" title="Select your Starting Point">
          <Dropdown.Item href="#/action-1">RAC</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sherman Hall</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Biology</Dropdown.Item>
        </DropdownButton>
    </Container>

    <Container fluid className="p-4 d-flex flex-column">
      <DropdownButton id="to-button" title="Select your Destination">
        <Dropdown.Item href="#/action-1">University Center</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ILSB</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Commons</Dropdown.Item>
      </DropdownButton>
    </Container>
  </>
  </span>;
  
}

