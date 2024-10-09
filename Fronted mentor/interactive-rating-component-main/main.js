// Get element from thee DOM
const elSubmitBtn = document.querySelector("#submitBtn");
const elRatePageDiv = document.querySelector("#ratePage");
const elTnxPageDiv = document.querySelector("#tnxPage");
const elNumButton = document.getElementsByClassName("circle");
const elRateMsgDiv = document.querySelector("#rateMsg");
let rateNum = 4;

elSubmitBtn.addEventListener("click", function () {
  // Show the tnx page
  elRatePageDiv.classList.add("hide");
  //Hide the rate page
  elTnxPageDiv.classList.remove("hide");
  // Add the rate number to the message
  elRateMsgDiv.innerHTML = `You selected ${rateNum} out of 5`;
});

elNumButton.addEventListener("click", function () {
  elNumButton.classList.add("selected");
});
