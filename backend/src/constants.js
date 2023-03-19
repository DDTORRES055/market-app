const constants = {
  enviroment: {
    nodeEnv: process.env.NODE_ENV || 'development',
    httpPort: process.env.PORT || 4000,
    databaseUri:
      process.env.DATABASE_URI || 'mongodb://localhost/market-app-database',
    databaseUriTest: process.env.DATABASE_URI_TEST,
    secretKey: process.env.SECRET_KEY,
  },
}

module.exports = constants
