import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Counter from "./Components/Counter.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        luter
        <Counter />
      </Provider>
    </>
  );
}

export default App;
