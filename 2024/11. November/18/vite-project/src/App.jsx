import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Imprt Components
// import Button from "./components/Button.jsx";
// import Card from "./components/Card.jsx";
// import Modal from "./components/model.jsx";
// import Layout from "./components/Layout.jsx";
import Pokeball from "./components/Pokeball.jsx";

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
  const [isOpen, setOpen] = useState(true);
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
      {/* <div className="card">
        <Button setCount={setCount}>
          <span>count is {count}</span>
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Card>
          <h2>Title</h2>
          <p>This is some content inside the card.</p>
        </Card>
        <div>
          {isOpen ? (
            <Modal isOpen={true}>
              <h2>Modal Title</h2>
              <p>This is the modal content.</p>
            </Modal>
          ) : (
            <h1>empty</h1>
          )}
        </div>
        <Layout>
          <h1>Page Title</h1>
          <p>This is the main content of the page.</p>
        </Layout>
      </div>
      <ul className="read-the-docs">{usersLi}</ul> */}
      <Pokeball />
    </>
  );
}

export default App;
