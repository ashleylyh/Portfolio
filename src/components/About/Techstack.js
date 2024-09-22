import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiCplusplus,
  SiAmazoncloudwatch,
  SiCss3,
  SiC
} from "react-icons/si";
import { BiMath } from "react-icons/bi";
import { IoHardwareChip } from "react-icons/io5";

const TechIcon = ({ icon: Icon = "", name }) => {
  return (
    <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
      <div>
        <Icon />
        <div className="tech-icon-name">{name}</div>
      </div>
    </Col>
  );
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon icon={SiCplusplus} name="C++" />
      <TechIcon icon={DiPython} name="Python" />
      <TechIcon icon={SiTypescript} name="TypeScript" />
      <TechIcon icon={DiJavascript1} name="JavaScript" />
      <TechIcon icon={DiReact} name="React" />
      <TechIcon icon={DiNodejs} name="Node.js" />
      <TechIcon icon={DiMongodb} name="MongoDB" />
      <TechIcon icon={DiGit} name="Git" />
      <TechIcon icon={SiC} name="C" />
      <TechIcon icon={DiJava} name="Java" />
      <TechIcon icon={SiCss3} name="CSS" />
      <TechIcon icon={SiAmazoncloudwatch} name="AWS Cloud Computing" />
      <TechIcon icon={BiMath} name="MATLAB" />
      <TechIcon icon={IoHardwareChip} name="MIPS" />

    </Row>
  );
}

export default Techstack;
