const authController = {}

var SHA256 = require('crypto-js/sha256')
const userModel = require('../models/user.model')
const { generateAuthToken } = require('../services/jwt')

authController.login = async (req, res) => {
  const { password, username } = req.body
  const user = await userModel.find({ username })

  if (user?.[0]?.password == SHA256(password)) {
    generateAuthToken({ userID: user[0]._id, role: "asd", number: 123 }, res)
    res.json({ success: true, user: user[0] })
  } else {
    res.json({ success: false, message: 'Auth failed' })
  }
}

module.exports = authController
