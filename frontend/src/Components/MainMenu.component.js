import React from "react";
import { Notes, Group } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function MainMenu() {
    return (
        <div className="row" style={{ margin: 0 }}>
            <LinkButton to="/users" text="Usuarios" colorBackgrond="green" icon={Group} />
            <LinkButton to="/notes" text="Notas" colorBackgrond="blue" icon={Notes} />
        </div>
    );
}

function LinkButton(props) {
    const isMobile = useMediaQuery({ maxWidth: 1000 });
    return (
        <Link to={props.to}>
            <div
                style={{
                    height: isMobile ? window.innerHeight / 2 : window.innerHeight,
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#efefef",
                    },
                    zIndex: 0,
                }}
                className={`col s12 m12 l6 ${props.colorBackgrond} valign-wrapper hoverable`}
            >
                <div
                    className="center-align"
                    style={{
                        display: "block",
                        width: "100%",
                        fontSize: "40px",
                    }}
                >
                    {props.text}
                    <br />
                    <props.icon />
                </div>
            </div>
        </Link>
    );
}
