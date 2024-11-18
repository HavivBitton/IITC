import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "./Pokemon.jsx";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Pokemon name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokeball;
