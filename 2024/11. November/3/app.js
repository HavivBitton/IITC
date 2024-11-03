import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

// Connection to DB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("APi work and connect to MongoDB");
});

app.listen(PORT, () => {
  console.log(`The Server run on Port ${PORT}`);
});
