const { Router } = require("express");

const productsRouter = Router();

const productsController = require("../controllers/products.controller");

productsRouter.route("/").get(productsController.getProducts).post(productsController.createProduct);

productsRouter.route("/:id").get(productsController.getProduct).put(productsController.updateProduct);

productsRouter.route("/setPrice/:id").put(productsController.setPrice);

productsRouter.route("/enable/:id").put(productsController.enable);

productsRouter.route("/disable/:id").put(productsController.disable);

module.exports = productsRouter;
