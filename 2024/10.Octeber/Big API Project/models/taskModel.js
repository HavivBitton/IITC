import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectId: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["in-progress", "completed", "not-started"], // Enum validation
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Tasks", taskSchema);
