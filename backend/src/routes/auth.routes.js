const { Router } = require("express");

const authRouter = Router();

const authController = require("../controllers/auth.controller");

authRouter.route("/login").post(authController.login);

module.exports = authRouter;
