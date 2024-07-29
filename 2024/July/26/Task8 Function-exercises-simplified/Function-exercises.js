// 1. Write a function named `greet` that prints "Hello, World!" to the console.
//    Hint: Use `console.log()` inside the function.
//    [Learn more about console.log()](https://www.w3schools.com/jsref/met_console_log.asp)
function greet() {
  console.log("Hello, World!");
}
console.log(greet());
// 2. Create a function called `square` that takes a number as an argument and returns its square.
//    Hint: Use the multiplication operator (*) to calculate the square.
//    [Learn more about return statements](https://www.w3schools.com/js/js_function_return.asp)
function square(number) {
  number *= number;
  return number;
}
console.log(square(4));
// 3. Write a function named `isEven` that takes a number as an argument and returns true if it's even, and false otherwise.
//    Hint: Use the modulus operator (%) to check if a number is even.
//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)
function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}
console.log(isEven(4)); //true

// 4. Create a function called `getFullName` that takes two parameters, `firstName` and `lastName`, and returns the full name as a string.
//    Hint: Concatenate the two parameters with a space in between.
//    [Learn more about string concatenation](https://www.w3schools.com/js/js_operators.asp)
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Haviv", "Bitton")); //Haviv Bitton

// 5. Write a function named `sumTwo` that takes two numbers as arguments and returns their sum.
//    Hint: Use the addition operator (+) to add the numbers.
//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)
function sumTwo(number1, number2) {
  return number1 + number2;
}
console.log(sumTwo(1, 3)); //4

// 6. Create a function named `multiply` that takes two numbers as arguments and returns their product.
//    Hint: Use the multiplication operator (*).
//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)
function multiply(number1, number2) {
  return number1 * number2;
}
console.log(multiply(2, 5)); //10

// 7. Write a function called `greetPerson` that takes a name as an argument and returns a greeting string.
//    Hint: Return a string like "Hello, [name]!".
//    [Learn more about string concatenation](https://www.w3schools.com/js/js_operators.asp)
function greetPerson(name) {
  return `Hello, ${name}!`;
}
console.log(greetPerson("Haviv")); // Hello, Haviv!

// 8. Create a function named `getAbsoluteValue` that takes a number as an argument and returns its absolute value.
//    Hint: Use an if statement to check if the number is negative.
//    [Learn more about if statements](https://www.w3schools.com/js/js_if_else.asp)
function getAbsoluteValue(number) {
  return Math.abs(number);
}
console.log(getAbsoluteValue(-5)); //5

// 9. Write a function called `calculateAverage` that takes two numbers as arguments and returns their average.
//    Hint: Add the numbers and divide by 2.
//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)
function calculateAverage(number1, number2) {
  return (number1 + number2) / 2;
}
console.log(calculateAverage(4, 10)); //7

// 10. Create a function named `convertToUppercase` that takes a string as an argument and returns the string in uppercase.
//     Hint: Use the `toUpperCase()` method.
//     [Learn more about string methods](https://www.w3schools.com/js/js_string_methods.asp)
function convertToUppercase(string) {
  return string.toUpperCase();
}
console.log(convertToUppercase("haviv")); // HAVIV

// 11. Write a function called `isPositive` that takes a number as an argument and returns true if it's positive, and false otherwise.
//     Hint: Use a comparison operator (>).
//     [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
function isPositive(number) {
  if (number > 0) return true;
  else return false;
}
console.log(isPositive(4)); //true

// 12. Create a function named `getFirstChar` that takes a string as an argument and returns its first character.
//     Hint: Use square bracket notation with index 0.
//     [Learn more about string characters](https://www.w3schools.com/js/js_strings.asp)
function getFirstChar(string) {
  return string[0];
}
console.log(getFirstChar("haviv"));

// 13. Write a function called `areaOfRectangle` that takes width and height as arguments and returns the area of the rectangle.
//     Hint: Multiply width by height.
//     [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)
function areaOfRectangle(width, height) {
  return width * height;
}
console.log(areaOfRectangle(4, 6)); //24

// 14. Create a function named `remainderDivision` that takes two numbers as arguments and returns the remainder when the first is divided by the second.
//     Hint: Use the modulus operator (%).
//     [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)
function remainderDivision(number1, number2) {
  return number1 % number2;
}
console.log(remainderDivision(7, 2)); //1

// 15. Write a function called `logType` that takes any value as an argument and logs its type to the console.
//     Hint: Use the `typeof` operator and `console.log()`.
//     [Learn more about typeof](https://www.w3schools.com/js/js_typeof.asp)
function logType(any) {
  return typeof any;
}
console.log(logType("haviv")); // string

// 16. Create a function named `invertBoolean` that takes a boolean value as an argument and returns its opposite.
//     Hint: Use the logical NOT operator (!).
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
function invertBoolean(boolean) {
  return !boolean;
}
console.log(invertBoolean(true)); //false

// 17. Write a function called `concatenateStrings` that takes two strings as arguments and returns them concatenated.
//     Hint: Use the addition operator (+) to concatenate strings.
//     [Learn more about string operators](https://www.w3schools.com/js/js_operators.asp)
function concatenateStrings(string1, string2) {
  return string1 + string2;
}
console.log(concatenateStrings("Haviv ", "Bitton")); // Haviv Bitton

// 18. Create a function named `findSmaller` that takes two numbers as arguments and returns the smaller one.
//     Hint: Use an if statement to compare the numbers.
//     [Learn more about if statements](https://www.w3schools.com/js/js_if_else.asp)
function findSmaller(number1, number2) {
  if (number1 > number2) {
    return number2;
  } else if (number2 > number1) {
    return number1;
  } else return "They are equal";
}
console.log(findSmaller(4, 5)); //4

// 19. Write a function called `greetWithDefault` that takes a name as an argument and returns a greeting. If no name is provided, it should use "Guest".
//     Hint: Use a default parameter value.
//     [Learn more about function parameters](https://www.w3schools.com/js/js_function_parameters.asp)
function greetWithDefault(name = "Guest") {
  return `Hello ${name}!`;
}
console.log(greetWithDefault());

// 20. Create a function named `isLongString` that takes a string as an argument and returns true if its length is greater than 10, and false otherwise.
//     Hint: Use the `length` property of the string.
//     [Learn more about string properties](https://www.w3schools.com/js/js_string_methods.asp)
function isLongString(string) {
  return string.length > 10;
}
console.log(isLongString("havivbitton")); // true
// Remember to test your functions with different inputs to ensure they work correctly!
