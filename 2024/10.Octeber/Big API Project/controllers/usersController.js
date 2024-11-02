// Import user Model
import User from "../models/userModel.js";

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send({
        message: "add some user ",
      });
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
};

// Get one random User
export const getRandomUser = async (req, res) => {
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
};

// Add new User
export const addNewUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    });

    const savedUser = await newUser.save();
    res.status(201).send({ msg: "User added successfully!", savedUser });
  } catch (err) {
    console.error("Error adding new user:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get User by ID
export const getUserByID = async (req, res) => {
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
};

// Edit User by ID
export const editUserByID = async (req, res) => {
  const id = req.params["id"];
  const updatedData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

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
};

// Delete User by id
export const deleteUserByID = async (req, res) => {
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
};
