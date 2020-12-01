const { Router } = require("express");

const notesRouter = Router();

const notesController = require("../controllers/notes.controller");

notesRouter.route("/").get(notesController.getNotes).post(notesController.createNote);

notesRouter
    .route("/:id")
    .get(notesController.getNote)
    .put(notesController.updateNote)
    .delete(notesController.deleteNote);

module.exports = notesRouter;
