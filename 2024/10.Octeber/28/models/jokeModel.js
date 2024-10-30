import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Joke", jokeSchema);
