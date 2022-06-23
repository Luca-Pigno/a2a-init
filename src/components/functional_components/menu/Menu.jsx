import React, { useState } from "react";

// styles
import './Menu.css';

// components
import MenuDot from "../menuDot/MenuDot";
import MenuItem from "../menuItem/MenuItem";

// assets
import Logo from "../../../assets/images/white-logo.svg";
import MenuDropDown from "../menuDropDown/MenuDropDown";


const Menu = (props) => {

  const [state, setState] = useState({
    isOpen: false,
    dropDownIsOpen: false
  })

  const handleDropDown = () => {
    setState({
      ...state,
      dropDownIsOpen: !state.dropDownIsOpen
    })
  }

  const handleFactoryClick = (value) => {
    props.handleFactoryClick(value);
  }

  const closeAllMenus = () => {
    setState({
      ...state,
      isOpen: false,
      dropDownIsOpen: false
    })
  }

  const handlePathMenu = () => {
    setState({
      ...state,
      isOpen: !state.isOpen,
      dropDownIsOpen: window.innerWidth < 1024 ? !state.dropDownIsOpen : state.dropDownIsOpen
    })
  }


  return (
    <div className="menu-open-container">
      {
        (state.isOpen || state.dropDownIsOpen) &&
        <div className="menu-open-blur-effect" onClick={closeAllMenus} />
      }
      <div className={`menu-open-background ${state.isOpen && "menu-open-animation-background"}`}>
        <div className="mobile-menu-factory-container">
          <p>Impianto</p>
          <h3>{props.selectedFactory}</h3>
          <div className="mobile-menu-factory-triangle" />
        </div>
        <div className="menu-open-links-container">
          {
            props.routes?.map((route, i) => {
              return (
                <div key={i}>
                  <MenuItem
                    id={route.id}
                    title={route.title}
                    color={route.color}
                    linkTo={route.linkTo}
                    photo={route.photo}
                    lastId={props.routes[props.routes.length - 1].id}
                    handleClick={closeAllMenus}
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

        <div className="menu-container-button-mask" onClick={handlePathMenu} />

        <div className="menu-links-container">
          {
            props.routes?.map((route, i) => {
              return (
                <div key={i}>
                  <MenuDot
                    key={i}
                    color={route.color}
                    to={route.linkTo}
                    title={route.title}
                    handleClick={closeAllMenus}
                  />
                </div>
              )
            })
          }
        </div>

        <div className="burger-container">
          <input type="checkbox" onClick={handleDropDown} checked={state.dropDownIsOpen} />
          <span className="burger-line burger-line1" />
          <span className="burger-line burger-line2" />
          <span className="burger-line burger-line3" />

          {
            state.dropDownIsOpen && window.innerWidth >= 1024 &&
            <div className="menu-drop-down-container">
              <MenuDropDown
                factories={props.factories}
                selectedFactory={props.selectedFactory}
                links={props.links}
                company={"A2A S.p.A."}
                pi={"P.I. 11957540153"}
                handleFactoryClick={handleFactoryClick}
              />
            </div>
          }

        </div>
      </div>
    </div>

  )
}

export default Menu