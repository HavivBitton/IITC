const Post = require("../models/postModel.js");

// Add Post
async function addPost(req, res, next) {
  try {
    const { title, content } = req.body;

    const post = new Post({
      title,
      content,
    });

    const response = await post.save();
    res.json({ postId: response.id });
  } catch (error) {
    next(error);
  }
}
// Delete Post
async function deletePostByID(req, res, next) {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    next(error);
  }
}

// Get All Posts
async function getAllPosts(req, res, next) {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const posts = await Post.find().limit(limit);

    res.json(posts);
  } catch (error) {
    next(error);
  }
}

//Get Post by ID
async function getPostById(req, res, next) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
}

// Update post by ID
async function updatePost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Post updated successfully", post });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
}

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  deletePostByID,
  updatePost,
};
