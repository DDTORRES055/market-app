const productsController = {};

const pool = require("../database");

productsController.getProducts = async (req, res) => {
  const products = await pool.query("SELECT * FROM products");
  res.json(products);
};

productsController.getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await pool.query("SELECT * FROM products WHERE _id = ?", [id]);
  const product = products[0];
  res.json({ success: true, product });
};

productsController.createProduct = async (req, res) => {
  const { barcode, name, quantity } = req.body;
  const newProduct = {
    barcode,
    name,
    quantity,
  };
  await pool.query("INSERT INTO products set ?", [newProduct]);
  res.send({ success: true, message: "Product saved" });
};

productsController.updateProduct = async (req, res) => {
  const { barcode, name, quantity } = req.body;
  const newProduct = {
    barcode,
    name,
    quantity,
  };
  const id = req.params.id;
  await pool.query("UPDATE products set ? WHERE _id = ?", [newProduct, id]);
  res.send({ success: true, message: "Product updated" });
};

productsController.setPrice = async (req, res) => {
  const { price } = req.body;
  const newProduct = {
    price,
  };
  const id = req.params.id;
  await pool.query("UPDATE products set ? WHERE _id = ?", [newProduct, id]);
  res.send({ success: true, message: "Product updated" });
};

productsController.enable = async (req, res) => {
  const id = req.params.id;
  const newProduct = {
    enabled: true,
  };
  await pool.query("UPDATE products set ? WHERE _id = ?", [newProduct, id]);
  res.send({ success: true, message: "Product updated" });
};

productsController.disable = async (req, res) => {
  const id = req.params.id;
  const newProduct = {
    enabled: false,
  };
  await pool.query("UPDATE products set ? WHERE _id = ?", [newProduct, id]);
  res.send({ success: true, message: "Product updated" });
};

productsController.isDuplicated = async (req, res) => {
  const barcode = req.params.barcode;
  const results = await pool.query("SELECT * FROM products WHERE barcode = ?", [barcode]);
  if (results.length > 0) {
    res.send({ duplicated: true });
  } else {
    res.send({ duplicated: false });
  }
};

productsController.isDuplicatedForUpdate = async (req, res) => {
  const id = req.params.id;
  const barcode = req.params.barcode;
  const results = await pool.query("SELECT * FROM products WHERE barcode = ?", [barcode]);
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
