import React from "react";

// styles
import './Button.css';

const Button = (props) => {

  const handleClick = (e) => {
    props.handleClick(e);
  }

  return (
    <button 
      className={`custom-button ${props.invertColor && "custom-button-inverted-color"} ${props.transparent && "custom-button-transparent"}`}
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