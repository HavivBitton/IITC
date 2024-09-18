const divContent = document.getElementById("content");
divContent.style.backgroundColor = "LightBlue";

const nodeListText = document.querySelectorAll(".text");
for (let i = 0; i < nodeListText.length; i++) {
  nodeListText[i].style.color = "Red";
  console.log(nodeListText[i].textContent);
}

const ul1 = document.getElementById("ul1");
const button1 = document.getElementById("myBtn");

//add event click on button 1 that make list id ul1 background color to yellow
button1.addEventListener("click", () => {
  ul1.style.backgroundColor = "Yellow";
});

const button2 = document.getElementById("myBtn2");
const ul2 = document.getElementById("ul2");

const addOnPress = () => {
  const addedLi = document.createElement("li");
  addedLi.textContent = "New Text";
  ul2.appendChild(addedLi);

  // Add click event to toggle 'selected' class and make text bold

  addedLi.addEventListener("click", () => {
    // if (ul2.querySelector(".selected")) {
    //   ul2.querySelector(".selected").classList.remove("selected");
    // }
    ul2.querySelector(".selected")?.classList.remove("selected");
    addedLi.classList.toggle("selected");
  });
};

button2.addEventListener("click", addOnPress);
