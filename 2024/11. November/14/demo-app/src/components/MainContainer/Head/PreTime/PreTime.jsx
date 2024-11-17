import React from "react";

//Import CSS
import "./PreTime.css";

const PreTime = () => {
  return (
    <div className="PreTime">
      <p className="preTime-title">Preparation time</p>
      <ul>
        <li>
          <span>Total:</span> Approximately 10 minutes
        </li>
        <li>
          <span>Preparation</span>: 5 minutes
        </li>
        <li>
          <span>Cooking</span>: 5 minutes
        </li>
      </ul>
    </div>
  );
};

export default PreTime;
