import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import InsightsIcon from "@mui/icons-material/Insights";

//Import Components
import DetailsContainer from "../../DetailsContainer/DetailsContainer";

const DetailsMenu = ({ pokemon }) => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="About"
            icon={<CatchingPokemonIcon />}
          />
          <BottomNavigationAction label="Base Stats" icon={<InsightsIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      <DetailsContainer value={value} pokemon={pokemon} />
    </>
  );
};

export default DetailsMenu;
