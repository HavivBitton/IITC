// Define code
const demoCode = 1234;

// Get elements from the DOM
const elCodeForm = document.querySelector("#codeForm");
const elCodeMessage = document.querySelector("#codeMessage");
const elNavMenu = document.querySelector("#nav-menu");
const elExit = document.querySelector("#exit");
let wrongAttempts = 0;

// Add event listener to the form
elCodeForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  elCodeMessage.classList.remove("correct", "incorrect");

  const elInputCode = document.querySelector("#pinCode");
  const value = elInputCode.value;
  //Validates the entered code and displays an appropriate message
  CodeVerification(value);

  elInputCode.value = "";
});

function CodeVerification(value) {
  if (value == demoCode) {
    elCodeMessage.textContent = "Correct code!";
    elCodeMessage.classList.add("correct");
    elNavMenu.classList.remove("hide");
    elCodeForm.classList.add("hide");
  } else {
    elCodeMessage.classList.add("incorrect");
    elNavMenu.classList.add("hide");
    wrongAttempts++;
    if (wrongAttempts === 1) {
      elCodeMessage.textContent = "Incorrect code, Try again";
    } else if (wrongAttempts === 2) {
      elCodeMessage.textContent =
        "Incorrect code again,You have one more try before you block";
    } else if (wrongAttempts === 3) {
      elCodeMessage.textContent =
        "Incorrect code for the third time, your user is blocked";
      elCodeForm.classList.add("hide");
      elExit.classList.remove("hide");
    }
  }
}

// Shoe balance button
//
// Define balance
let demoBalance = 10000;

// Get elements from the DOM
const elBalance = document.querySelector("#balance");
const elBalanceBtn = document.querySelector("#balanceButton");

// Add event listener to the button
elBalanceBtn.addEventListener("click", function () {
  ShowBalance();
});

//
// Get elements from the DOM
const elActionBtn = document.querySelector("#actionButton");
const elActionForm = document.querySelector("#actionForm");
const elActionInput = document.querySelector("#actionInput");
const elActionMsg = document.querySelector("#depositMessage");
const elDepositBtn = document.querySelector("#depositBtn");
const elWithdrawalBtn = document.querySelector("#withdrawalBtn");
const elDepositAgainBtn = document.querySelector("#depositAgainButton");

// Add event listener to the action button
elActionBtn.addEventListener("click", function () {
  // show the deposit form
  elActionForm.classList.remove("hide");
  //Hide the balance message
  elBalance.classList.add("hide");
});

// Add event listener to the deposit submit button
elActionForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

// Add event listener to the deposit button
elDepositBtn.addEventListener("click", function () {
  // Hide the deposit form
  elActionForm.classList.add("hide");
  // Add the input to the balance variable
  demoBalance += parseInt(elActionInput.value);
  //Display the deposit message and the current balance
  elActionMsg.textContent = `You entered: ${elActionInput.value}$`;
  elActionMsg.classList.remove("hide");
  elActionInput.value = "";
  ShowBalance();
  // Display the `deposit again` button
  elDepositAgainBtn.classList.remove("hide");
});

// Add event listener to the withdrawal button
elWithdrawalBtn.addEventListener("click", function () {
  // Hide the action form
  elActionForm.classList.add("hide");

  if (demoBalance >= parseInt(elActionInput.value)) {
    // Add the input to the balance variable
    demoBalance -= parseInt(elActionInput.value);
    //Display the deposit message and the current balance
    elActionMsg.textContent = `The amount you withdrew from the account ${elActionInput.value}$`;
    elActionMsg.classList.remove("hide");
    ShowBalance();
  } else {
    elActionMsg.textContent = `Your balance does not allow withdrawal ${elActionInput.value}$`;
    elActionMsg.classList.remove("hide");
    ShowBalance();
  }
  elActionInput.value = "";
  // Display the `deposit again` button
  elDepositAgainBtn.classList.remove("hide");
});

elDepositAgainBtn.addEventListener("click", function () {
  // Display the deposit form again
  elActionForm.classList.remove("hide");
  //Hide the deposit message and the current balance
  elActionMsg.classList.add("hide");
  elBalance.classList.add("hide");
  // Hide the `deposit again` button
  elDepositAgainBtn.classList.add("hide");
});

// Function to display balance
function ShowBalance() {
  elBalance.textContent = `Your balance is ${demoBalance}$`;
  elBalance.classList.remove("hide");
  // Hide the action form
  elActionForm.classList.add("hide");
}
