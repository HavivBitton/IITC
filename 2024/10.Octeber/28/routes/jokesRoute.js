import express from "express";
import fs from "fs";
import { validateJoke } from "../middleware/validator.js";

// Dummy DB Import
import jokes from "../db/jokes.json" assert { type: "json" };

const router = express.Router();

// Get random jokes
router.get(`/random`, (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
});

// Get joke bu ID
router.get(`/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = jokes.find((joke) => joke.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new jokes
router.post(`/`, validateJoke, (req, res) => {
  let newJoke = {
    id: jokes.length + 1,
    joke: req.body.joke,
  };
  jokes.push(newJoke);
  updateDB();
  res.send(`The joke ${newJoke.joke} is in id ${newJoke.id}`);
});

//Edit joke by id
router.patch(`/:id`, (req, res) => {
  const id = +req.params.id;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);

  if (jokeIndex !== -1) {
    jokes[jokeIndex].joke = req.body.joke;
    updateDB();
  } else {
    res.send({ error: "Joke not found" });
  }
});

//Delete joke by id
router.delete(`/:id`, (req, res) => {
  const id = +req.params.id;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);

  if (jokeIndex !== -1) {
    jokes.splice(jokeIndex, 1);
    updateDB();
  } else {
    res.send({ error: "Joke not found" });
  }
});

function updateDB() {
  fs.writeFile("../db/jokes.json", JSON.stringify(jokes, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file");
      res.send({ error: "Failed to save the joke" });
    } else {
      res.send(`The joke with id ${id} is now updated to: ${req.body.joke}`);
    }
  });
}

export default router;
