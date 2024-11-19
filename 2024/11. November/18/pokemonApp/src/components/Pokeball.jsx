import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Pokeball.module.css";

import Pokemon from "./Pokemon.jsx";
import PokemonPage from "./PokemonPage.jsx";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPage, setPokemonPage] = useState(null);

  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0"
      );
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.pokemonListDiv}>
      {pokemons.map((pokemon) => (
        <>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            setPokemonPage={setPokemonPage}
          />
        </>
      ))}
    </div>
  );
};

export default Pokeball;

{
  /* <div className={style.pokemonListDiv}>
{pokemonPage ? (
  <PokemonPage pokemonNumber={pokemonPage} />
) : (
  pokemons.map((pokemon) => (
    <>
      <Pokemon
        name={pokemon.name}
        url={pokemon.url}
        setPokemonPage={setPokemonPage}
      />
    </>
  ))
)}
</div> */
}
