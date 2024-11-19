import axios from "axios";
import { useEffect, useState } from "react";
import CSSstyle from "./Pokeball.module.css";

// Import from MUI
import { Box, Modal } from "@mui/material";

//Import Components
import Pokemon from "./Pokemon.jsx";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [open, setOpen] = useState(false);

  // Import data from API
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

  const toggle = () => {
    setOpen((open) => !open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={CSSstyle.pokemonListDiv}>
      {pokemons.map((pokemon) => (
        <div onClick={toggle} key={pokemon.name}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>
      ))}
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={toggle}>its work</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Pokeball;
