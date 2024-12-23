const express = require("express");
const {
  addPost,
  getAllPosts,
  getPostById,
  deletePostByID,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePostByID);

module.exports = router;
