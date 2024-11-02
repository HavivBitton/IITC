import express from "express";

import { validateJoke } from "../middleware/validator.js";

import {
  getAllJokes,
  getRandomJokes,
  addNewJoke,
  getJokeByID,
  editJokeByID,
  deleteJokeByID,
} from "../controllers/jokesController.js";

const router = express.Router();

// Get All Jokes
router.get("/all", getAllJokes);

// Get one random joke
router.get("/random", getRandomJokes);

// Add new joke
router.post("/", validateJoke, addNewJoke);

// Get joke by ID
router.get(`/:id`, getJokeByID);

// Edit joke by ID
router.patch("/:id", validateJoke, editJokeByID);

// Delete joke by id
router.delete("/:id", deleteJokeByID);

export default router;
