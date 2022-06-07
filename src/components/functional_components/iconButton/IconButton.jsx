import React from "react";

// styles
import './IconButton.css';

// asstes
import ArrowDown from "../../../assets/images/icons/arrowhead-down.svg";

const IconButton = (props) => {

  const handleClick = (e) => {
    props.handleClick(e);
  }

  const getButtonIcon = (type) => {
    let icon;
    switch (type) {
      case ("close"):
        icon = <div>&#10006;</div>;
        break;
      case ("arrow-down"):
        icon = <img src={ArrowDown} alt={"scroll down"} />;
        break;
      default:
        icon = <div>&#10006;</div>;
        break;
    }
    return icon;
  }


  return (
    <button
      className={`icon-button-container ${props.type === "arrow-down" && "arrow-down-container"}`}
      onClick={handleClick}
    >
      {getButtonIcon(props.type)}
    </button>
  )
}

export default IconButton