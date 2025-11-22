// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Outlet } from "react-router-dom";

// export default function UmbcNavbar() {
//   return (
//     <>
//       <Container fluid className="vw-100 vh-100 p-0 d-flex flex-column">
//         <Navbar
//           collapseOnSelect
//           expand="lg"
//           bg="dark"
//           data-bs-theme="dark"
//           className="w-100 py-2"
//         >
//           <Container fluid className="px-3">
//             <Navbar.Brand className="d-flex align-items-center">
//               <img
//                 alt=""
//                 src="/umbc_logo.png"
//                 height={32} // control the logo height
//                 className="d-inline-block align-top"
//               />
//               <span className="ms-3 fw-bold fs-5 text-white d-none d-md-inline">
//                 SDS Accessibility Route Map
//               </span>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="ms-auto d-flex align-items-center flex-nowrap gap-2">
//                 <Nav.Link href="homepage">Home</Nav.Link>
//                 <Nav.Link href="about">About</Nav.Link>
//                 <Nav.Link href="ReportObstruction">Report Obstruction</Nav.Link>
//                 <Nav.Link href="survey">Survey</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Outlet />
//       </Container>
//     </>
//   );
// }


import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import LoginButton from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router-dom";

export default function UmbcNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/ManageObstruction");
    //window.location.href = "/login"
  };

  //if (loading) return null; 

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
                {!user && <Nav.Link href="ReportObstruction">Report Obstruction</Nav.Link>}
                {!user && <Nav.Link href="survey">Survey</Nav.Link>}
                 {!user ?(
                <Link to="/LoginPage">
                  <LoginButton variant="outline-light">Login</LoginButton>
                </Link> 
                ) : (
                <>
                 <Link to="/ManageObstruction">
                  <Nav.Link href="ManageObstruction"> Manage Obstructions</Nav.Link>
                </Link>
                  <Link to="/ViewSurvey">
                  <Nav.Link href="ViewSurvey"> Survey Results</Nav.Link>
                </Link>
                {/* <span className="text-light me-2">{user.email}</span> */}
                 <LoginButton variant="outline-light" onClick={handleLogout}>Logout</LoginButton>
                 </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <Outlet />
    </Container>
    </>
  );
}

