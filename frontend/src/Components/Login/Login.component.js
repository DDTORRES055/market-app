import React from "react";
import LoginForm from "../Forms/LoginForm/LoginForm.component";
import "./Login.styles.css";

export default function Login() {
  return (
    <div id="login">
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}
