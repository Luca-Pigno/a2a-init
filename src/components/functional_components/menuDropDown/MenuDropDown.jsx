import React, { useState } from "react";

// style
import './MenuDropDown.css';

// assets
import ArrowDown from '../../../assets/images/icons/arrow-down.svg';

const MenuDropDown = (props) => {

  const [state, setState] = useState({
    dropDownIsOpen: false
  })

  const openDropDownMenu = () => {
    if (props.factories.length > 1) {
      setState({
        ...state,
        dropDownIsOpen: !state.dropDownIsOpen
      })
    }
  }

  const handleFactoryClick = (value) => {
    props.handleFactoryClick(value);
    setState({
      ...state,
      dropDownIsOpen: false
    })
  }

  return (
    <div className="menu-drop-down-container">
      <div className="menu-drop-down-triangle" />
      <div className="menu-drop-down-box">
        <div
          className="menu-drop-down-factory-container noselect"
          onClick={openDropDownMenu}
          style={{ cursor: props.factories.length > 1 ? "pointer" : "default" }}
        >
          <div>{props.selectedFactory}</div>
          {
            props.factories.length > 1 &&
            <div className={state.dropDownIsOpen ? "menu-drop-down-arrow-rotates" : null}>
              <img
                src={ArrowDown}
                alt={state.dropDownIsOpen ? "close" : "open"}
              />
            </div>
          }
        </div>

        {
          state.dropDownIsOpen &&
          <div className="menu-drop-down-factories-list-container noselect">
            <ul className="menu-drop-down-factories-container">
              {
                props.factories?.map((factory, i) => {
                  return (
                    <li key={i}><div onClick={() => handleFactoryClick(factory)} className={factory !== props.selectedFactory ? "white-text-color" : null}>{factory}</div></li>
                  )
                })
              }
            </ul>
          </div>
        }

        <ul className="menu-drop-down-links-container">
          {
            props.links?.map((link, i) => {
              return (
                <li key={i}><a href={link.to} target="_blank">{link.label}</a></li>
              )
            })
          }
        </ul>

        <div className="menu-drop-down-pi-container">
          <p>{props.company}</p>
          <p>{props.pi}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuDropDown