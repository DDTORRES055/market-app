const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const { verifyAuthToken } = require('./services/jwt')
const constants = require('./constants')

const app = express()

//#region Settings

app.set('PORT', constants.enviroment.httpPort)

//#endregion

//#region Static files

app.use(express.static(path.join(__dirname, 'public')))

//#endregion

//#region Middlewares

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//#endregion

//#region Routes

app.use('/products', verifyAuthToken, require('./routes/products.routes'))
app.use('/users', require('./routes/users.routes'))

//#endregion

module.exports = app
