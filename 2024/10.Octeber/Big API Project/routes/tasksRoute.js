import express from "express";
import { validateTask } from "../middleware/validator.js";
import {
  getAllTasks,
  getRandomTask,
  addNewTask,
  getTaskByID,
  editTaskByID,
  deleteTaskByID,
} from "../controllers/tasksController.js";

const router = express.Router();

// Get All Tasks
router.get("/all", getAllTasks);

// Get one random tasks
router.get("/random", getRandomTask);

// Add new task
router.post("/", validateTask, addNewTask);

// Get task by ID
router.get(`/:id`, getTaskByID);

// Edit task by ID
router.patch("/:id", validateTask, editTaskByID);

// Delete task by id
router.delete("/:id", deleteTaskByID);

export default router;
