import React from "react";

// styles
import './Balloon.css';

// components
import IconButton from "../iconButton/IconButton";

const Balloon = (props) => {

  const handleCloseClick = (e) => {
    props.handleCloseClick(e)
  }

  return (
    <div className="balloon-container">
      <div className="balloon-close-button-container">
        <IconButton
          type={"close"}
          handleClick={handleCloseClick}
        />
      </div>
      <div className="balloon-text-container">
        {props.text}
      </div>
      <div className="balloon-triangle" />
    </div>
  )
}

export default Balloon