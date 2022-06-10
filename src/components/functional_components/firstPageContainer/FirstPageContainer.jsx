import React from "react";

// style
import './FirstPageContainer.css';

// components
import Carousel from "../carousel/Carousel";
import Button from "../button/Button";

const FirstPageContainer = (props) => {

  return (
    <div className="first-page-container">
      <div className="first-page-text-carousel-container">
        <div className={"first-page-text-box"}>
          <div className={`first-page-text-container ${props.intro && "intro-page-text"}`}>
            <h3>{props.intro}</h3>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
          </div>

          <div className="first-page-button-container">
            <Button
              label={props.buttonLabel}
              handleClick={props.buttonHandleClick}
            />
          </div>
        </div>

        <Carousel
          images={props.carouselImage}
        />
      </div>
    </div>
  )
}

export default FirstPageContainer