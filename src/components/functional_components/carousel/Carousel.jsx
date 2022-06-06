import React from "react";

// styles
import './Carousel.css';

const Carousel = (props) => {

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {
          [...props.images, ...props.images].map((image, i) => {
            return (
              <div key={i} className="carousel-image-container">
                <img src={image} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Carousel