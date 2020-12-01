const notesController = {};

const noteModel = require("../models/note.model");

notesController.getNotes = async (req, res) => {
    const notes = await noteModel.find();
    res.json(notes);
};

notesController.getNote = async (req, res) => {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    res.json(note);
};

notesController.createNote = async (req, res) => {
    const { title, description, author, date } = req.body;
    const newNote = new noteModel({
        title,
        description,
        author,
        date,
    });
    await newNote.save();
    res.send({ message: "Note saved" });
};

notesController.updateNote = async (req, res) => {
    const { title, description, author, date } = req.body;
    const id = req.params.id;
    await noteModel.findByIdAndUpdate(id, { title, description, author, date });
    res.send({ message: "Note updated" });
};

notesController.deleteNote = async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.send({ message: "Note deleted" });
};

module.exports = notesController;
