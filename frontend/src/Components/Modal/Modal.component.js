import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext.context";
import "./Modal.styles.css";

export default function Modal(props) {
  const { modalVisible } = useContext(MainContext);

  return (
    <div className={`modal-container ${modalVisible !== props.children.props.form ? "hidden" : ""}`}>
      <div className="modal-box">{props.children}</div>
    </div>
  );
}
