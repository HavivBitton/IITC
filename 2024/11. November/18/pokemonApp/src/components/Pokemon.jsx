import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Pokemon.module.css";

const Pokemon = ({ name, url, setPokemonPage }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendPokemonNumber = () => {
    setPokemonPage(pokemon.order);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div
        className={`${styles.card} ${styles[pokemon.types[0].type.name]}`}
        onClick={sendPokemonNumber}
      >
        <h1 className={styles.title1}>{String(name).toUpperCase()}</h1>
        <div className={styles.cardBody}>
          <div className={styles.abilities}>
            <h2 className={styles.title2}>Abilities</h2>
            <ul className={styles.ul}>
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name} className={styles.li}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            // src={pokemon.sprites.other.showdown.front_default}
            alt={`${name} sprite`}
            className={styles.img}
          />
        </div>
      </div>
    )
  );
};

export default Pokemon;
