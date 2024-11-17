import React from "react";

//Import CSS
import "./Nutr.css";

const Nutr = () => {
  return (
    <div className="nutr">
      <h3>Nutrition</h3>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <p className="table">Calories</p>
      <span>277kcal</span>
      <hr />
      <p className="table">Carbs</p>
      <span>0g</span>
      <hr />
      <p className="table">Protein</p>
      <span>20g</span>
      <hr />
      <p className="table">Fat</p>
      <span>22g</span>
    </div>
  );
};

export default Nutr;
