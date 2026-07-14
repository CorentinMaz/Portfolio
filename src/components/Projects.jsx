import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Navy - BattleShip",
      description: "Reproduction of the 'Naval Battle' game between two processes using C signals.",
      imgUrl: projImg1,
      projectUrl: "https://github.com/CorentinMaz/PSU_navy_2019",
    },
    {
      title: "Redditech",
      description: "Recreation of Reddit application using their public API.",
      imgUrl: projImg2,
      projectUrl: "https://github.com/CorentinMaz/Redditech",
    },
    {
      title: "AREA",
      description: "Software platform similar to IFTTT and Zapier for automation.",
      imgUrl: projImg3,
      projectUrl: "https://github.com/CorentinMaz/AREA",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on during my studies at Epitech.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
