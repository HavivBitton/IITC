// Get element from thee DOM
const elSubmitBtn = document.querySelector("#submitBtn");
const elRatePageDiv = document.querySelector("#ratePage");
const elTnxPageDiv = document.querySelector("#tnxPage");
const elNumButton = document.querySelectorAll(".circle");
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

elNumButton.forEach((button) => {
  button.addEventListener("click", function (e) {
    const active = document.querySelector(".selected");
    if (active) {
      active.classList.remove("selected");
    }
    button.classList.add("selected");

    rateNum = e.target.innerText;
  });
});
