const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    barcode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
    },
    enabled: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
