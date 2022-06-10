import React from "react";

// styles
import './IconButton.css';

// asstes
import ArrowDown from "../../../assets/images/icons/arrowhead-down.svg";
import ResizeArrow from '../../../assets/images/icons/arrow.svg';
import BoldArrow from "../../../assets/images/icons/bold-arrow.svg";
import Play from "../../../assets/images/icons/play.svg";

const IconButton = (props) => {

  const handleClick = (e) => {
    props.handleClick(e);
  }

  const getButtonIcon = (type, value) => {
    let icon;
    let classname = "icon-button-container";

    switch (type) {
      case ("close"):
        icon = <div>&#10006;</div>;
        break;
      case ("arrow-down"):
        icon = <img src={ArrowDown} alt={"scroll down"} />;
        classname += " arrow-down-container";
        break;
      case ("resize-open"):
        icon = <div className="resize-open-button-arrows">
          <img src={ResizeArrow} alt={" "} />
          <img src={ResizeArrow} alt={" "} />
        </div>;
        break;
      case ("resize-close"):
        icon = <div className="resize-close-button-arrows">
          <img src={ResizeArrow} alt={" "} />
          <img src={ResizeArrow} alt={" "} />
        </div>;
        break;
      case ("arrow-left"):
        icon = <img src={BoldArrow} alt={"previous"} />;
        classname += " arrow-left-container";
        break;
      case ("arrow-right"):
        icon = <img src={BoldArrow} alt={"next"} />;
        classname += " arrow-right-container";
        break;
      case ("plus"):
        icon = <div>&#10006;</div>;
        classname += " plus-icon-container";
        break;
      case ("play"):
        icon = <img src={Play} alt={"play"} />;
        classname += " play-icon-container";
        break;
      default:
        icon = <div>&#10006;</div>;
        break;
    }

    if (props.size === "xl") {
      classname += " icon-button-xl-container";
    }

    if (value === "icon") {
      return icon;
    }
    return classname;
  }


  return (
    <div className={props.size === "xl" ? "icon-button-border" : null}>
      <button
        className={getButtonIcon(props.type, "classname")}
        onClick={handleClick}
      >
        {getButtonIcon(props.type, "icon")}
      </button>
    </div>
  )
}

export default IconButton