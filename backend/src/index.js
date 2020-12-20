//?require("dotenv").config(); Environment variables config

//!require("./database"); Deprecated

const app = require("./app");

async function main() {
  await app.listen(app.get("PORT"));
  console.log(`Server on port ${app.get("PORT")}`);
}

main();
