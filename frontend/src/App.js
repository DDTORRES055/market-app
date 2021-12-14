import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainProvider } from "./Context/MainContext.context";
//#region CSS Imports

//#endregion

//#region Import Components
import Main from "./Components/Main/Main.component";
import Login from "./Components/Login/Login.component";

//#endregion

function App() {
  return (
    <MainProvider>
      <Router>
        <Switch>
          <Route path="/main" exact component={Main} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </MainProvider>
  );
}

export default App;
