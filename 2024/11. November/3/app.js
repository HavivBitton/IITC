import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnect.js";
import Book from "./models/bookModel.js";
import Review from "./models/reviewModel.js";

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

// const book = await Book.findOne({ title: "The Great Gatsby" });
// console.log(book.fullTitle);

const review1 = new Review({ rating: 5 });
// review1.save();
