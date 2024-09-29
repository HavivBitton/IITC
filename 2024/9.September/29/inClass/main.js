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

//Q3

const fruits = ["apple", "banana"];

function displayFruitsArray(fruits) {
  const fruitsObj = fruits.reduce((acc, string) => {
    const stringArr = string.split("");
    stringArr.forEach((char) => {
      if (acc[char]) acc[char]++;
      else acc[char] = 1;
    });
    return acc;
  }, {});
  console.log(fruitsObj);
  //{a: 4, p: 2, l: 1, e: 1, b: 1, n:2}

  // Create a DOM element in the html and reset him.
  const fruitsList = document.getElementById("fruitsList");
  fruitsList.innerHTML = "";
}

displayFruitsArray(fruits);

const products = [
  { name: "Laptop", price: 4000, quantity: 10 },
  { name: "Smartphone", price: 2000, quantity: 5 },
  { name: "Headphones", price: 150, quantity: 0 }, // This product is out of stock
  { name: "Monitor", price: 800, quantity: 7 },
  { name: "Keyboard", price: 100, quantity: 3 },
  { name: "Smartwatch", price: 1800, quantity: 0 }, // Another product out of stock
];

const findProducts = products.find((product) => {
  return product.quantity === 0;
});
console.log(findProducts);

const findProductsIndex = products.findIndex((product) => {
  return product.quantity === 0;
});
console.log(findProductsIndex);
console.log(products[findProductsIndex]);
