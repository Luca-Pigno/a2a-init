import React, { useState } from "react";

// styles
import './Menu.css';

// components
import MenuDot from "../menuDot/MenuDot";
import MenuItem from "../menuItem/MenuItem";

// assets
import Logo from "../../../assets/images/white-logo.svg";


const Menu = (props) => {

  const [state, setState] = useState({
    isOpen: false
  })

  const handleClick = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    })
  }

  const closeMenu = () => {
    setState({
      ...state,
      isOpen: false
    })
  }


  return (
    <div className="menu-open-container">
      {
        state.isOpen &&
        <div className="menu-open-blur-effect" />
      }
      <div className={`menu-open-background ${state.isOpen && "menu-open-animation-background"}`}>
        <div className="menu-open-links-container">
          {
            props.routes.map((route, i) => {
              return (
                <div key={i}>
                  <MenuItem
                    id={route.id}
                    title={route.title}
                    color={route.color}
                    linkTo={route.linkTo}
                    photo={route.photo}
                    lastId={props.routes[props.routes.length - 1].id}
                    handleClick={closeMenu}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="menu-container">
        <div className="logo-container">
          <img
            src={Logo}
            alt={"A2A"}
          />
        </div>

        <div className="menu-links-container">
          {
            props.routes.map((route, i) => {
              return (
                <div key={i}>
                  <MenuDot
                    key={i}
                    color={route.color}
                    to={route.linkTo}
                    title={route.title}
                    handleClick={closeMenu}
                  />
                </div>
              )
            })
          }
        </div>

        <div className="burger-container">
          <input type="checkbox" onClick={handleClick} checked={state.isOpen} />
          <span className="burger-line burger-line1" />
          <span className="burger-line burger-line2" />
          <span className="burger-line burger-line3" />
        </div>
      </div>
    </div>

  )
}

export default Menu