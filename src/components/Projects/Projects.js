import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import weatherApp from "../src/Assets/Projects/weatherApp.png";
import scheduling from "../src/Assets/Projects/scheduling.png";
import metronome from "../src/Assets/Projects/metronome.png";


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
              imgPath={metronome}
              isBlog={false}
              title="Metronome"
              description="I developed a metronome in Python with a graphical interface using Tkinter and Simpleaudio for sound."
              ghLink="https://github.com/FeHa1/Metronome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduling}
              isBlog={false}
              title="Medical scheduling system"
              description="This project is a medical appointment system application developed in Java, designed to study and apply object-oriented programming concepts, interfaces, abstract classes, and graphical user interface development with Swing. It uses an H2 database to manage information locally, allowing the creation of medical appointments and patient management, as well as user session handling."
              ghLink="https://github.com/FeHa1/curso-Java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="WeatherApp"
              description="I developed a weather web application to test React's functionalities."
              ghLink="https://github.com/FeHa1/reactProyects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
