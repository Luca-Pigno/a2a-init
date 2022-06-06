import React from "react";

// styles
import './Button.css';

const Button = (props) => {

  const handleClick = (e) => {
    props.handleClick(e);
  }

  return (
    <button 
      className={`custom-button ${props.invertColor && "custom-button-inverted-color"}`}
      onClick={handleClick}
    >
      {props.label}
    </button>
  )
}

Button.defaultProps = {
  label: "press"
}

export default Button