import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="p-4">
      <h1 className="mb-3">About This Project</h1>
      <p>
        The SDS Accessibility Route Map is a web application designed to help students, faculty, 
        staff, and visitors navigate UMBC’s campus using accessible routes. The goal is to make it 
        easier for individuals with mobility needs to find the best paths that include ramps, 
        elevators, and other accessibility features.
      </p>

      <h2 className="mt-4">Why This Matters</h2>
      <p>
        Navigating large campuses can be challenging, especially when routes include stairs, 
        steep inclines, or buildings without accessible entrances. This project provides a tool to 
        promote equity and independence for all members of the UMBC community.
      </p>

      <h2 className="mt-4">How It Works</h2>
      <ul>
        <li>Select your <strong>starting point</strong> and <strong>destination</strong> on the homepage.</li>
        <li>The app will display recommended accessible routes between those locations.</li>
        <li>You can view details about ramps, elevators, and entrances on each route.</li>
      </ul>

      <h2 className="mt-4">Future Plans</h2>
      <p>
        Future updates may include real-time accessibility alerts, integration with campus maps, 
        and mobile-friendly navigation.
      </p>

      <h2 className="mt-4">Contact & Team</h2>
      <p>
        This project was developed as part of CMSC 447: Software Engineering under the guidance of Professor Samit Shivadekar.
      </p>
      <ul>
        <li>
          <strong>Ouwen Dai</strong> – <a href="https://github.com/Cwd1102">GitHub</a> | odai1@umbc.edu
        </li>
        <li>
          <strong>Daeun Oh</strong> – <a href="https://github.com/dvh3419">GitHub</a> | ry47172@umbc.edu
        </li>
        <li>
          <strong>Sarah Okome</strong> – <a href="https://github.com/sokome7">GitHub</a> | sokome1@umbc.edu
        </li>
      </ul>
    </Container>
  );
}
