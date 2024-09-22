import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avater from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm currently a Senior Student in <b className="purple"> Computer Engineering </b> with a minor in <b className='purple' >Big Data Technology</b> at <b className='purple'>The Hong Kong University of Science and Technology (HKUST)</b>.
              <br />
              <br />I am fluent in programming language like
              <i>
                <b className="purple"> Python, C++, TypeScript</b>. 
              </i>
              <br />
              <br />
              My field of Interest's are in &nbsp;
              <i>
                <b className="purple">Machine Learning,</b>{" "}
                <b className="purple">Software </b> and {" "} <b className="purple">System Development</b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Web developemnt with <b className="purple">Node.js</b> and <b className="purple">React.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avater} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me via
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashleylyh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yuhsi.1026@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashleylyh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yuhsi_1026"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
