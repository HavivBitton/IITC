import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["in-progress", "completed", "not-started"],
    default: "not-started",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Project", projectSchema);
