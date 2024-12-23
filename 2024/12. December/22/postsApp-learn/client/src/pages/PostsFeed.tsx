// import AddPost from "../Components/AddPost";
import PostFeedDisplay from "@/Components/PostFeedDisplay.tsx";
import getAllPosts from "@/api/getAllPost";
import { Post } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const PostsFeed = () => {
  const queryClient = useQueryClient();

  // Queries
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);

  return (
    <div className="m-8 mt-[4em] flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Posts Feed
        </h1>
      </div>
      {isSuccess && data && data.length > 0 ? (
        data.map((post: Post) => <PostFeedDisplay key={post._id} post={post} />)
      ) : (
        <p className="text-gray-600">No posts available.</p>
      )}
    </div>
  );
};

export default PostsFeed;
