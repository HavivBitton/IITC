import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post } from "@/types";
import updatePost from "@/api/updatePost";
import getPostById from "@/api/getPostByID";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery<Post, Error>({
    queryKey: ["post", id],
    queryFn: () => getPostById(id!),
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      navigate("/");
    },
  });

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      mutation.mutate({ id: post!._id, title, content });
    }
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error fetching post data</span>;
  }

  return (
    <div className="m-8 flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Edit Post</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border rounded-md"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Updating..." : "Update Post"}
        </button>
        {mutation.isError && (
          <p className="text-red-500">Error: {mutation.error?.message}</p>
        )}
      </form>
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
      >
        Back to Posts Feed
      </button>
    </div>
  );
};

export default EditPostPage;
