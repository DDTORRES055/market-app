const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
