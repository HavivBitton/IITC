import React, { useState } from "react";

import "./mainContainer.css";

// Import Components
import RateComp from "./RateComp/RateComp";
import ResultComp from "./ResultComp/ResultComp.jsx";

const MainContainer = () => {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="mainContainer">
      {didUserSubmit ? (
        <ResultComp userChoice={userChoice} />
      ) : (
        <RateComp
          updateFunction={setUserChoice}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>
  );
};
export default MainContainer;
