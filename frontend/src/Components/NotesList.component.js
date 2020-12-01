import React, { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./Header.component";

export default function NotesList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            const notes = await Axios.get("http://localhost:4000/api/notes");
            setNotes(notes.data);
        }
        getNotes();
    }, []);

    return (
        <div>
            <Header color="blue" title="Notas" />
            <div className="container" style={{ padding: 40 }}>
                <div className="row">
                    {notes.map((note) => {
                        return (
                            <div className="col s12 m3 l3" key={note._id}>
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{note.title}</span>
                                        <p>{note.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
