import React from "react";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} >
        
    </button>
  );
}

export default CardBtn;
