import express from "express";
// import { validateProject } from "../middleware/validator.js";

// Import Product Model
import Project from "../models/projectsModel.js";

const router = express.Router();

// Get All Projects
router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find({});
    if (projects.length === 0) {
      res.send({
        message: "add some project ",
      });
    } else {
      res.send(projects);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
});

// Get one random project
router.get("/random", async (req, res) => {
  try {
    const randomProject = await Project.aggregate([{ $sample: { size: 1 } }]);

    if (randomProject.length > 0) {
      res.status(200).send(randomProject[0]);
    } else {
      res.status(404).send({ error: "No projects found" });
    }
  } catch (err) {
    console.error("Error fetching random project:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Add new project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project({
      name: req.body.name,
      description: req.body.description,
      deadline: req.body.deadline,
    });

    const savedProject = await newProject.save();
    res.status(201).send({ msg: "Project added successfully!", savedProject });
  } catch (err) {
    console.error("Error adding new project:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Get project by ID
router.get(`/:id`, async (req, res) => {
  const id = req.params[`id`];

  try {
    const project = await Project.findById(id);
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send({ error: "Project not found" });
    }
  } catch (err) {
    console.error("Error fetching project by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Edit project by ID
router.patch("/:id", async (req, res) => {
  const id = req.params["id"];
  const updatedData = {
    name: req.body.name,
    description: req.body.description,
    deadline: req.body.deadline,
  };

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedProject) {
      res
        .status(200)
        .send({ msg: "Project Changed successfully!", updatedProject });
    } else {
      res.status(404).send({ error: "Project not found" });
    }
  } catch (err) {
    console.error("Error updating project by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Delete project by id
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedProject = await Project.findByIdAndDelete(id);

    if (deletedProject) {
      res
        .status(200)
        .send({ msg: "Project deleted successfully", deletedProject });
    } else {
      res.status(404).send({ error: "Project not found" });
    }
  } catch (err) {
    console.error("Error deleting project by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

export default router;
