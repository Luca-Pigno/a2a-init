import React, { useState } from "react";

// styles
import './Faq.css';

const Faq = (props) => {

  const [state, setState] = useState({
    faqIsOpen: false
  })

  const openFaqCollapse = () => {
    setState({
      ...state,
      faqIsOpen: !state.faqIsOpen
    })
  }

  return (
    <div className="faq-container">
      <button
        className="faq-button"
        onClick={openFaqCollapse}
      >
        <div className="faq-button-title-container">
          {props.title}
        </div>
        <div className="faq-button-plus-container">
          {state.faqIsOpen ? <span>&#8722;</span> : <span>&#43;</span>}
        </div>
      </button>
      <div
        className={`faq-link-container ${state.faqIsOpen && "faq-link-container-open"} ${props.links.length > 1 && "faq-link-shorter"}`}
      >
        {props.links.map((link, i) => {
          return <div key={i}>{link}</div>
        })}
      </div>
    </div>
  )
}

export default Faq