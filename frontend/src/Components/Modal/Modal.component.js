import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext.context";
import "./Modal.styles.css";

export default function Modal(props) {
  const { modalVisible, setModalVisible } = useContext(MainContext);

  return (
    <div className={`modal-container ${modalVisible !== props.children.props.form ? "hidden" : ""}`}>
      <div className="modal-box">
        <div className="closeModalIcon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            space="preserve"
            onClick={() => {
              setModalVisible(null);
            }}
          >
            <g>
              <path
                d="M964.7,157.6L622.3,500l342.4,342.4l0,0c15.7,15.7,25.3,37.3,25.3,61.1c0,47.7-38.7,86.5-86.5,86.5c-23.9,0-45.5-9.7-61.1-25.3l0,0L500,622.3L157.6,964.7l0,0C142,980.3,120.3,990,96.5,990C48.7,990,10,951.3,10,903.5c0-23.9,9.7-45.5,25.3-61.1l0,0L377.7,500L35.3,157.6l0,0C19.7,142,10,120.3,10,96.5C10,48.7,48.7,10,96.5,10c23.9,0,45.5,9.7,61.1,25.3l0,0L500,377.7L842.4,35.3l0,0C858,19.7,879.7,10,903.5,10c47.8,0,86.5,38.7,86.5,86.5C990,120.3,980.3,142,964.7,157.6L964.7,157.6z"
                fill="#BCBCCB"
              />
            </g>
          </svg>
        </div>
        {props.children}
      </div>
    </div>
  );
}
