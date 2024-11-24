// Import CSS
import styles from "./DetailsContainer.module.css";

//Import Components
import PokemonAbout from "../DetailsMenus/DetailsMenu/PokemonAbout/PokemonAbout";
import PokemonStats from "../DetailsMenus/PokemonStats/PokemonStats";

const DetailsContainer = ({ value, pokemon }) => {
  if (value === 0) {
    return <PokemonAbout pokemon={pokemon} />;
  }
  if (value === 1) {
    return <PokemonStats stats={pokemon.stats} />;
  }
};

export default DetailsContainer;
