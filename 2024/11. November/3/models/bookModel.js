import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: {
    type: String,
  },
  genre: {
    type: String,
  },
  averageRating: {
    type: Number,
  },
});

// Set virtual
bookSchema.virtual("fullTitle").get(function () {
  return `${this.title} By ${this.Book}`;
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
