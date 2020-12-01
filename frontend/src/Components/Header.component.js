import React from "react";
import { Add, ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Navigation(props) {
    return (
        <nav className={`nav-extended ${props.color}`}>
            <div className="container nav-content">
                <span className="nav-title valign-wrapper">
                    <Link to="/">
                        <ArrowBackIos style={{ fontSize: 25 }} />
                    </Link>
                    {props.title}
                </span>
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal" href="/">
                    <Add style={{ fontSize: 56, padding: 8 }} />
                </a>
            </div>
        </nav>
    );
}
