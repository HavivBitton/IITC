import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsFeed from "./pages/PostsFeed";
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsFeed />} />
          <Route path="/addPost" element={<AddPostPage />} />
          <Route path="/editPost/:id" element={<EditPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
