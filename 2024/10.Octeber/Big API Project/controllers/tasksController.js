// Import Product Model
import Task from "../models/taskModel.js";

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (tasks.length === 0) {
      res.send({
        message: "add some Tasks ",
      });
    } else {
      res.send(tasks);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
};

// Get one random Task
export const getRandomTask = async (req, res) => {
  try {
    const randomTask = await Task.aggregate([{ $sample: { size: 1 } }]);

    if (randomTask.length > 0) {
      res.status(200).send(randomTask[0]);
    } else {
      res.status(404).send({ error: "No tasks found" });
    }
  } catch (err) {
    console.error("Error fetching random task:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Add new Task
export const addNewTask = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      projectId: req.body.projectId,
      status: req.body.status,
    });

    const savedTasks = await newTask.save();
    res.status(201).send({ msg: "Task added successfully!", savedTasks });
  } catch (err) {
    console.error("Error adding new task:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get Task by ID
export const getTaskByID = async (req, res) => {
  const id = req.params[`id`];

  try {
    const task = await Task.findById(id);
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } catch (err) {
    console.error("Error fetching task by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Edit Task by ID
export const editTaskByID = async (req, res) => {
  const id = req.params["id"];
  const updatedData = {
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId,
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedTask) {
      res.status(200).send({ msg: "Task Changed successfully!", updatedTask });
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } catch (err) {
    console.error("Error updating task by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Delete Task by id
export const deleteTaskByID = async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (deletedTask) {
      res.status(200).send({ msg: "Task deleted successfully", deletedTask });
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } catch (err) {
    console.error("Error deleting task by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};
