import React from "react";

// import { Link } from "react-router-dom";

// style
import './MenuDot.css';

const MenuDot = (props) => {
  
  const handleClick = () => {
    props.handleClick();
  }

  return (
    <div className="menu-dot-balloon-container">
      <a href={"#"} className={`menu-dot-container ${props.selected && "menu-dot-selected-container"}`} onClick={handleClick}>
        <div className={props.color === "blue" ? "menu-dot-blue" : "menu-dot-orange"}><div className="menu-dot-selected" /></div>
      </a>

      {
        props.title &&
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