import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Import Page
import Home from "./pages/Home/homeIndex";
import About from "./pages/About/aboutIndex";
import Dashboard from "./pages/Dashboard/dashboardIndex";
import Articles from "./pages/Articles/Articles";
import Tech from "./components/Tech/Tech";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Articles" element={<Articles />}>
            <Route path="news" element={<h1>This is News Section</h1>} />
            <Route path="politics" element={<h1>This is News politics</h1>} />
            <Route path="tech/:id" element={<Tech />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
