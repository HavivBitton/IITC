import styles from "./PokemonAbilities.module.css";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const PokemonAbilities = ({ pokemon }) => {
  return (
    <div>
      <div className={styles.abilitiesUl}>
        {pokemon.abilities.map((ability) => (
          <div className={styles.abilitiesLi}>
            <AutoAwesomeIcon sx={{ fontSize: 40 }} />
            <p key={ability.ability.name} className={styles.li}>
              {ability.ability.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
