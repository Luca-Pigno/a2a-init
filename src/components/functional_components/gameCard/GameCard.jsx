import React from "react";

// styles
import './GameCard.css';

const GameCard = (props) => {

  return (
    <div className="gamecard-container">
      <div className="gamecard-number-border">
        <div className="gamecard-number-container">
          {props.number}
        </div>
      </div>
      <div className="gamecard-description-container">
        {props.description}
      </div>
    </div>
  )
}

GameCard.defaultProps = {
  number: "01"
}

export default GameCard