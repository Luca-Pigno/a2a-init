import React from "react";

// styles
import './FaqLink.css';

const FaqLink = (props) => {


  return (
    <a className="faqLink-container" target="_blank" href={props.linkTo}>
      <div className="faqLink-icon-container">
        <img
          alt={'icon'}
          src={props.icon}
        />
      </div>
      <div className="faqLink-text-container">
        {props.description}
      </div>
    </a>
  )
}

export default FaqLink