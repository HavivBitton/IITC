function displaySquares() {
  const q1_resouce = [2, 4, 6, 8, 10];

  let sum = 0;
  const numberList = document.getElementById("numberList");
  numberList.innerHTML = "";

  q1_resouce.forEach(function (currentNumber) {
    const calc = currentNumber ** 2;
    sum += calc;
    const listItem = document.createElement("li");
    listItem.textContent = calc;

    numberList.appendChild(listItem);
  });

  const totalSum = document.createElement("p");
  totalSum.textContent = sum;

  numberList.insertAdjacentElement("afterend", totalSum);
}

displaySquares();

// Q2

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Anna", age: 19 },
  { name: "Mike", age: 23 },
];

function displayFilterArray(peopleArray) {
  // Create a DOM element in the html and reset him.
  const peopleList = document.getElementById("peopleList");
  peopleList.innerHTML = "";

  // Filter the array by the request
  const newPeopleArray = peopleArray.filter(function (currentPeople) {
    return currentPeople.age >= 18 && currentPeople.name[0] === "A";
  });

  // Create "li" for every people in the filtered array.
  newPeopleArray.forEach(function (currentPeople) {
    const peopleItem = document.createElement("li");
    peopleItem.textContent = currentPeople.name + ", " + currentPeople.age;
    peopleList.appendChild(peopleItem);
  });
}

displayFilterArray(people);
