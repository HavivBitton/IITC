// Define demo variable
const demoCode = 1234;
let demoBalance = 10000;

// Get elements from the DOM
// for the code page
const elCodeForm = document.querySelector("#codeForm");
const elCodeMessage = document.querySelector("#codeMessage");
const elNavMenu = document.querySelector("#nav-menu");
const elExit = document.querySelector("#exit");
const elInputCode = document.querySelector("#pinCode");
// for the menu page
const elBalance = document.querySelector("#balance");
const elBalanceBtn = document.querySelector("#balanceButton");
const elActionBtn = document.querySelector("#actionButton");
const elActionForm = document.querySelector("#actionForm");
const elActionInput = document.querySelector("#actionInput");
const elActionMsg = document.querySelector("#depositMessage");
const elDepositBtn = document.querySelector("#depositBtn");
const elWithdrawalBtn = document.querySelector("#withdrawalBtn");
const elBackBtn = document.querySelector("#backButton");

// Set a counter variable
let wrongAttempts = 0;

// Add event listener to the form
elCodeForm.addEventListener("submit", function (ev) {
  // Provide the page refresh
  ev.preventDefault();
  // Clean the message class list
  elCodeMessage.classList.remove("correct", "incorrect");

  const value = elInputCode.value;
  //Validates the entered code and displays an appropriate message
  CodeVerification(value);

  elInputCode.value = "";
});

function CodeVerification(value) {
  // Comparing the input to the demo code
  if (value == demoCode) {
    // Display a correct message
    elCodeMessage.textContent = "Correct code!";
    elCodeMessage.classList.add("correct");
    // Display an option menu
    elNavMenu.classList.remove("hide");
    elCodeForm.classList.add("hide");
  } else {
    // Display a incorrect message
    elCodeMessage.classList.add("incorrect");
    elNavMenu.classList.add("hide");
    //  Adding to counter variable
    wrongAttempts++;
    // Checks how many wrong attempts the user has made and reacts accordingly
    if (wrongAttempts === 1) {
      elCodeMessage.textContent = "Incorrect code, Try again";
    } else if (wrongAttempts === 2) {
      elCodeMessage.textContent =
        "Incorrect code again,You have one more try before you block";
    } else if (wrongAttempts === 3) {
      elCodeMessage.textContent =
        "Incorrect code for the third time, your user is blocked";
      // Prevents the user from trying again and redirects him back to the welcome page
      elCodeForm.classList.add("hide");
      elExit.classList.remove("hide");
    }
  }
}

// Add event listener to the `Shoe balance` button
elBalanceBtn.addEventListener("click", function () {
  ShowBalance();
});

// Add event listener to the actions button
elActionBtn.addEventListener("click", function () {
  // Show the deposit form
  elActionForm.classList.remove("hide");
  //Hide the balance message
  elBalance.classList.add("hide");
});

// Add event listener to the action form
elActionForm.addEventListener("submit", function (ev) {
  // Provide the page refresh
  ev.preventDefault();
});

// Add event listener to the deposit button
elDepositBtn.addEventListener("click", function () {
  //Check if the user do not enter value and display the ` No amount enter` message
  if (!elActionInput.value) {
    noAmountMessage();
    return;
  }
  // Hide the deposit form
  elActionForm.classList.add("hide");
  // Add the input to the balance variable
  demoBalance += parseInt(elActionInput.value);
  //Display the deposit message and the current balance
  elActionMsg.textContent = `You entered: ${elActionInput.value}$`;
  elActionMsg.classList.remove("hide");
  elActionInput.value = "";
  ShowBalance();
  // Display the `back menu` button
  elBackBtn.classList.remove("hide");
});

// Add event listener to the withdrawal button
elWithdrawalBtn.addEventListener("click", function () {
  //Check if the user do not enter value and display the ` No amount enter` message
  if (!elActionInput.value) {
    noAmountMessage();
    return;
  }
  // Hide the action form
  elActionForm.classList.add("hide");

  // Check if The withdrawal amount is multiple of 50
  if (parseInt(elActionInput.value) % 50 === 0) {
    // Check if The withdrawal amount is bigger then balance
    if (demoBalance >= parseInt(elActionInput.value)) {
      // Remove the input to the balance variable
      demoBalance -= parseInt(elActionInput.value);
      //Display the withdrawal message and the current balance
      elActionMsg.textContent = `The amount you withdrew from the account is ${elActionInput.value}$`;
      elActionMsg.classList.remove("hide");
      ShowBalance();
    } else {
      //Display `no enough balance` message and the current balance
      elActionMsg.textContent = `Your balance does not allow withdrawal ${elActionInput.value}$`;
      elActionMsg.classList.remove("hide");
      ShowBalance();
    }
  } else {
    //Display `must be a multiple of 50` message
    elActionMsg.textContent = `The withdrawal amount must be a multiple of 50`;
    elActionMsg.classList.remove("hide");
  }
  // Clear the input to the next try
  elActionInput.value = "";
  // Display the `deposit again` button
  elBackBtn.classList.remove("hide");
});

// // Add event listener to the `Back` button
elBackBtn.addEventListener("click", function () {
  // Display the deposit form again
  elActionForm.classList.remove("hide");
  //Hide the deposit message and the current balance
  elActionMsg.classList.add("hide");
  elBalance.classList.add("hide");
  // Hide the `deposit again` button
  elBackBtn.classList.add("hide");
});

// Function to display balance
function ShowBalance() {
  elBalance.textContent = `Your balance is ${demoBalance}$`;
  elBalance.classList.remove("hide");
  // Hide the action form
  elActionForm.classList.add("hide");
}

function noAmountMessage() {
  elActionMsg.textContent = `You must enter an amount to perform account operations `;
  elActionMsg.classList.remove("hide");
}
