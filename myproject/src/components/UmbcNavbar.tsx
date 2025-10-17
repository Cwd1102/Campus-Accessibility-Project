import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function UmbcNavbar() {
  return (
    <>
      <Container fluid className="vw-100 vh-100 p-0 d-flex flex-column">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          data-bs-theme="dark"
          className="w-100 py-2"
        >
          <Container fluid className="px-3">
            <Navbar.Brand className="d-flex align-items-center">
              <img
                alt=""
                src="/umbc_logo.png"
                height={32} // control the logo height
                className="d-inline-block align-top"
              />
              <span className="ms-3 fw-bold fs-5 text-white d-none d-md-inline">
                SDS Accessibility Route Map
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center flex-nowrap gap-2">
                <Nav.Link href="homepage">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="ReportObstruction">Report Obstruction</Nav.Link>
                <Nav.Link href="survey">Survey</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Outlet />
      </Container>
    </>
  );
}
