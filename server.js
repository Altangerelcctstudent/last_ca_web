const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));