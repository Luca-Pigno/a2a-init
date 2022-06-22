import React from "react";

// style
import './GameCircle.css';

const GameCircle = ({ score, maxPoints }) => {

  let tempPoints = [];
  let barsNumber = 70;

  for (let i = 0; i < barsNumber; i++) {
    tempPoints.push(<div key={i} className={score !== 0 && i <= (score / maxPoints * barsNumber) ? "circle-point marked" : "circle-point"} style={{ transform: `rotate(calc(${i}*(174deg/${barsNumber}) + 4deg)) translate(-55px)` }}></div>)
  }

  return (
    <div className="circle-container">
      <div className="circle">
        {tempPoints}
      </div>
      <div className="circle-text">
        <p>kg/h</p>
      </div>
      <div className="circle-midline" />
      <div className="circle-score-line" style={{ transform: `translate(-100%, 0%) rotate(calc(${score}deg / ${maxPoints} * 170 + 5deg))` }} />
      <div className="circle-middle-round">
        <div className="circle-middle-inner-round" />
      </div>
      <div className="circle-score">
        {score}
      </div>
    </div>
  )
}

export default GameCircle