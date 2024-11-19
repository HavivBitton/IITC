import axios from "axios";
import { useEffect, useState } from "react";

import "./PokemonPage.css";

const PokemonPage = ({ pokemonNumber }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      );
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div className="title">
        its work with{pokemonNumber}
        {pokemon.name}
      </div>
    )
  );
};

export default PokemonPage;
