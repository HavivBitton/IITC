// Create a variable that keep the questions numbers
let qNum = 1;
// Get the element from the DOM
const elIconBtn = document.querySelectorAll(".quesIcon");
let currentAnswer = document.querySelector(`.answer${qNum}`);
let currentIcon = document.querySelector(`.quesIcon${qNum}`);

function closeQuestion(question) {
  // Get this specific question DOM element
  question.classList.remove("selected");
  currentAnswer.classList.add("hide");
  // Change the icon from plus to minus
  currentIcon.innerHTML = ` ${qNum}
                    <img
                    src="./assets/images/icon-plus.svg"
                    alt="plus/minus icon"
                    />`;
}
function openQuestion() {
  // Get this specific question DOM element
  currentAnswer.classList.add("selected");
  currentAnswer.classList.remove("hide");
  // Change the icon from minus to plus
  currentIcon.innerHTML = `${qNum}
                    <img
                    src="./assets/images/icon-minus.svg"
                    alt="plus/minus icon"
                    />`;
}

// Create a event listener for every questions
elIconBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    const active = document.querySelector(".selected");
    // Check if the selected question is opened ,if true its closed and end the event.
    if (active && qNum === e.currentTarget.innerText.trim()) {
      closeQuestion(active);
      return;
    } else {
      // Check if there some else opened question and close him
      if (active) closeQuestion(active);
      // Insert to the variable the current questions numbers
      qNum = e.currentTarget.innerText.trim();
      console.log(qNum);
      // redefines the DOM to the current element
      currentAnswer = document.querySelector(`.answer${qNum}`);
      currentIcon = document.querySelector(`.quesIcon${qNum}`);
      // Open the selected question
      openQuestion();
    }
  });
});
