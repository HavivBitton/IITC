import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({});

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(pokemon);

  return (
    <div>
      <p>{name}</p>
      <div>
        <h2>Abilities:</h2>
        {pokemon.abilities.map((ability) => (
          <span>{ability.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
