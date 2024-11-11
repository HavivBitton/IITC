const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Models
const userSchema = require("./models/userModel.js");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

//Connection to mongoDB
const URI = process.env.URI;
mongoose.connect(URI).then(() => {
  console.log("connected to mongoDB");
});
