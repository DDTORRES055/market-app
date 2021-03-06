//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!         Deprecated              !!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const productsController = {};

const productModel = require("../models/product.model");

productsController.getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

productsController.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findById(id);
  res.json({ success: true, product });
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

productsController.isDuplicated = async (req, res) => {
  const barcode = req.params.barcode;
  const results = await productModel.find({ barcode });
  if (results.length > 0) {
    res.send({ duplicated: true });
  } else {
    res.send({ duplicated: false });
  }
};

productsController.isDuplicatedForUpdate = async (req, res) => {
  const id = req.params.id;
  const barcode = req.params.barcode;
  const results = await productModel.find({ barcode });
  if (results.length > 0) {
    if (results[0]._id.toString() === id.toString()) {
      res.send({ duplicated: false });
    } else {
      res.send({ duplicated: true });
    }
  } else {
    res.send({ duplicated: false });
  }
};

module.exports = productsController;
