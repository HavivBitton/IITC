const imgDiv = document.querySelector("#api1");
const textDiv = document.querySelector("#api2");

function insertImage(src) {
  imgDiv.insertAdjacentHTML("afterbegin", `<img src="${src}" alt="Dog Image">`);
}
function insertText(src) {
  textDiv.insertAdjacentHTML("afterbegin", `<h1>${src}</h1>`);
}

fetch("https://dog.ceo/api/breeds/image/random")
  // fetch("https://cataas.com/cat")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    insertImage(data.message);
  });

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    insertText(data[1].text);
  });
