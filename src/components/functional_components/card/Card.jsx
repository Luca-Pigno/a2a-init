import React from "react";

// styles
import './Card.css';

const Card = (props) => {

  return (
    <div
      className="card-container"
    >
      <div className="card-title-container">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-number">{props.number}</p>
      </div>
      <div className="card-description-container">
        {props.description}
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: "title",
  number: "01"
}

export default Card