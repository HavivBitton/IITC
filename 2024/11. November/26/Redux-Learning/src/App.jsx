import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store/index.js";
import TodoList from "./Components/TodoList.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center", margin: "50px" }}>
          <h1>Redux To-Do List</h1>
          <TodoList />
        </div>
      </Provider>
    </>
  );
}

export default App;
