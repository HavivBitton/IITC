import axios from "axios";

const getAllPosts = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/posts`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error during fetching API:`, error);
  }
};

export default getAllPosts;
