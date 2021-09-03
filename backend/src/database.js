const mongoose = require("mongoose");

const URI = process.env["NODE_ENV"] === "test" ? process.env.DATABASE_URI_TEST : process.env.DATABASE_URI || "mongodb://localhost/market-app-database";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
