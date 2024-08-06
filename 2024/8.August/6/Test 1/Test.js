"use strict";

const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};

// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
  student.age = newAge;
}

updateAge(student_1, 18);
// console.log("Updated Student:", student_1);
// Output: Updated Student: – {name: "John", age: 18, grades: {}}

///////////////////////////////////////////////////////////////////////////////////////////

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};

// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  product.categories.push(category);
}

addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1);
// Output: Updated Product: – {name: "Phone", categories: ["electronics", "gadgets"], isAvailable: false}

///////////////////////////////////////////////////////////////////////////////////////////

// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
  if (product.isAvailable) return true;
  else return false;
}

const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);
// Output : is Product Available : false

///////////////////////////////////////////////////////////////////////////////////////////

const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
  let answer = `The product call '${productName}' is not found`;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) answer = products[i];
  }
  return answer;
}

const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct);
// Output; Found Product: – {name: "Phone", price: 4200, categories: ["electronics", "gadgets"]}

///////////////////////////////////////////////////////////////////////////////////////////

// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
  let counter = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)) counter++;
  }
  return counter;
}

const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);
//Output : Products in Electronics:2

///////////////////////////////////////////////////////////////////////////////////////////

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// 🙂 Task 6: Get Student Ages 🙂

// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
  let studentAge = [];
  for (let i = 0; i < students.length; i++) {
    studentAge.push(students[i].age);
  }
  return studentAge;
}

const ages = getStudentAges(students);
// console.log("Student Ages:", ages);
// Output : Student Ages: – [20, 22, 19] (3)

///////////////////////////////////////////////////////////////////////////////////////////

// const myProducts = [
//     { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//     { name: "Shirt", price: 500, categories: ["clothing"] },
//     { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
//   ];

// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
  let productsByCategory = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)) {
      productsByCategory.push(products[i]);
    }
  }
  return productsByCategory;
}

const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);
// Output:
//  Electronics Products: – [{name: "Laptop", price: 1000, categories: ["electronics", "computers"]},
// {name: "Phone", price: 4200, categories: ["electronics", "gadgets"]}] (2)

///////////////////////////////////////////////////////////////////////////////////////////

// const myProducts = [
//     { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//     { name: "Shirt", price: 500, categories: ["clothing"] },
//     { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
//   ];

// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
  let sumPrice = 0;
  for (let i = 0; i < products.length; i++) {
    sumPrice += products[i].price;
  }
  return sumPrice / products.length;
}

const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);
// Output :Average Price:1900

///////////////////////////////////////////////////////////////////////////////////////////

// const student_1 = {
//   name: "John",
//   age: 17,
//   grades: {},
// };

// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}

addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);
// Output: Updated Student: – {name: "John", age: 18, grades: {math: 85}}

///////////////////////////////////////////////////////////////////////////////////////////

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
  let charCounter = 0;
  let currentWord = [];
  for (let i = 0; i < strings.length; i++) {
    currentWord = strings[i].split("");
    for (let j = 0; j < currentWord.length; j++) {
      if (char === currentWord[j]) charCounter++;
    }
  }
  return charCounter;
}

const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// Output: Occurrences of 's':10
// console.log("Occurrences of 'c':", c_count);
// Output: Occurrences of 'c':3

///////////////////////////////////////////////////////////////////////////////////////////

// const myProducts = [
//     { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//     { name: "Shirt", price: 500, categories: ["clothing"] },
//     { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
//   ];

// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      products[i].price = newPrice;
    }
  }
}

updatePriceByName(myProducts, "Phone", 550);
// console.log("Updated Products:", myProducts);
// Output:
// Updated Products: – [{name: "Laptop", price: 1000, categories: ["electronics", "computers"]},
//{name: "Shirt", price: 500, categories: ["clothing"]},
//{name: "Phone", price: 550, categories: ["electronics", "gadgets"]}] (3)

///////////////////////////////////////////////////////////////////////////////////////////

// const strings = [
//     "baba",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];

// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  let uppercaseStrings = [];
  for (let i = 0; i < strings.length; i++) {
    uppercaseStrings.push(strings[i].toUpperCase());
  }
  return uppercaseStrings;
}

const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);
/* Output:
Uppercase Strings: 
Array (5)
0 "BABA"
1 "MY SUCCESS"
2 "NO MORE LIVES"
3 "AND OF SESSION"
4 "GOOD DISCUSSION"
*/

///////////////////////////////////////////////////////////////////////////////////////////

// const strings = [
//     "baba",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];

// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.

function groupStringsBySpaces(strings) {
  let numberOfSpace = {};
  for (let i = 0; i < strings.length; i++) {
    let spaceCounter = 0;
    let currentStr = strings[i].split("");
    for (let j = 0; j < currentStr.length; j++) {
      if (currentStr[j] === " ") spaceCounter++;
    }
    if (numberOfSpace[spaceCounter] === undefined) {
      numberOfSpace[spaceCounter] = [];
      numberOfSpace[spaceCounter].push(strings[i]);
    } else numberOfSpace[spaceCounter].push(strings[i]);
  }
  return numberOfSpace;
}

const groupedStrings_1 = groupStringsBySpaces(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);
// Outpot :
//Grouped Strings By Spaces: –{
// 0: ["baba"],
// 1: ["my success", "good discussion"],
// 2: ["no more lives", "and of session"]}

///////////////////////////////////////////////////////////////////////////////////////////

// const strings = [
//     "baba",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];

// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.

function groupStringsByLength(strings) {
  let strLength = {};
  for (let i = 0; i < strings.length; i++) {
    if (strLength[strings[i].length] === undefined) {
      strLength[strings[i].length] = [];
      strLength[strings[i].length].push(strings[i]);
    } else strLength[strings[i].length].push(strings[i]);
  }
  return strLength;
}

const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);
/* Output:
Grouped Strings By Length: 
4: ["baba"] (1)
10: ["my success"] (1)
13: ["no more lives"] (1)
14: ["and of session"] (1)
15: ["good discussion"] (1)
*/

///////////////////////////////////////////////////////////////////////////////////////////

// const strings = [
//     "baba",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];

// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)

// answer 1
// function capitalizeStrings(strings) {
//   let capitalizeSrt = [];
//   for (let i = 0; i < strings.length; i++) {
//     let currentStr = strings[i].split("");
//     currentStr[0] = currentStr[0].toUpperCase();
//     capitalizeSrt.push(currentStr.join(""));
//   }
//   return capitalizeSrt;
// }

//answer 2
// function capitalizeStrings(strings) {
//   let capitalizeSrtArr = [];
//   let capitalizeSrt = "";
//   for (let i = 0; i < strings.length; i++) {
//     capitalizeSrt = strings[i][0].toUpperCase() + strings[i].slice(1);
//     capitalizeSrtArr.push(capitalizeSrt);
//   }
//   return capitalizeSrtArr;
// }

// answer bonus
function capitalizeStrings(strings) {
  let capitalizeSrtArr = [];
  let strArr = [];
  for (let i = 0; i < strings.length; i++) {
    strArr = strings[i].split(" ");
    for (let j = 0; j < strArr.length; j++) {
      strArr[j] = strArr[j][0].toUpperCase() + strArr[j].slice(1);
    }
    capitalizeSrtArr.push(strArr.join(" "));
  }
  return capitalizeSrtArr;
}

const capitalizedStrings = capitalizeStrings(strings);

// console.log("Capitalized Strings:", capitalizedStrings);
// Output :
// Capitalized Strings:
// Array (5)
// 0 "Baba"
// 1 "My success"
// 2 "No more lives"
// 3 "And of session"
// 4 "Good discussion"

// Bonus Output :
// Capitalized Strings:
// Array (5)
// 0 "Baba"
// 1 "My Success"
// 2 "No More Lives"
// 3 "And Of Session"
// 4 "Good Discussion"
