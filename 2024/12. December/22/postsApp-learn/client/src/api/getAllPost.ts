import axios from "axios";
import { Post } from "../types.ts";

const getAllPosts = async () => {
  try {
    const response = await axios.get<Post[]>(
      `http://localhost:3000/api/posts`,
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error during fetching API:`, error);
  }
};

export default getAllPosts;
