import express from "express";
// import { validateUser } from "../middleware/validator.js";

// Import User Model
import User from "../models/userModel.js";

const router = express.Router();

// Get All users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send({
        message: "add some user",
      });
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
});

// Get one random user
router.get("/random", async (req, res) => {
  try {
    const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);

    if (randomUser.length > 0) {
      res.status(200).send(randomUser[0]);
    } else {
      res.status(404).send({ error: "No users found" });
    }
  } catch (err) {
    console.error("Error fetching random user:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Add new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
    });

    const savedUser = await newUser.save();
    res.status(201).send({ msg: "User added successfully!", savedUser });
  } catch (err) {
    console.error("Error adding new user:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Get user by ID
router.get(`/:id`, async (req, res) => {
  const id = req.params[`id`];

  try {
    const user = await User.findById(id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Edit user by ID
router.patch("/:id", async (req, res) => {
  const id = req.params["id"];
  const updatedData = { name: req.body.name };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedUser) {
      res.status(200).send({ msg: "User Changed successfully!", updatedUser });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error updating user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Delete user by id
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).send({ msg: "User deleted successfully", deletedUser });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error deleting user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

export default router;
