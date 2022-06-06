import React from "react";

// styles
import './Menu.css';

// assets
import Logo from "../../../assets/images/white-logo.svg";

const Menu = () => {

  return (
    <div className="menu-container">
      <div className="logo-container">
        <img
          src={Logo}
          alt={"A2A"}
        />
      </div>

      <div className="burger-container">
        <input type="checkbox" />
        <span className="burger-line burger-line1" />
        <span className="burger-line burger-line2" />
        <span className="burger-line burger-line3" />
      </div>
    </div>
  )
}

export default Menu