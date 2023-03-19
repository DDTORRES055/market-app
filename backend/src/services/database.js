const mongoose = require('mongoose')
const constants = require('../constants')

const URI =
  constants.enviroment.nodeEnv === 'test'
    ? constants.enviroment.databaseUriTest
    : constants.enviroment.databaseUri

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('DB is connected')
})
