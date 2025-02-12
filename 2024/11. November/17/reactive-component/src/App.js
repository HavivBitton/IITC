import React, { useState } from "react";

import FormComp from "./components/FormComp/FormComp";
import ResultComp from "./components/ResultComp/ResultComp";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="App">
      Choose a Number
      {didUserSubmit ? (
        <ResultComp userChoice={userChoice} />
      ) : (
        <FormComp
          updateFunction={setUserChoice}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>
  );
}

export default App;
