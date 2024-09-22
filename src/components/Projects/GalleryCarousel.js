import React from 'react';
// import './GalleryCarousel.css'; // Optional: for custom styles

const GalleryCarousel = ({ items }) => {
  return (
    <div
      id="carouselMultiItemExample"
      className="carousel slide carousel-dark text-center"
      data-mdb-ride="carousel"
    >
      {/* Controls */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className="carousel-control-prev position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Inner */}
      <div className="carousel-inner py-4">
        {items.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="container">
              <div className="row">
                {item.map((card, cardIndex) => (
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" key={cardIndex}>
                    <div className="card">
                      <img
                        src={card.imgSrc}
                        className="card-img-top"
                        alt={card.altText}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href={card.link} className="btn btn-primary">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Inner */}
    </div>
  );
};

export default GalleryCarousel;