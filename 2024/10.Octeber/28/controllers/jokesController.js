import Joke from "../models/jokeModel.js";

// Get All Jokes
export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find({});
    if (jokes.length === 0) {
      res.send({
        message: "add some joke",
      });
    } else {
      res.send(jokes);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
};

// Get one random joke
export const getRandomJokes = async (req, res) => {
  try {
    const randomJoke = await Joke.aggregate([{ $sample: { size: 1 } }]);

    if (randomJoke.length > 0) {
      res.status(200).send(randomJoke[0]);
    } else {
      res.status(404).send({ error: "No jokes found" });
    }
  } catch (err) {
    console.error("Error fetching random joke:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Add new joke
export const addNewJoke = async (req, res) => {
  try {
    const newJoke = new Joke({
      joke: req.body.joke,
    });

    const savedJoke = await newJoke.save();
    res.status(201).send({ msg: "Joke added successfully!", savedJoke });
  } catch (err) {
    console.error("Error adding new joke:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get joke by ID
export const getJokeByID = async (req, res) => {
  const id = req.params[`id`];

  try {
    const joke = await Joke.findById(id);
    if (joke) {
      res.status(200).send(joke);
    } else {
      res.status(404).send({ error: "Joke not found" });
    }
  } catch (err) {
    console.error("Error fetching joke by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Edit joke by ID
export const editJokeByID = async (req, res) => {
  const id = req.params["id"];
  const updatedData = { joke: req.body.joke };

  try {
    const updatedJoke = await Joke.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedJoke) {
      res.status(200).send(updatedJoke);
    } else {
      res.status(404).send({ error: "Joke not found" });
    }
  } catch (err) {
    console.error("Error updating joke by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Delete joke by id
export const deleteJokeByID = async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedJoke = await Joke.findByIdAndDelete(id);

    if (deletedJoke) {
      res.status(200).send({ msg: "Joke deleted successfully", deletedJoke });
    } else {
      res.status(404).send({ error: "Joke not found" });
    }
  } catch (err) {
    console.error("Error deleting joke by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};
