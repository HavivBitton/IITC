//1. Declare a variable named firstName and assign it your first name as a string.
let firstName = "Haviv";
console.log(firstName); // Haviv

// 2. Create a variable age as a number and set it to your current age.
let age = 24;
console.log(age); // 24

// 3. Declare a variable isRaining as a boolean and set it to false.
let = isRaining = false;
console.log(isRaining); // false

// 4. Declare a **constant** variable PI as a number and assign it the value 3.14159.
const PI = 3.14159;
console.log(PI); // 3/14159

// 5. Declare a variable isStudent as a boolean and set it to true.
let isStudent = true;
console.log(isStudent); //true

// 6. Create a variable named favoriteColor as a string without assigning it a value.
let favoriteColor;
console.log(favoriteColor); //undefined

// 7. Declare a variable temperature as a number and assign it the value 72.5.
let temperature = 72.5;
console.log(temperature); // 72.5

// 8. Create a **constant** variable DAYS_IN_WEEK as a number and set it to 7.
const DAYS_IN_WEEK = 7;
console.log(DAYS_IN_WEEK); //7

// 9. Declare a variable username as a string and assign it the value "coder123".
let username = "coder123";
console.log(username); // coder123

// 10. Create a variable score as a number and set it to 0.
let score = 0;
console.log(score); // 0

// 11. Declare a variable isLoggedIn as a boolean and assign it the value false.
let isLoggedIn = false;
console.log(isLoggedIn); //false

// 12. Create a **constant** variable COMPANY_NAME as a string and set it to "Tech Solutions Inc.".
const COMPANY_NAME = "Tech Solutions Inc. ";
console.log(COMPANY_NAME); // 'Tech Solutions Inc. '

// 13. Declare a variable currentYear as a number and assign it the current year.
let currentYear = new Date(2024, 6);
console.log(currentYear); //Mon Jul 01 2024 00:00:00 GMT+0300 (Israel Daylight Time)

// 14. Create a variable price as a number (float) and set it to 19.99.
let price = 19.99;
console.log(price); // 19.99

// 15. Declare a variable quantity as a number and assign it the value 100.
let quantity = 100;
console.log(quantity); // 100

// 16. Declare a variable counter as a number and set it to 0. Then **increment** it by 1.
let counter = 0;
counter++;
console.log(counter); // 1
counter += 1;
console.log(counter); // 2

// 17. Create a variable message as a string and set it to "Hello". Then **reassign** it to "Hello, World!".
let message = '"Hello"';
message = '"Hello, World!"';
console.log(message); // "Hello, World!"

// 18. Declare a variable using `let` named myVariable and assign it the value 42. Then, on the next line, reassign it to "forty-two".
let myVariable = 42;
myVariable = "forty-two";
console.log(myVariable); // forty-two

// 19. Create a variable totalCost as a number and set it to 50. Then **add** 10 to its current value.
let totalCost = 50;
totalCost += 10;
console.log(totalCost); // 60

// 20. Declare a variable username and assign it the value "user1". Then reassign it to "admin".
let username1 = "user1";
username1 = "admin";
console.log(username1); // admin

// 21. Create a variable temperature and set it to 20. Then multiply its value by 1.8 and add 32 to convert from Celsius to Fahrenheit.
let temperature1 = 20;
temperature1 = temperature1 * 1.8 + 32;
console.log(temperature1);

// 22. Declare a variable fruits as an array and set it to ["apple", "banana"]. Then add "orange" to the array.
//     Hint: You can use the push() method to add elements to an array.
//     [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"] (3)

// 23. Create a variable person as an object with properties name and age. Then add a new property city.
//     Hint: You can add new properties to objects after creation.
//     [Learn more about objects](https://www.w3schools.com/js/js_objects.asp)
let person = { name: "Haviv", age: "24" };
person.city = "Dimona";
console.log(person); // {name: "Haviv", age: "24", city: "Dimona"}

// 24. Declare a variable count and set it to 5. Then decrement it by 1.
let count = 0;
count--;
console.log(count); // -1
count -= 1;
console.log(count); // -2

// 25. Create a variable greeting and set it to "Good". Then concatenate it with "morning" to form "Good morning".
//     Hint: You can use the + operator to concatenate strings.
//     [Learn more about string methods](https://www.w3schools.com/js/js_string_methods.asp)
let greeting = "Good";
greeting += " morning";
console.log(greeting); // Good morning
