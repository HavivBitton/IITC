import express from "express";
import { validateUser } from "../middleware/validator.js";
import {
  getAllUsers,
  getRandomUser,
  addNewUser,
  getUserByID,
  editUserByID,
  deleteUserByID,
} from "../controllers/usersControllers";

const router = express.Router();

// Get All users
router.get("/all", getAllUsers);

// Get one random user
router.get("/random", getRandomUser);

// Add new user
router.post("/", validateUser, addNewUser);

// Get user by ID
router.get(`/:id`, getUserByID);

// Edit user by ID
router.patch("/:id", validateUser, editUserByID);

// Delete user by id
router.delete("/:id", deleteUserByID);

export default router;
