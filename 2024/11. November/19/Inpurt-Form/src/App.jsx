import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [ability, setAbility] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };

  const addPokemon = (e) => {
    e.preventDefault();

    console.log({
      pokemon: {
        name,
        ability,
      },
    });
  };

  return (
    <>
      <form onSubmit={addPokemon}>
        <h1>Add A Pokemon</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            type="text"
            name="input"
            id="input"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="ability">Ability:</label>
          <input
            value={ability}
            type="text"
            name="input"
            id="input"
            onChange={(e) => {
              setAbility(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="type"></label>
        </div>
        <button>add pokemon</button>
      </form>
    </>
  );
}

export default App;
