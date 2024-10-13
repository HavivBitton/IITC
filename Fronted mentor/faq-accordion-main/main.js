const elIconBtn = document.querySelectorAll(".qIcon");
const test = document.querySelectorAll(".test");

let qNum = 0;

elIconBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    const active = document.querySelector(".selected");
    // qNum = e.target.innerText;
    qNum = e.currentTarget.innerText.trim();

    const currentAnswer = document.querySelector(`.answer${qNum}`);
    const currentIcon = document.querySelector(`.qIcon${qNum}`);
    if (active) {
      active.classList.remove("selected");
      currentAnswer.classList.add("hide");
      currentIcon.innerHTML = ` ${qNum}
                    <img
                      src="./assets/images/icon-plus.svg"
                      alt="plus/minus icon"
                    />`;
    } else {
      currentAnswer.classList.add("selected");
      currentAnswer.classList.remove("hide");

      currentIcon.innerHTML = `${qNum}
        <img
        src="./assets/images/icon-minus.svg"
        alt="plus/minus icon"
        />`;
    }
  });
});
