//Import Icon
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";

import styles from "./PokemonAbout.module.css";

const PokemonAbout = ({ pokemon }) => {
  return (
    <div>
      PokemonAbout
      <>
        <p>
          <HeightIcon />
          <span>Height</span>
          {pokemon.height}
        </p>
        <p>
          <ScaleIcon />
          <span>Weight</span>
          {pokemon.weight}
        </p>
        <ul className={styles.ul}>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name} className={styles.li}>
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default PokemonAbout;
