import axios from "axios";
import { useEffect, useState } from "react";
// import AddPost from "../Components/AddPost";
import { Post } from "../types.ts";
import PostFeedDisplay from "@/Components/PostFeedDisplay.tsx";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(
        `http://localhost:3000/api/posts?limit`,
        { withCredentials: true }
      );
      setPostsData((prevPosts) => {
        const newPosts = response.data.filter(
          (post) =>
            !prevPosts.some((existingPost) => existingPost._id === post._id)
        );
        return [...prevPosts, ...newPosts];
      });
    } catch (error) {
      console.error(`Error during fetching API:`, error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // const handlePostAdded = (newPost: Post) => {
  //   setPostsData((prevPosts) => [newPost, ...prevPosts]);
  // };

  return (
    <div className="m-8 mt-[4em] flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Posts Feed{" "}
        </h1>

        {/* <AddPost onPostAdded={handlePostAdded} /> */}
      </div>
      {postsData
        .slice()
        .reverse()
        .map((post) => (
          <PostFeedDisplay key={post._id} post={post} />
        ))}
    </div>
  );
};

export default PostsFeed;
