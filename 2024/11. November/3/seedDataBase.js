import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/bookModel.js";
import Author from "./models/authorModel.js";
import { books, authors } from "./seedData.js";

dotenv.config();

export async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Author.insertMany(authors);
    const authorDocs = await Author.find();

    // Matching authors to books
    books.forEach((book) => {
      const author = authorDocs.find((a) => a.name === book.author);
      book.author = author._id;
    });

    await Book.insertMany(books);
    console.log("Data seeded successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
