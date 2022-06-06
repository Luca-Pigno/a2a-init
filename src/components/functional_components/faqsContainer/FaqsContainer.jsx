import React from "react";

// styles
import './FaqsContainer.css';

const FaqsContainer = (props) => {

  return (
    <div className="faqs-container">
      {props.faq}
    </div>
  )
}

export default FaqsContainer