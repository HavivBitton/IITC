const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

//Connection to mongoDB
const URI = process.env.URI;
mongoose.connect(URI).then(() => {
  console.log("connected to mongoDB");
});

//Router require
const usersRouter = require("./routes/userRoutes.js");

// get status
app.get(`/api/status`, (req, res) => {
  res.send({ status: `Server is running` });
});

//Users
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
