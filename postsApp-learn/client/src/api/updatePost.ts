import axios from "axios";

const updatePost = async ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) => {
  const response = await axios.put(`http://localhost:3000/api/posts/${id}`, {
    title,
    content,
  });
  return response.data;
};

export default updatePost;
