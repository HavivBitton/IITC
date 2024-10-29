import express from "express";
import fs from "fs";
import { validateUser } from "../middleware/validator.js";

// Dummy DB Import
import users from "../db/users.json" assert { type: "json" };

const router = express.Router();

// Get random users
router.get(`/random`, (req, res) => {
  const randomUsers = users[Math.floor(Math.random() * users.length)];
  res.send(randomUsers);
});

// Get users bu ID
router.get(`/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = users.find((user) => user.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new users
router.post(`/`, validateUser, (req, res) => {
  let newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  res.send(`The user " ${newUser.name} " is in new in id ${newUser.id}`);
});

//Edit user by id
router.patch(`/:id`, (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex].name = req.body.name;

    fs.writeFile("./db/users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file");
        res.send({ error: "Failed to update the user" });
      } else {
        res.send(
          `The user with id ${id} names is now updated to: ${req.body.name}`
        );
      }
    });
  } else {
    res.send({ error: "user not found" });
  }
});

export default router;
