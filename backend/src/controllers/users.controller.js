const usersController = {};

const userModel = require("../models/user.model");

usersController.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
};

usersController.getUser = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.json(user);
};

usersController.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new userModel({
        username,
    });
    await newUser.save();
    res.send({ message: "User saved" });
};

usersController.updateUser = async (req, res) => {
    const { username } = req.body;
    const id = req.params.id;
    await userModel.findByIdAndUpdate(id, { username });
    res.send({ message: "User updated" });
};

usersController.deleteUser = async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    res.send({ message: "User deleted" });
};

module.exports = usersController;
