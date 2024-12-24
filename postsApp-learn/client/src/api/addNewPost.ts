import axios from "axios";

// Function to add a new post
async function addNewPost(post: { title: string; content: string }) {
  const response = await axios.post(`http://localhost:3000/api/posts`, post);
  return response.data;
}

export default addNewPost;
