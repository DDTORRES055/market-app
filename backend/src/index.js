require("dotenv").config();

require("./database");

const app = require("./app");

async function main() {
    await app.listen(app.get("PORT"));
    console.log(`Server on port ${app.get("PORT")}`);
}

main();
