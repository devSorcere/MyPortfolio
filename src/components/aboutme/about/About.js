import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import profile_data from "../../../utils/const";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                
                My name is{" "}
                <b className="purple">
                  {profile_data.first_name + "  " + profile_data.last_name}{" "}
                </b>
                and I am a{" "}
                <b className="purple">
                  Full Stack Developer AND Mobile Developer{" "}
                </b>
                <br />
                <br />I am proficient in various programming languages such as
                &nbsp;
                <b className="purple">
                  {" "}
                  HTML, CSS, PHP, JavaScript, Python and .{" "}
                </b>
                <br />
                <br />I also have experience working with frameworks and
                libraries such as &nbsp;
                <b className="purple">
                  {" "}
                  NodeJS, ReactJS, VueJS, AngularJS, NextJS, Laravel, .{" "}
                </b>
                <br />
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
