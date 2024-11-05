import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title requires"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: {
    type: Date,
    required: [true, "Book publish date requires"],
    validate: {
      validator: function (date) {
        return date <= Date.now();
      },
      message: "The publish date cant be in the future",
    },
  },
  genre: {
    type: String,
  },
  averageRating: {
    type: Number,
    min: [1, " The rating must be at least 1"],
    max: [5, " The rating cant be more then 5"],
  },
});
const Book = mongoose.model("Book", bookSchema);

// Set virtual "FullTitle"
bookSchema.virtual("fullTitle").get(function () {
  return `${this.title} By ${this.author}`;
});

bookSchema.virtual("totalBooks").get(async function () {
  const authorBooks = await Book.find({ author: this.id });
  console.log(authorBooks);
});

export default Book;
