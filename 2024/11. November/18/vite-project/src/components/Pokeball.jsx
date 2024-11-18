import axios from "axios";
import { useEffect, useState } from "react";

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
        {pokemons.map((pokemon, index) => {
          return (
            <li key={`pokemon-${index}`}>
              <p>{pokemon.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pokeball;
