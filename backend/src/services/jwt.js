const jwt = require('jsonwebtoken')
const constants = require('../constants')

const generateAuthToken = (payload, res) => {
  const healthToken = 60 * 60 * 24
  const token = jwt.sign(payload, constants.enviroment.secretKey, {
    expiresIn: healthToken,
  })
  res.set('Access-Control-Expose-Headers', 'access-token')
  res.set('access-token', token)
}

const verifyAuthToken = (req, res, next) => {
  const token = req.headers['access-token']
  if (token) {
    try {
      const decode = jwt.verify(token, constants.enviroment.secretKey)
      const payload = { ...decode }
      delete payload.iat
      delete payload.exp
      generateAuthToken(payload, res)
      req.body = { ...req.body, ...payload }
    } catch (error) {
      console.error(error)
      if (error.name === 'TokenExpiredError') {
        return res.json({
          success: 0,
          failAuth: true,
          message: 'Session expired',
        })
      }
      return res.json({
        success: false,
        failAuth: true,
        message: 'Invalid token',
      })
    }
    next()
  } else {
    res.send({ success: false, failAuth: true, message: 'Token required' })
  }
}

module.exports = { generateAuthToken, verifyAuthToken }
