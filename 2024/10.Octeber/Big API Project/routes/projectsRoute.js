import express from "express";
import { validateProject } from "../middleware/validator.js";
import {
  getAllProjects,
  getRandomProject,
  addNewProject,
  getProjectByID,
  editProjectByID,
  deleteProjectByID,
} from "../controllers/projectsController.js";

const router = express.Router();

// Get All Projects
router.get("/all", getAllProjects);

// Get one random project
router.get("/random", getRandomProject);

// Add new project
router.post("/", validateProject, addNewProject);

// Get project by ID
router.get(`/:id`, getProjectByID);

// Edit project by ID
router.patch("/:id", validateProject, editProjectByID);

// Delete project by id
router.delete("/:id", deleteProjectByID);

export default router;
