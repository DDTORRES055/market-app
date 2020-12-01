const productsController = {};

const productModel = require("../models/product.model");

productsController.getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

productsController.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findById(id);
  res.json(product);
};

productsController.createProduct = async (req, res) => {
  const { barcode, name, quantity } = req.body;
  const newProduct = new productModel({
    barcode,
    name,
    quantity,
  });
  await newProduct.save();
  res.send({ success: true, message: "Product saved" });
};

productsController.updateProduct = async (req, res) => {
  const { barcode, name, quantity } = req.body;
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, { barcode, name, quantity });
  res.send({ success: true, message: "Product updated" });
};

productsController.setPrice = async (req, res) => {
  const { price } = req.body;
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, { price });
  res.send({ success: true, message: "Product updated" });
};

productsController.enable = async (req, res) => {
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, { enabled: true });
  res.send({ success: true, message: "Product updated" });
};

productsController.disable = async (req, res) => {
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, { enabled: false });
  res.send({ success: true, message: "Product updated" });
};

module.exports = productsController;
