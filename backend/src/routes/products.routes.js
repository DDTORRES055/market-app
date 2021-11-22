const { Router } = require("express");
const { verifyAuthToken } = require("../services/jwt");

const productsRouter = Router();

const productsController = require("../controllers/products.controller");

productsRouter.route("/").get(productsController.getProducts).post(productsController.createProduct);

productsRouter
  .route("/:id")
  .get(productsController.getProduct)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

productsRouter.route("/setPrice/:id").put(productsController.setPrice);

productsRouter.route("/enable/:id").put(productsController.enable);

productsRouter.route("/disable/:id").put(productsController.disable);

productsRouter.route("/isDuplicated/:barcode").get(productsController.isDuplicated);

productsRouter.route("/isDuplicatedForUpdate/:id/:barcode").get(productsController.isDuplicatedForUpdate);

module.exports = productsRouter;
