const { Router } = require("express");

const usersRouter = Router();

const usersController = require("../controllers/users.controller");

usersRouter.route("/").get(usersController.getUsers).post(usersController.createUser);

usersRouter
    .route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = usersRouter;
