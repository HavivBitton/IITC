import React from "react";

import img from "../../../../recipe-page-main/assets/images/image-omelette.jpeg";

//Import CSS
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <img className="omelette-img" src={img} alt="omelette-img" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};

export default Intro;
