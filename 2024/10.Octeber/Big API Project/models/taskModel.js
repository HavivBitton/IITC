import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["In Progress", "Done", "To Do"],
    default: "To-Do",
  },
  dueDate: {
    type: Date,
  },
  projectId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Tasks", taskSchema);
