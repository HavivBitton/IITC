import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsFeed from "./pages/PostsFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsFeed />} />
          {/* <Route path="/post/:id" element={<PostPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
