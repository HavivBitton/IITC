// import { utils } from "./utils.js";

// const COSTUMER_STOREGE_KEY = "costumer";

// let gCostumerList = utils.getFromStorage(COSTUMER_STOREGE_KEY);

const demoCode = 1234;

const elCodeForm = document.querySelector("#codeForm");
const elCodeMessage = document.querySelector("#codeMessage");

elCodeForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  elCodeMessage.classList.remove("correct", "incorrect");

  const elInputCode = document.querySelector("#pinCode");

  if (elInputCode.value == demoCode) {
    elCodeMessage.textContent = "correct code";
    elCodeMessage.classList.add("correct");
  } else {
    elCodeMessage.textContent = "incorrect code";
    elCodeMessage.classList.add("incorrect");
  }
});
