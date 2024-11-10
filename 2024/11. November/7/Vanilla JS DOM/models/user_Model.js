import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: Number, required: true },
});

export default mongoose.model("User", userSchema);
