const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

//#region Settings

app.set("PORT", process.env.PORT || 4000);

//#endregion

//#region Static files

app.use(express.static(path.join(__dirname, "public")));

//#endregion

//#region Middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//#endregion

//#region Routes

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.use("/api/products", require("./routes/products.routes"));

//#endregion

module.exports = app;
