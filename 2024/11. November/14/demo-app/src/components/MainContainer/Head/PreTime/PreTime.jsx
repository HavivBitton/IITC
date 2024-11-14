import React from "react";

//Import CSS
import "./PreTime.css";

const PreTime = () => {
  return (
    <div className="PreTime">
      <p className="preTime-title">Preparation time</p>
      <ul>
        <li>Total: Approximately 10 minutes</li>
        <li>Preparation: 5 minutes</li>
        <li>Cooking: 5 minutes</li>
      </ul>
    </div>
  );
};

export default PreTime;
