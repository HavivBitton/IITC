// 1. Write an if statement that checks if a variable `age` is greater than or equal to 18. If true, set a variable `canVote` to true.
let age = 18;
let canVote;
if (age >= 18) canVote = true;
console.log(canVote); //true

// 2. Create an if-else statement that checks if a variable `temperature` is less than 0. If true, set a variable `weather` to "freezing". Otherwise, set it to "not freezing".
let temperature = -16;
let weather;
if (temperature < 0) {
  weather = "freezing";
} else {
  weather = "not freezing";
}
console.log(weather); // freezing

// 3. Write an if-else statement that checks if a variable `score` is greater than or equal to 60. If true, set a variable `result` to "pass". Otherwise, set it to "fail".
//    Hint: Use the greater than or equal to operator (>=).
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
let score = 70;
let result;
if (score > 60) {
  result = "pass";
} else {
  result = "fail";
}
console.log(result); // pass

// 4. Create an if-else if-else statement that checks a variable `grade`. If it's greater than or equal to 90, set `letterGrade` to "A". If it's greater than or equal to 80, set it to "B". Otherwise, set it to "C".
//    Hint: Use multiple else if statements for different grade ranges.
//    [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)
let grade = 50;
let letterGrade;
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else if (grade < 80) {
  letterGrade = "C";
}
console.log(letterGrade); // C

// 5. Write an if statement that checks if a variable `number` is even. If true, set a variable `isEven` to true.
//    Hint: Use the modulus operator (%) to check for even numbers.
//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)
let number = 10;
let isEven;
if (number % 2 === 0) {
  isEven = true;
}
console.log(isEven); // true

