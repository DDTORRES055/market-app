import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { MainContext } from "../../../Context/MainContext.context";
import Button from "../../Button/Button.component";
import FormControl from "../FormControl/FormControl.component";
import "../FormsStyles/FormsStyles.styles.css";

export default function LoginForm() {
  const { setSuccessMessage, authenticated, login } = useContext(MainContext);
  const [user, setUser] = useState({
    "login-username": "",
    "login-password": "",
  });
  const [errorFields, setErrorFields] = useState({
    login: "",
  });

  const onSubmit = async (event) => {
    if (
      user["login-username"] &&
      user["login-password"] &&
      (await login(user["login-username"], user["login-password"]))
    ) {
      setSuccessMessage("Bienvenido");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      return;
    } else {
      setErrorFields({
        login: "Credenciales erroneas",
      });
    }
  };

  const OnChangeText = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      ...{
        [id]: value,
      },
    });
  };

  return (
    <div className="form-contain" id="loginForm">
      {authenticated && <Redirect to="/"></Redirect>}
      <div className="form-title">Ingresar</div>
      <form>
        <div className="form-inputs">
          <div className="form-description"></div>
          <FormControl
            id="login-username"
            label="Usuario:"
            required={true}
            value={user["login-username"]}
            onChange={OnChangeText}
          />
          <FormControl
            id="login-password"
            label="Contraseña:"
            type="password"
            required={true}
            message={errorFields["login"]}
            value={user["login-password"]}
            onChange={OnChangeText}
          />
        </div>
        <div className="form-buttons">
          <Button onClick={onSubmit} text="Ingresar" />
        </div>
      </form>
    </div>
  );
}
