// import { utils } from "./utils.js";

// const COSTUMER_STOREGE_KEY = "costumer";

// let gCostumerList = utils.getFromStorage(COSTUMER_STOREGE_KEY);

// Define code
const demoCode = 1234;

// Get elements from the DOM
const elCodeForm = document.querySelector("#codeForm");
const elCodeMessage = document.querySelector("#codeMessage");
const elNavMenu = document.querySelector("#nav-menu");

// Add event listener to the form
elCodeForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  elCodeMessage.classList.remove("correct", "incorrect");

  const elInputCode = document.querySelector("#pinCode");

  //Validates the entered code and displays an appropriate message
  if (elInputCode.value == demoCode) {
    elCodeMessage.textContent = "correct code";
    elCodeMessage.classList.add("correct");
    elNavMenu.classList.remove("hide");
  } else {
    elCodeMessage.textContent = "incorrect code";
    elCodeMessage.classList.add("incorrect");
    elNavMenu.classList.add("hide");
  }
});

// Shoe balance button
//
// Define balance
const demoBalance = 10000;

// Get elements from the DOM
const elBalance = document.querySelector("#balance");
const elBalanceBtn = document.querySelector("#balanceButton");

// Add event listener to the button
elBalanceBtn.addEventListener("click", function () {
  ShowBalance();
});

// Function to display balance
function ShowBalance() {
  elBalance.textContent = `Your balance is ${demoBalance}`;
  elBalance.classList.remove("hide");
}

//
// Get elements from the DOM
const elDepositBtn = document.querySelector("#DepositButton");
