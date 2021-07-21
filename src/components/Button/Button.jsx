import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <div className="Button__mask">
        {props.text || "button"}
        {props.icon && <i className={props.icon}></i>}
      </div>
      <div className="Button__mask2">
        {props.text || "button"}
        {props.icon && <i className={props.icon}></i>}
      </div>
    </div>
  );
}

export default Button;
