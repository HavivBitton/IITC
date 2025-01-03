import React from "react";

//Import components
import Ingr from "./Ingr/Ingr";
import Inst from "./Inst/Inst";
import Nutr from "./Nutr/Nutr";

//Import CSS
import "./Recipe.css";

const Recipe = () => {
  return (
    <div className="recipe">
      <Ingr />
      <hr />
      <Inst />
      <hr />
      <Nutr />
    </div>
  );
};

export default Recipe;
