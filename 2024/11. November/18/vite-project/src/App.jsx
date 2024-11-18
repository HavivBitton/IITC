import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Imprt Components
import Button from "./components/Button.jsx";

const users = [
  { id: 1, name: "john doe", email: "john.doe@1example.com" },
  { id: 2, name: "john doe2", email: "john.doe2@example.com" },
  { id: 3, name: "john doe3", email: "john.doe@3example.com" },
];

function App() {
  const [count, setCount] = useState(0);
  const usersLi = users.map((user) => (
    <li key={`user-${user.id}`}>
      <p>{user.name}</p>
    </li>
  ));
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button setCount={setCount}>
          <span>count is {count}</span>
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ul className="read-the-docs">{usersLi}</ul>
    </>
  );
}

export default App;
