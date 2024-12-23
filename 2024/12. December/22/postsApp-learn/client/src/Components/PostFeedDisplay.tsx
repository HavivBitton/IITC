import { Post } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deletePostByID from "@/api/deletePostByID";

interface PostProps {
  post: Post;
}

const PostFeedDisplay: React.FC<PostProps> = ({ post }) => {
  const queryClient = useQueryClient();

  // Mutation for deleting a post
  const mutation = useMutation<void, Error, string>({
    mutationFn: (id) => deletePostByID(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refresh posts after successful deletion
    },
  });

  const handleClick = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg mb-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 text-lg">{post.content}</p>
      <button
        onClick={() => handleClick(post._id)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Post
      </button>
    </div>
  );
};

export default PostFeedDisplay;
