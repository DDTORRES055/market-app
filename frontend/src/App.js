import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//#region CSS Imports

import "materialize-css/dist/css/materialize.min.css";

//#endregion

//#region Import Components

import NotesList from "./Components/NotesList.component";
import UsersList from "./Components/UsersList.component";
import FormCreateEditNote from "./Components/FormCreateEditNote.component";
import FormCreateUser from "./Components/FormCreateUser.component";
import MainMenu from "./Components/MainMenu.component";

//#endregion

function App() {
    return (
        <Router>
            <Route path="/" exact component={MainMenu} />
            <Route path="/notes" exact component={NotesList} />
            <Route path="/notes/edit/:id" component={FormCreateEditNote} />
            <Route path="/notes/create" component={FormCreateEditNote} />
            <Route path="/users" exact component={UsersList} />
            <Route path="/users/create" exact component={FormCreateUser} />
        </Router>
    );
}

export default App;
