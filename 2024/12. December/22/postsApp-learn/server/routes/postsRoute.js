const express = require("express");
const {
  addPost,
  getAllPosts,
  getPostById,
  deletePostByID,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:id", getPostById);

router.delete("/:id", deletePostByID);

module.exports = router;
