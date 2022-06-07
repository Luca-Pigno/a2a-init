import React from "react";

// styles
import './FaqsContainer.css';

const FaqsContainer = (props) => {

  return (
    <div className="faqs-container">
      {props.faq.map((faq, i) => {
        return <div key={i}>{faq}</div>
      })}
    </div>
  )
}

export default FaqsContainer