// ## More Difficult Exercises (21-30)

// 21. Write nested if-else statements that check if a variable `number` is positive, negative, or zero, and then check if it's even or odd. Set variables `sign` and `parity` accordingly.
//     Hint: Use nested if-else statements and the modulus operator (%).
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)
let number = -24;
let sign;
let parity;
if (number > 0) sign = "+";
else if (number === 0) sign = "0";
else if (number < 0) sign = "-";
if (number % 2 === 0) parity = "Even";
else parity = "Odd";
console.log(sign + " " + parity); // - Even

// 22. Create nested if-else statements that check a variable `score` and a variable `attendance`. Set `grade` based on the score, but lower it by one level if attendance is less than 80%.
//     Hint: Use nested if-else statements with multiple conditions.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)
let score = 80;
let grade = score;
let attendance = 0.8;
let letterGrade;
if (attendance < 0.8) grade -= 10;
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else if (grade >= 70) {
  letterGrade = "C";
} else if (grade >= 60) {
  letterGrade = "D";
} else if (grade >= 50) {
  letterGrade = "F";
}
console.log(letterGrade); // C

// 23. Write an if-else statement that checks if a year is a leap year. A year is a leap year if it's divisible by 4, except for century years, which must be divisible by 400 to be a leap year.
//     Hint: Use multiple conditions with logical operators (&&, ||).
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
let courantYear = 2024;
if (courantYear % 400 === 0) console.log("Is a leap year");
else if (courantYear % 4 === 0 && courantYear % 100 !== 0)
  console.log("Is a leap year");
else console.log("Is not a leap year");

// 24. Create a nested if-else statement that categorizes a person based on their age and employment status. Use variables `age` and `isEmployed` to determine if someone is a "Student", "Employed Adult", "Unemployed Adult", or "Retiree".
//     Hint: Use nested if-else statements with multiple conditions.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)
let age = 40;
let isEmployed = false;
if (age > 18 && age < 65) {
  if (isEmployed) console.log("Employed adult");
  else console.log("Unemployed adult");
} else if (age >= 65) console.log("Retiree");
else console.log("Student");

// 25. Write a switch statement with fall-through cases that categorizes a variable `month` into seasons, where some months can belong to multiple seasons.
//     Hint: Use fall-through cases in a switch statement.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)
let month = "May";
let seasons;
switch (month) {
  case "December":
  case "January":
  case "February":
    seasons = "Winter";
    break;
  case "March":
  case "April":
  case "May":
  case "June":
    seasons = " Spring";
    break;
  case "June":
  case "July":
  case "August":
    seasons += " Summer";
    break;
  case "September":
  case "October":
  case "November":
    seasons = " Autumn";
    break;
}
console.log(month + " is " + seasons);

// 26. Create an if-else statement that determines the quadrant (1, 2, 3, or 4) of a point on a coordinate plane, given variables `x` and `y` for the coordinates.
//     Hint: Use nested if-else statements to check the signs of x and y.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)
let x = -3;
let y = 2;
if (x >= 0) {
  if (y >= 0) console.log("the quadrant is 1 ");
  else console.log("the quadrant is 2 ");
} else {
  if (y >= 0) console.log("the quadrant is 4 ");
  else console.log("the quadrant is 3 ");
}

// 27. Write nested if-else statements that determine the state of water (solid, liquid, or gas) based on temperature and pressure variables.
//     Hint: Use nested if-else statements with multiple conditions.
let temperature = 101;
let pressure = 0.7;
if (pressure < 0.6) {
  // Low pressure
  if (temperature <= 0) console.log("Solid");
  else if (temperature > 100) console.log("Gas");
  else console.log("Liquid");
} else if (pressure >= 0.7 && pressure <= 1.2) {
  // Normal atmospheric pressure
  if (temperature <= 0) console.log("Solid");
  else if (temperature > 100) console.log("Gas");
  else console.log("Liquid");
} else if (pressure > 1.2) {
  // High pressure
  if (temperature <= 0) console.log("Solid");
  else if (temperature > 100) console.log("Liquid");
  else console.log("Liquid");
}

// 28. Create a switch statement that calculates the number of days in a month, considering leap years. Use variables `month` and `isLeapYear`.
//     Hint: Use a switch statement with a special case for February.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)
let isLeapYear = false;
let month1 = "February";
switch (month1) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31");
    break;
  case "February":
    if (isLeapYear) console.log("29");
    else console.log("28");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30");
    break;
}
// 29. Write an if-else statement that determines if three numbers can form a triangle. Use variables `a`, `b`, and `c` for the side lengths.
//     Hint: Check if the sum of any two sides is greater than the third side.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
let a = 3;
let b = 32;
let c = 1;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Can be a triangle");
} else console.log("Cant be a triangle");

// 30. Create nested if-else statements that calculate the roots of a quadratic equation (ax^2 + bx + c = 0) based on the discriminant. Use variables `a`, `b`, and `c` for the coefficients.
//     Hint: Use nested if-else statements to handle different cases (two real roots, one real root, or no real roots).
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// ## Ternary Operator Exercises (31-32)

// 31. Use the ternary operator to check if a variable `number` is even or odd. Set a variable `parity` to "even" or "odd" accordingly.
let number1 = 21;
let parity1 = number1 % 2 === 0 ? "Even" : " Odd";
console.log(parity1);
// 32. Use the ternary operator to check if a variable `age` is greater than or equal to 18. Set a variable `canVote` to true or false accordingly.
//     Hint: Use a comparison with the ternary operator.
//     [Learn more about the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
let age1 = 14;
let canVote = age1 >= 18 ? true : false;
console.log(canVote);
// Remember to test your code with different input values to ensure your conditional statements work correctly!
