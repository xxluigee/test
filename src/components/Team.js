import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import projImg1 from "../assets/img/revo.png";
import projImg2 from "../assets/img/0xzeed.png";
import projImg4 from "../assets/img/ilham.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const team = [
    {
      title: "0xRevo",
      description: "Founder",
      imgUrl: projImg1,

    },
    {
      title: "0xZeed",
      description: "Core Team",
      imgUrl: projImg2,
    },
    {
      title: "Ilham",
      description: "Core Team",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <br></br>
               
                <br></br>
                <br></br>
                <center><h2>Team</h2>
                <p>We are legion, we don't forget, expect us!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          team.map((team, index) => {
                            return (
                              <TeamCard
                                key={index}
                                {...team}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container></center>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
