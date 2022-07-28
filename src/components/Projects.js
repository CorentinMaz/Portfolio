import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Navy - BattleShip",
      description: "The purpose of the Navy is to reproduce the game 'Naval Battle' between two processes thanks to the C signals.",
      imgUrl: projImg1,
      projectUrl: "https://github.com/CorentinMaz/PSU_navy_2019",
    },
    {
      title: "Redditech",
      description: "The purpose of the Redditech is to reproduce the Reddit application through its API",
      imgUrl: projImg2,
      projectUrl: "https://github.com/CorentinMaz/Redditech",
    },
    {
      title: "AREA",
      description: "The objective of this project is to implement a software platform that works similarly to IFTTT and/or Zapier.",
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
                <p>These projects were realized for Epitech as part of my training as an IT developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  )
}
