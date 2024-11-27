import "./App.css";

//Import Components
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Redux cart (with toolkit)</h1>
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default App;
