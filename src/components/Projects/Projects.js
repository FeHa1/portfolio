import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
/* 
estas vendrian a ser las fotos de los proyectos

import weatherApp from "../../Assets/Projects/weatherApp.png";
import controlGym from "../../Assets/Projects/controlGym.png";
import nacion from "../../Assets/Projects/nacion.png";
*/


/*
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nacion}
              isBlog={false}
              title="La Nacion"
              description="I developed a replica of the La Nación website as part of a technical challenge, using React for the UI construction and React Router DOM to manage navigation. I integrated FontAwesome for icons and used Bootstrap along with Tailwind CSS for a responsive design. HTTP requests were handled with React-Axios, and I optimized the project through React Scripts from Create React App. I implemented tests with Jest and React Testing Library to ensure functionality and used TypeScript for clean, well-structured code, measured and optimized."
              ghLink="https://github.com/WalRol/acumulado2"
              demoLink="https://acumulado2-vlhv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={controlGym}
              isBlog={false}
              title="Control-Gym"
              description="I developed a gym management app for client check-ins and user administration. Built with React and React Router DOM for dynamic navigation, the app uses Tailwind CSS and Bootstrap for responsive design, and Axios for secure data handling. React Query synchronizes client data, with form validation by React Hook Form and Yup. TypeScript and Jest ensure quality code and reliable functionality, with Vite and ESLint streamlining development."
              demoLink="https://control-gym.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="WeatherApp"
              description="I developed a single-page weather application that displays key climate data for three locations simultaneously. The app is built with React and styled using Tailwind CSS for responsive design. Animations are powered by Framer Motion for a smooth user experience, and React Icons are used to visually enhance weather data. Vite and ESLint streamline development, ensuring fast performance and clean code.."
              ghLink="https://github.com/WalRoldan/weatherApp"
              demoLink="https://weather-app-eight-zeta-67.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
*/