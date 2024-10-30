import express from "express";
import fs from "fs";
import { validateProject } from "../middleware/validator.js";

// Dummy DB Import
// import projects from "../db/projects.json" assert { type: "json" };

const router = express.Router();

// Get random projects
router.get(`/random`, (req, res) => {
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  res.send(randomProject);
});

// Get projects bu ID
router.get(`/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = projects.find((project) => project.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new projects
router.post(`/`, validateProject, (req, res) => {
  let newProject = {
    id: projects.length + 1,
    name: req.body.name,
    description: req.body.description,
    deadline: req.body.deadline,
  };
  projects.push(newProject);
  updateProjectsDB(newProject.id);
  res.send(`The project "${newProject.name}" is on id ${newProject.id}`);
});

//Edit project by id
router.patch(`/:id`, (req, res) => {
  const id = +req.params.id;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex !== -1) {
    projects[projectIndex].name = req.body.name;
    projects[projectIndex].description = req.body.description;
    projects[projectIndex].deadline = req.body.deadline;
    updateProjectsDB(projectIndex);
  } else {
    res.send({ error: "Project not found" });
  }
});

//Delete project by id
router.delete(`/:id`, (req, res) => {
  const id = +req.params.id;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    updateProjectsDB(projectIndex);
  } else {
    res.send({ error: "Projects not found" });
  }
});

function updateProjectsDB(projectIndex) {
  fs.writeFile(
    "./db/projects.json",
    JSON.stringify(projects, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing to file");
        console.log({ error: "Failed to save the project" });
      } else {
        console
          .log
          // `The projects with id ${projectIndex} is now updated to: ${JSON.stringify(
          //   projects[projectIndex],
          //   null,
          //   2
          // )}`
          ();
      }
    }
  );
}

export default router;
