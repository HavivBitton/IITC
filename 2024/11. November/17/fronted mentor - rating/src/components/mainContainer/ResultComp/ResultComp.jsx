import "./ResultComp.css";

import tnxImg from "../../../images/illustration-thank-you.svg";

const ResultComp = (props) => {
  return (
    <div className="resultComp">
      <div id="tnxPicture">
        <img className="tnx-img" src={tnxImg} alt="tnx-img" />
      </div>
      <div className="rateMsg">
        <div id="rateMsg">You selected {props.userChoice} out of 5</div>
      </div>

      <h1>Thank you!</h1>
      <div className="tnxText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
};
export default ResultComp;
