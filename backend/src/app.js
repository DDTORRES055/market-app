const express = require("express");
const cors = require("cors");

const app = express();

//#region Settings

app.set("PORT", process.env.PORT || 4000);

//#endregion

//#region Middlewares

app.use(cors());
app.use(express.json());

//#endregion

//#region Routes

app.use("/api/users", require("./routes/users.routes"));
app.use("/api/notes", require("./routes/notes.routes"));

//#endregion

module.exports = app;
