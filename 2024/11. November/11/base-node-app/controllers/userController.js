const { userModel } = require("../models/userModel.js");

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) {
      res.send({
        message: "No user found, add some user!s ",
      });
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
};

// Get one random User
const getRandomUser = async (req, res) => {
  try {
    const randomUser = await userModel.aggregate([{ $sample: { size: 1 } }]);

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
const addNewUser = async (req, res) => {
  try {
    const { fName, lName, phoneNumber, email, password } = req.body;

    const newUser = new userModel({
      fName,
      lName,
      phoneNumber,
      email,
      password,
    });

    await newUser.save();

    res
      .status(201)
      .send({ message: "User added successfully!", data: newUser });
  } catch (err) {
    console.error(err);
    if (err?.errorResponse?.code === 11000) {
      return res.status(400).send({
        status: "Failed",
        message: "User already exists",
      });
    }
    res.status(500).send({ error: "Server error" });
  }
};

// Get User by ID
const getUserByID = async (req, res) => {
  const id = req.params[`id`];
  try {
    const user = await userModel.findById(id);
    if (user) {
      res.status(200).send(user.fullName);
    } else {
      res.status(404).send({ error: `The user with id: ${id} is not found` });
    }
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Edit User by ID
const editUserByID = async (req, res) => {
  const id = req.params["id"];
  const { fName, lName, phoneNumber, email, password, role } = req.body;
  const updatedData = {
    fName,
    lName,
    phoneNumber,
    email,
    password,
    role,
  };
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedUser) {
      res.status(200).send({ msg: "User Changed successfully!", updatedUser });
    } else {
      res.status(404).send({ error: `The user with id: ${id} is not found` });
    }
  } catch (err) {
    console.error("Error updating user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Delete User by id
const deleteUserByID = async (req, res) => {
  const id = req.params["id"];
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).send({ msg: "User deleted successfully", deletedUser });
    } else {
      res.status(404).send({ error: `The user with id: ${id} is not found` });
    }
  } catch (err) {
    console.error("Error deleting user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = {
  getAllUsers,
  getRandomUser,
  addNewUser,
  getUserByID,
  editUserByID,
  deleteUserByID,
};
