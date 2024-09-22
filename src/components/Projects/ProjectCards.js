import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import GalleryCarousel from "./GalleryCarousel"; // Adjust the path as necessary
import './Project.css';

const galleryItems = [
  [
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp",
      altText: "Waterfall",
      title: "Card title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#!",
    },
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp",
      altText: "Sunset Over the Sea",
      title: "Card title",
      description: "Some quick example text...",
      link: "#!",
    },
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp",
      altText: "Sunset over the Sea",
      title: "Card title",
      description: "Some quick example text...",
      link: "#!",
    },
  ],
  // Add more items as needed
];

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description.substring(0, 100)}...
          </Card.Text>
          <div className="d-flex justify-content-between mt-2">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {props.isGallery ? (
              <Button variant="primary" onClick={handleShow}>
                Read More
              </Button>
            ) : (
              <Button variant="primary" onClick={handleShow}>
                Read More
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Modal for project details or gallery */}
      <Modal show={showModal} onHide={handleClose} className="project-modal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.isGallery ? (
            <GalleryCarousel items={galleryItems} />
          ) : (
            <p style={{ textAlign: "justify" }}>{props.details}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;