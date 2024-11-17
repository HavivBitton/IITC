import "./RateComp.css";

import starIcon from "../../../images/icon-star.svg";

const RateComp = (props) => {
  const updateChoice = (e) => {
    props.updateFunction(+e.target.innerText);
    props.setDidUserSubmit(true);
  };
  return (
    <div className="rateComp">
      <div id="star" className="circle">
        <img className="icon-star" src={starIcon} alt="icon-star" />
      </div>
      <h1>How did we do?</h1>
      <div className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className="ratingBtn">
        <button className="circle" onClick={updateChoice}>
          1
        </button>
        <button className="circle" onClick={updateChoice}>
          2
        </button>
        <button className="circle" onClick={updateChoice}>
          3
        </button>
        <button className="circle" onClick={updateChoice}>
          4
        </button>
        <button className="circle" onClick={updateChoice}>
          5
        </button>
      </div>

      <button className="submitBtn">SUBMIT</button>
    </div>
  );
};

export default RateComp;
