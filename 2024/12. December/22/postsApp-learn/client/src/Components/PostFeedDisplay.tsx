import { useNavigate } from "react-router-dom";
import { Post } from "@/types";

interface PostProps {
  post: Post;
}

const PostFeedDisplay: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg mb-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 text-lg">{post.content}</p>
      <button
        onClick={() => navigate(`/editPost/${post._id}`)}
        className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
      >
        Edit Post
      </button>
    </div>
  );
};

export default PostFeedDisplay;
