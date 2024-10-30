import express from "express";
import fs from "fs";
import { validateTask } from "../middleware/validator.js";

// Dummy DB Import
// import tasks from "../db/tasks.json" assert { type: "json" };

const router = express.Router();

// Get random tasks
router.get(`/random`, (req, res) => {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  res.send(
    `The product is ${randomTask.name} and his price is ${randomTask.price}`
  );
});

// Get task bu ID
router.get(`/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = tasks.find((task) => task.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new task
router.post(`/`, validateTask, (req, res) => {
  let newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId,
    status: req.body.status,
  };
  tasks.push(newTask);
  updateProductDB(newTask.id);
  res.send(`The product " ${newTask.title} " is in new in id ${newTask.id}.`);
});

//Edit task by id
router.patch(`/:id`, (req, res) => {
  const id = +req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].title = req.body.title;
    tasks[taskIndex].description = req.body.description;
    tasks[taskIndex].projectId = req.body.projectId;
    tasks[taskIndex].status = req.body.status;
    updateProductDB(taskIndex);
  } else {
    res.send({ error: "task not found" });
  }
});

//Delete task by id
router.delete(`/:id`, (req, res) => {
  const id = +req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    updateProductDB(taskIndex);
  } else {
    res.send({ error: "Task not found" });
  }
});

function updateProductDB(taskIndex) {
  fs.writeFile("../db/task.json", JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file");
      res.send({ error: "Failed to update the task" });
    } else {
      res.send(
        `The task with id ${taskIndex} is now updated to: ${tasks[taskIndex]} `
      );
    }
  });
}

export default router;
