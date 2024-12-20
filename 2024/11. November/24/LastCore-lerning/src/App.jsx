import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Components
import Home from "./pages/Home";
import SignInPage from "./pages/SignInpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
