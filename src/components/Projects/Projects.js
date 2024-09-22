import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards"; // Adjust the path as necessary
import Particle from "../Particle"; // Adjust the path as necessary
import MLpa1 from "../../Assets/Projects/project-02.png";
import MLproject from "../../Assets/Projects/project-03.png";
import MLpa2 from "../../Assets/Projects/project-04.png";
import Embedded from "../../Assets/Projects/project-05.png";
import ImProcessing from "../../Assets/Projects/project-06.png";
import ComputerGraphic from "../../Assets/Projects/project-07.png";
import Design from "../../Assets/Projects/project-11.png";
import LineCar from "../../Assets/Projects/project-08.png";
import Tetris from "../../Assets/Projects/project-09.png";
import LinuxShell from "../../Assets/Projects/project-10.png";

// Sample project data
const projectData = [
  {
    imgPath: MLpa1,
    title: "Machine Learning Model Training",
    description:
      "Using Linear Regression, Logistic Regression Model, and Feedforward Neural Networks on an anonymous education dataset and do hyperparameters tuning.",
    details:
      "This project is a part of my Machine Learning course (COMP4211). I have used Linear Regression, Logistic Regression Model, and Feedforward Neural Networks on an anonymous education dataset and do hyperparameters tuning. The main purpose of this project is to prtactice the data-preprocessing technique, and feature engineering based on the features provided in the dataset.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "",
    isBlog: false,
  },
  {
    imgPath: MLpa2,
    title: "AdaIN Style Transfer Model",
    description:
      "Implementation of generative models and application of generated data in data augmentation for classification tasks.",
    details:
      "This project is a part of my Machine Learning course (COMP4211). I have implemented generative models and applied generated data in data augmentation for classification tasks. In this project, I use the AdaIN Style Transfer Model Structure and applied it to the task of style transfer. At the end, I use the generated data to do data augmentation for classification tasks.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
    isBlog: false,
  },
  {
    imgPath: MLproject,
    title: "HK Horse Racing Prediction",
    description:
      "Implementation of generative models and application of generated data in data augmentation for classification tasks.",
    details:
      "This project is a part of my Machine Learning course (COMP4211). I have use several machine learning models to predict the horse racing placement result in a race. Including Linear Regression, Multilayer Perceptron, Random Forest, and Learning to Rank. The main purpose of this project is to practice the feature engineering and model implementation based on the features provided in the dataset.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
    isBlog: false,
  },
  {
    imgPath: Embedded,
    title: "Auto Pet Feeder using STM32",
    description:
      "Design and implement a Auto Pet Feeder using STM32 Main Board.",
    details:
      "This project is a part of my Embedded System course. I have designed and implemented a traffic light controller using an embedded system.",
    ghLink: "...",
    isBlog: false,
  },
  {
    imgPath: ImProcessing,
    title: "Portraiture Image Processing",
    description:
      "Design and implement a Portrait Image Enhancement Tool using MATLAB.",
    details:
      "This project is a part of my Image Processing course. I have designed and implemented a ...",
    ghLink: "...",
    isBlog: false,
  },
  {
    imgPath: ComputerGraphic,
    title: "Height Field Rendering",
    description:
      "Implement a height field rendering using OpenGL.",
    details:
      "This project is a part of my Computer Graphic course. I have implemented a ...",
    ghLink: "...",
    isBlog: false,
  },
  {
    imgPath: Design,
    title: "Design Gallary",
    description:
      "Here shows my design works.",
    details:
      "",
    ghLink: "...",
    isBlog: false,
    isGallery: true,
  },

  // Add more projects as needed
];

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
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCards
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                details={project.details}
                ghLink={project.ghLink}
                // demoLink={project.demoLink}
                isBlog={project.isBlog}
                isGallery={project.isGallery} // This card links to the gallery
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
