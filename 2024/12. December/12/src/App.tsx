import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Pages
import WelcomePage from "./pages/WelcomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import RecipeListPage from "./pages/RecipeListPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/RecipeDetailsPage" element={<RecipeDetailsPage />} />
          <Route path="/RecipeListPage" element={<RecipeListPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
