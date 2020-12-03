import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainProvider } from "./Context/MainContext.context";
//#region CSS Imports

//#endregion

//#region Import Components
import Main from "./Components/Main/Main.component";

//#endregion

function App() {
  return (
    <MainProvider>
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    </MainProvider>
  );
}

export default App;