// 6. Create an if-else statement that checks if a variable `year` is divisible by 4. If true, set a variable `isLeapYear` to true. Otherwise, set it to false.
//    Hint: Use the modulus operator (%) to check divisibility.
//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)
let year = 2024;
let isLeapYear;
if (2024 % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(isLeapYear); //true

// 7. Write an if-else statement that checks if a variable `hour` is less than 12. If true, set a variable `period` to "AM". Otherwise, set it to "PM".
//    Hint: Use the less than operator (<).
//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
let hour = 14;
let period;
if (hour < 12) {
  period = "PM";
} else {
  period = "PM";
}
console.log(period); //PM

// 8. Create an if-else if-else statement that checks a variable `dayNumber` (1-7). Set `dayName` to the corresponding day of the week.
//    Hint: Use multiple else if statements for different day numbers.
//    [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)
let dayNumber = 6;
let dayName;
if (dayNumber === 1) dayName = "Sunday";
else if (dayNumber === 2) dayName = "Monday";
else if (dayNumber === 3) dayName = "Tuesday";
else if (dayNumber === 4) dayName = "Wednesday";
else if (dayNumber === 5) dayName = "Thursday";
else if (dayNumber === 6) dayName = "Friday";
else if (dayNumber === 7) dayName = "Saturday";
console.log(dayName); // Friday

// 9. Write an if statement that checks if a variable `name` is an empty string. If true, set a variable `hasName` to false.
//    Hint: Compare the string to an empty string ("").
//    [Learn more about string comparison](https://www.w3schools.com/js/js_comparisons.asp)
let name1 = "";
let hasName;
if (name1 === "") {
  hasName = false;
}
console.log(hasName); // false

// 10. Create an if-else statement that checks if a variable `amount` is greater than 1000. If true, set a variable `shipping` to 0. Otherwise, set it to 5.
//     Hint: Use the greater than operator (>).
//     [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)
let amount = 1100;
let shipping;
if (amount > 1000) {
  shipping = 0;
} else {
  shipping = 5;
}
console.log(shipping); //0

// 11. Write an if-else statement that checks if a variable `password` is equal to "secret123". If true, set a variable `isLoggedIn` to true. Otherwise, set it to false.
//     Hint: Use the strict equality operator (===).
//     [Learn more about equality operators](https://www.w3schools.com/js/js_comparisons.asp)
let password = "haviv123";
let isLoggedIn;
if (password === "secret123") {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
console.log(isLoggedIn); // false

// 12. Create an if-else if-else statement that checks a variable `month` (1-12). Set `season` to "Winter", "Spring", "Summer", or "Fall" based on the month.
//     Hint: Group months into seasons using else if statements.
//     [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)
let month = 12;
let season;
if (month <= 2 || month === 12) season = "Winter";
else if (month <= 11 && month >= 9) season = "Autumn";
else if (month <= 8 && month >= 6) season = "Summer";
else if (month <= 5 && month >= 3) season = "Spring";
console.log(season); // Winter

// 13. Write an if statement that checks if a variable `income` is greater than 50000 and a variable `creditScore` is greater than 700. If both are true, set a variable `loanApproved` to true.
//     Hint: Use the AND operator (&&) to combine conditions.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
let income = 51000;
let creditScore = 8000;
let loanApproved;
if (income > 50000 && creditScore > 7000) {
  loanApproved = true;
}
console.log(loanApproved); //true

// 14. Create an if-else statement that checks if a variable `age` is less than 18 or greater than 65. If true, set a variable `discount` to 0.2. Otherwise, set it to 0.
//     Hint: Use the OR operator (||) to combine conditions.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
let age1 = 40;
let discount;
if (age1 < 18 || age1 >= 65) discount = 0.2;
else discount = 0;
console.log(discount); // 0

// 15. Write an if-else statement that checks if a variable `number` is between 1 and 10 (inclusive). If true, set a variable `inRange` to true. Otherwise, set it to false.
//     Hint: Use the AND operator (&&) to combine two comparisons.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)
let number1 = 7;
let inRange;
if (number1 <= 10 && number1 >= 1) inRange = true;
else inRange = false;
console.log(inRange); //true

// 16. Create a switch statement that checks a variable `dayNumber` (1-7) and sets `dayName` to the corresponding day of the week.
//     Hint: Use a switch statement with cases for each day number.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)
let dayNumber1;
let dayName1;
switch (dayNumber1) {
  case 1:
    dayName1 = "Sunday";
    break;
  case 2:
    dayName1 = "Monday";
    break;
  case 3:
    dayName1 = "Tuesday";
    break;
  case 4:
    dayName1 = "Wednesday";
    break;
  case 5:
    dayName1 = "Thursday";
    break;
  case 6:
    dayName1 = "Friday";
    break;
  case 7:
    dayName1 = "Saturday";
    break;
}
// 17. Write a switch statement that checks a variable `grade` (A, B, C, D, F) and sets `description` to a corresponding message (e.g., "Excellent", "Good", etc.).
//     Hint: Use a switch statement with cases for each grade letter.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 18. Create an if-else statement that checks if a variable `number` is positive, negative, or zero. Set a variable `sign` accordingly.
//     Hint: Use nested if-else statements or else if statements.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 19. Write an if-else statement that checks if a variable `year` is a century year (ending with 00) and divisible by 400. If true, set `isCenturyLeapYear` to true. Otherwise, set it to false.
//     Hint: Use the modulus operator (%) and the AND operator (&&).
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 20. Create a switch statement that checks a variable `month` (1-12) and sets `daysInMonth` to the correct number of days for that month (assuming a non-leap year).
//     Hint: Use a switch statement with cases for each month number.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// ## More Difficult Exercises (21-30)

// 21. Write nested if-else statements that check if a variable `number` is positive, negative, or zero, and then check if it's even or odd. Set variables `sign` and `parity` accordingly.
//     Hint: Use nested if-else statements and the modulus operator (%).
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 22. Create nested if-else statements that check a variable `score` and a variable `attendance`. Set `grade` based on the score, but lower it by one level if attendance is less than 80%.
//     Hint: Use nested if-else statements with multiple conditions.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 23. Write an if-else statement that checks if a year is a leap year. A year is a leap year if it's divisible by 4, except for century years, which must be divisible by 400 to be a leap year.
//     Hint: Use multiple conditions with logical operators (&&, ||).
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 24. Create a nested if-else statement that categorizes a person based on their age and employment status. Use variables `age` and `isEmployed` to determine if someone is a "Student", "Employed Adult", "Unemployed Adult", or "Retiree".
//     Hint: Use nested if-else statements with multiple conditions.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 25. Write a switch statement with fall-through cases that categorizes a variable `month` into seasons, where some months can belong to multiple seasons.
//     Hint: Use fall-through cases in a switch statement.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 26. Create an if-else statement that determines the quadrant (1, 2, 3, or 4) of a point on a coordinate plane, given variables `x` and `y` for the coordinates.
//     Hint: Use nested if-else statements to check the signs of x and y.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 27. Write nested if-else statements that determine the state of water (solid, liquid, or gas) based on temperature and pressure variables.
//     Hint: Use nested if-else statements with multiple conditions.
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 28. Create a switch statement that calculates the number of days in a month, considering leap years. Use variables `month` and `isLeapYear`.
//     Hint: Use a switch statement with a special case for February.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 29. Write an if-else statement that determines if three numbers can form a triangle. Use variables `a`, `b`, and `c` for the side lengths.
//     Hint: Check if the sum of any two sides is greater than the third side.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 30. Create nested if-else statements that calculate the roots of a quadratic equation (ax^2 + bx + c = 0) based on the discriminant. Use variables `a`, `b`, and `c` for the coefficients.
//     Hint: Use nested if-else statements to handle different cases (two real roots, one real root, or no real roots).
//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// ## Ternary Operator Exercises (31-32)

// 31. Use the ternary operator to check if a variable `number` is even or odd. Set a variable `parity` to "even" or "odd" accordingly.
//     Hint: Use the modulus operator (%) with the ternary operator.
//     [Learn more about the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

// 32. Use the ternary operator to check if a variable `age` is greater than or equal to 18. Set a variable `canVote` to true or false accordingly.
//     Hint: Use a comparison with the ternary operator.
//     [Learn more about the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

// Remember to test your code with different input values to ensure your conditional statements work correctly!
