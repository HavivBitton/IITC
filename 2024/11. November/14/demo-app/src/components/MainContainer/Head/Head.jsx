import React from "react";

//Components import
import Intro from "./Intro/Intro";
import PreTime from "./PreTime/PreTime";

//Import CSS
import "./Head.css";

const Head = () => {
  return (
    <div className="head">
      <Intro />
      <PreTime />
    </div>
  );
};

export default Head;
