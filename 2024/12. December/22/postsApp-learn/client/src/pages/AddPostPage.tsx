import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // Import the hook
import addNewPost from "@/api/addNewPost";

const AddPostPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // Initialize the hook
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: addNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setTitle("");
      setContent("");
      alert("Post added successfully!");
      navigate("/"); // Navigate back to posts feed after success
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      mutation.mutate({ title, content });
    }
  };

  return (
    <div className="m-8 flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Add a New Post</h1>
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
          {mutation.isLoading ? "Adding..." : "Add Post"}
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

export default AddPostPage;
