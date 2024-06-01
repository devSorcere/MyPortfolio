import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import profile_data from "../../utils/const";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name">
                  {" "}
                  {profile_data.first_name + " " + profile_data.last_name}
                </strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  {profile_data.address.map((item) => (
                    <li className="socialicons">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour  homesocialicons"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              {/* <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src={profile_data.image}
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
