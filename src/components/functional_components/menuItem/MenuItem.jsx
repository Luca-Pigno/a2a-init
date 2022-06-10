import React from "react";

// style
import './MenuItem.css';

// components
import MenuDot from "../menuDot/MenuDot";

const MenuItem = (props) => {

  const handleClick = () => {
    props.handleClick();
  }
  
  return (
    <div className="menu-item-container">
      <div className="menu-item-photo-container">
        <img
          src={props.photo}
          alt={props.title}
        />
      </div>

      <div className="menu-item-title-container" style={{ color: props.color === "blue" ? "#FFFFFF" : "#FFA005" }}>
        {props.title}
      </div>

      <div className={`menu-item-line-container ${props.id === "01" && "menu-first-item-line-container"} ${props.id === props.lastId && "menu-last-item-line-container"}`} />

      <div className="menu-item-dot-container">
        <MenuDot
          color={props.color}
          to={props.linkTo}
          handleClick={handleClick}
        />
      </div>

      <div className="menu-item-id-container">
        {props.id}
      </div>
    </div>

  )
}

export default MenuItem