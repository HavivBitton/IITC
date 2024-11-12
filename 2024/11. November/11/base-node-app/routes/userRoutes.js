const express = require("express");
const {
  getAllUsers,
  getRandomUser,
  addNewUser,
  getUserByID,
  editUserByID,
  deleteUserByID,
} = require("../controllers/userController.js");
const { validateUser } = require("../middleware/validator.js");

const router = express.Router();

// Get All Users
router.get("/all", getAllUsers);

// Get one random user
router.get("/random", getRandomUser);

// Add new user
router.post("/", validateUser, addNewUser);

// Get user by ID
router.get(`/:id`, getUserByID);

// Edit user by ID
router.patch("/:id", editUserByID);

// Delete user by id
router.delete("/:id", deleteUserByID);

module.exports = router;
