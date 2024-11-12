const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Models
const userSchema = require("./models/userModel.js");

//Router
const usersRouter = require("./routes/userRoutes.js");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

//Users
app.use("/api/users", usersRouter);

//Connection to mongoDB
const URI = process.env.URI;
mongoose.connect(URI).then(() => {
  console.log("connected to mongoDB");
});
