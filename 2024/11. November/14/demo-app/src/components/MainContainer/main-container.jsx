import React from "react";

//Components import
import Head from "./Head/Head";
import Recipe from "./Recipe/Recipe";

//Import CSS
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      Hello To Main container!
      <Head />
      <Recipe />
    </div>
  );
};

export default MainContainer;
