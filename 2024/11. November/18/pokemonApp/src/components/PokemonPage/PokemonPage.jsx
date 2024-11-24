// Import route link
import { Link } from "react-router-dom";

// Import CSS
import styles from "./PokemonPage.module.css";

//Import Components
import DetailsMenu from "..//DetailsMenus/DetailsMenu/DetailsMenu";

const PokemonPage = ({ pokemon }) => {
  return (
    <div className={styles.PokemonPage}>
      <div className={`${styles.header} ${styles[pokemon.types[0].type.name]}`}>
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </div>
      <div className={styles.detailsMenu}>
        <DetailsMenu pokemon={pokemon} />
      </div>
      <Link to={`/`}>
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default PokemonPage;
