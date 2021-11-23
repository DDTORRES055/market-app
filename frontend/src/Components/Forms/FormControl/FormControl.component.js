import React from "react";
import "../FormsStyles/FormsStyles.styles.css";

export default function FormControls(props) {
  return (
    <React.Fragment>
      <div className="form-control">
        <label htmlFor={props.id}>
          {props.required && <span className="required">*</span>}
          {props.label}
        </label>
        <div className="form-imput">
          <input type={props.type || "text"} id={props.id} value={props.value} onChange={props.onChange} />
          <div className={`error-message ${props.duplicated ? "duplicated" : ""}`}>{props.message}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
