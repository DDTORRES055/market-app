import React from "react";
import "./Button.styles.css";

export default function Button(props) {
  const { onClick, text } = props;

  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}
