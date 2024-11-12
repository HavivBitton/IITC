const express = require("express");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Get All Users
router.get("/all", getAllUsers);
