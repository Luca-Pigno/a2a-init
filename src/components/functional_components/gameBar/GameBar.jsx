import React from "react";

// style
import './GameBar.css';

const GameBar = ({ score, maxPoints, limit }) => {
  let percentage = score / maxPoints * 100;
  let limitLevel = 252 * (1 - limit / maxPoints);

  return (
    <div className="gamebar-container">
      <div className="gamebar-bars-container">
        <div
          className="gamebar-limit-line"
          style={{ marginTop: `${limitLevel}px` }}
        />
        <div className="gamebar-bar-container">
          <div
            className="gamebar-inner-bar-container"
            style={{ height: `${percentage}%` }}
          />
        </div>
        <div className="gamebar-limit-line"
          style={{ marginTop: `${limitLevel}px` }}
        />
      </div>
      <div className="gamebar-text-container">Soglia</div>
    </div>
  )
}

export default GameBar