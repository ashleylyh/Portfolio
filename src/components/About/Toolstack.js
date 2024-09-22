import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiAnaconda, 
  SiLinux,
  SiNotion, 
  SiAdobeillustrator,
  SiAdobelightroom,
  SiFigma,
  SiLatex,
  SiBitbucket,

} from "react-icons/si";
import { TfiVideoClapper } from "react-icons/tfi";

const ToolIcon = ({ icon: Icon = "", name }) => {
  return (
    <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
      <div>
        <Icon />
        <div className="tech-icon-name">{name}</div>
      </div>
    </Col>
  );
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ToolIcon icon={SiMacos} name="MacOS" />
      <ToolIcon icon={SiLinux} name="Linux" />
      <ToolIcon icon={SiVisualstudiocode} name="VS Code" />
      <ToolIcon icon={SiBitbucket} name="Bitbucket" />
      <ToolIcon icon={SiSlack} name="Slack" />
      <ToolIcon icon={SiAnaconda} name="Anaconda" />
      <ToolIcon icon={SiNotion} name="Notion" />
      <ToolIcon icon={SiAdobeillustrator} name="Adobe Illustrator" />
      <ToolIcon icon={SiAdobelightroom} name="Adobe Lightroom" />
      <ToolIcon icon={SiFigma} name="Figma" />
      <ToolIcon icon={SiLatex} name="LaTeX" />
      <ToolIcon icon={TfiVideoClapper} name="Final Cut Pro" />
    </Row>
  );
}

export default Toolstack;
