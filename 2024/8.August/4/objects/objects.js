"use strict";

//  Task1

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}

// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);

///////////////////////////////////////////////////////////////////////

// Task 2

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
  //create a array that contain the result
  let studentsName = [];
  // for loop that get value from every object in the array
  for (let i = 0; i < students.length; i++) {
    studentsName.push(students[i].name);
  }
  return studentsName;
}

let names = getStudentNames(students);
// console.log("Student Names:", names);
//Output: Student Names: – ["Alice", "Bob", "Charlie"] (3)

///////////////////////////////////////////////////////////////////////

// Task 3
// TODO: Write a function to find a student by ID

function getStudentById(students, id) {
  //loop that check every object in the array
  for (let i = 0; i < students.length; i++) {
    //if that find the object with the specific value
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// console.log("Found Student:", getStudentById(students, 2));
// Output: Found Student: – {id: 2, name: "Bob", age: 22}

///////////////////////////////////////////////////////////////////////

//Task 4
// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

addStudent(students, { id: 4, name: "Charlie", age: 19 });
// console.log("Updated Students:", students);
/* Output:
0 {id: 1, name: "Alice", age: 20}
1 {id: 2, name: "Bob", age: 22}
2 {id: 3, name: "Charlie", age: 19}
3 {id: 4, name: "Charlie", age: 19}
*/

///////////////////////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// Task 5

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  // if that check the product available and toggle him.
  if (product.isAvailable === true) product.isAvailable = false;
  else product.isAvailable = true;
}

// toggleAvailability(product);
// console.log("Updated Product:", product);
/* Output:
Updated Product: – {name: "Laptop", price: 1200, isAvailable: false,
categories: ["electronics", "computers", "tech"]}
*/

///////////////////////////////////////////////////////////////////////

//Task 5

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
// console.log("Updated Product:", product);
/* Output:
Updated Product: – {name: "Laptop", price: 1500, isAvailable: true, 
categories: ["electronics", "computers", "tech"]}
*/

///////////////////////////////////////////////////////////////////////

//Task 6

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  //create a array that contain the categories array without the specific category
  let newCategoriesArray = [];
  let currentCategory = "";
  // loop that check every category in the array.
  for (let i = 0; i < product.categories.length; i++) {
    currentCategory = product.categories[i];
    // if the specific category that not exists, he pushed to the new array
    if (currentCategory !== category) newCategoriesArray.push(currentCategory);
  }
  product.categories = newCategoriesArray;
}

removeCategory(product, "tech");
// console.log("Updated Product:", product);
/* Output:
Updated Product: {name: "Laptop", price: 1500, isAvailable: true, 
categories: ["electronics", "computers"]}
*/

///////////////////////////////////////////////////////////////////////

//Task 7

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  // create a variable that contain the current expensive price
  let expensivePrice = 0;
  // create a variable that contain the index in the array
  // of the current expensive product
  let indexOfExpensiveProduct = 0;
  for (let i = 1; i < products.length; i++) {
    // if that do the compere between the prices tnd update the variables if need.
    if (products[i].price > expensivePrice) {
      expensivePrice = products[i].price;
      indexOfExpensiveProduct = i;
    }
  }
  return products[indexOfExpensiveProduct];
}

let expensiveProduct = findMostExpensiveProduct(products);
// console.log("Most Expensive Product:", expensiveProduct);
/* Output:
Most Expensive Product: – {name: "Mouse", price: 2500, 
sizes: ["S", "M"], isAvailable: false}Object
*/

///////////////////////////////////////////////////////////////////////

// Task 8

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  //create a variable that contain the array of available products
  let availableArray = [];
  //loop that check any product with `if` and keep his sizes
  for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable === true) {
      availableArray.push(`for ${products[i].name} is : ${products[i].sizes}`);
    }
  }
  return availableArray;
}

let sizes = getAvailableSizes(products);
// console.log("Available Sizes:", sizes);
/* Output:
Available Sizes: – ["for Laptop is : M,L", "for Keyboard is : L,XL"] (2)
*/

/////////////////////////////////////////////////////////////////////////

// Task 9

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
// console.log("Updated Student:", student);
/* Output:
Updated Student: – {name: "Alice", age: 20, grade: "A"} 
*/

/////////////////////////////////////////////////////////////////////////

// Task 10

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  //create a variable that contain the current student that checked
  let currentStudent = {};
  //loop that check every student in the array
  for (let i = 0; i < school.students.length; i++) {
    currentStudent = school.students[i];
    // if the id`s is same, is update his grade in the specific subject
    if (currentStudent.id === studentId) {
      school.students[i].grades[subject] = newGrade;
    }
  }
}

updateStudentGrade(school, 1, "math", 85);
// console.log("Updated School:", school);
/* Output:
students: Array (2)
0 {id: 1, name: "Alice", grades: {math: 85, english: 78}}
1 {id: 2, name: "Bob", grades: {math: 92, english: 88}}
*/

/////////////////////////////////////////////////////////////////////////

// Task 11

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  //create the array that contain the result
  let deliveredOrders = [];
  //loop that check every product
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "delivered") {
      deliveredOrders.push(orders[i]);
    }
  }
  return deliveredOrders;
}

let deliveredOrders = getDeliveredOrders(orders);
// console.log("Delivered Orders:", deliveredOrders);
/* Output:
Delivered Orders: – [{id: 1, product: "Laptop", status: "delivered"}, 
{id: 3, product: "Keyboard", status: "delivered"}] (2) 
*/

/////////////////////////////////////////////////////////////////////////

// Task 12

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  // create a variable that contain the result
  let inventory = {};
  // create a variable that contain the current product that checked
  let currentProduct;
  for (let i = 0; i < orders.length; i++) {
    currentProduct = orders[i];
    // if the product not exists in the inventory variable,his create him +1
    if (inventory[currentProduct.product] === undefined) {
      inventory[currentProduct.product] = 1;
      // if his already exists' his update him +1
    } else inventory[currentProduct.product] += 1;
  }
  return inventory;
}

let productCounts = countProductOccurrences(orders);
// console.log("Product Counts:", productCounts);
/*
  Output:
  Product Counts: –{Laptop: 2, Mouse: 1, Keyboard: 1, Monitor: 1}
  */
