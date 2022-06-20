import React from "react";

import { Link } from "react-router-dom";

// style
import './MenuDot.css';

const MenuDot = (props) => {

  const handleClick = () => {
    props.handleClick();
  }
  
  const currentPath = "/il-viaggio-della-plastica"
  const isSelected = props.to === currentPath;

  return (
    <div className="menu-dot-balloon-container">
      <a href={props.to} className={`menu-dot-container ${isSelected && "menu-dot-selected-container"}`} onClick={handleClick}>
        <div className={isSelected ? "menu-dot-selected-container-mask menu-dot-container-mask" : "menu-dot-container-mask"} />
        <div className={props.color === "blue" ? "menu-dot-blue" : "menu-dot-orange"}><div className="menu-dot-selected" /></div>
      </a>

      {
        props.title && isSelected &&
        <div className="menu-balloon-container">
          <div className="menu-balloon-triangle" />
          <div className="menu-balloon-title-container">
            {props.title}
          </div>
        </div>
      }

    </div>

  )
}

export default MenuDot