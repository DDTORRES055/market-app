const usersController = {};

var SHA256 = require("crypto-js/sha256");
const userModel = require("../models/user.model");
const { use } = require("../routes/users.routes");
const { generateAuthToken } = require("../services/jwt");

usersController.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

usersController.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findById(id);
  res.json({ success: true, user });
};

usersController.createUser = async (req, res) => {
  const { name, password, username } = req.body;

  const users = await userModel.find({ username: { $eq: username } });

  if (users.length > 0) {
    res.send({ success: false, message: "Username duplicated" });
    return;
  }

  const newUser = new userModel({
    name,
    password: SHA256(password),
    username,
  });
  await newUser.save();
  res.send({ success: true, message: "User saved" });
};

usersController.updateUser = async (req, res) => {
  const { name, password, username } = req.body;
  const id = req.params.id;
  await userModel.findByIdAndUpdate(id, { name, password: SHA256(password), username });
  res.send({ success: true, message: "User updated" });
};

usersController.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findById(id);

  if (!user) {
    res.send({ success: false, message: "User doesn't exists" });
    return;
  }

  await userModel.findByIdAndDelete(id);
  res.send({ success: true, message: "User deleted" });
};

usersController.isDuplicated = async (req, res) => {
  const barcode = req.params.barcode;
  const results = await userModel.find({ barcode });
  if (results.length > 0) {
    res.send({ duplicated: true });
  } else {
    res.send({ duplicated: false });
  }
};

usersController.isDuplicatedForUpdate = async (req, res) => {
  const id = req.params.id;
  const barcode = req.params.barcode;
  const results = await userModel.find({ barcode });
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

usersController.login = async (req, res) => {
  const { password, username } = req.body;
  const user = await userModel.find({ username });

  if (user?.[0]?.password == SHA256(password)) {
    generateAuthToken(user[0]._id, res)
    res.json({ success: true, user: user[0] });
  } else {
    res.json({ success: false, message: "Auth failed" });
  }

};

module.exports = usersController;
