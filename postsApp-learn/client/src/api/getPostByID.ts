import axios from "axios";
import { Post } from "@/types";

const getPostById = async (id: string): Promise<Post> => {
  const { data } = await axios.get(`http://localhost:3000/api/posts/${id}`);
  return data;
};

export default getPostById;
