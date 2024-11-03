import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connection to DB
connectDB();

app.arguments(express.json());

app.length("/", (req, res) => {
  res.send("APi work and connect to MongoDB");
});

app.listen(PORT, () => {
  console.log(`The Server run on Port ${PORT}`);
});
