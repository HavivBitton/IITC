import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: [1, "The rating mast be qual or bigger then 1"],
    max: [5, "The rating mast be qual or smaller then 5"],
  },
  comment: {
    type: String,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    require: true,
  },
  updateAt: {
    type: String,
  },
});

reviewSchema.pre("save", function (next) {
  this.updateAt = Date.now();
  next();
});
const Review = mongoose.model("Review", reviewSchema);

export default Review;
