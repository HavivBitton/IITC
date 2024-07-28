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
let score = 70;
let result;
if (score > 60) {
  result = "pass";
} else {
  result = "fail";
}
console.log(result); // pass

// 4. Create an if-else if-else statement that checks a variable `grade`. If it's greater than or equal to 90, set `letterGrade` to "A". If it's greater than or equal to 80, set it to "B". Otherwise, set it to "C".
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
let number = 10;
let isEven;
if (number % 2 === 0) {
  isEven = true;
}
console.log(isEven); // true

// 6. Create an if-else statement that checks if a variable `year` is divisible by 4. If true, set a variable `isLeapYear` to true. Otherwise, set it to false.
let year = 2024;
let isLeapYear;
if (2024 % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(isLeapYear); //true

// 7. Write an if-else statement that checks if a variable `hour` is less than 12. If true, set a variable `period` to "AM". Otherwise, set it to "PM".
let hour = 14;
let period;
if (hour < 12) {
  period = "PM";
} else {
  period = "PM";
}
console.log(period); //PM

// 8. Create an if-else if-else statement that checks a variable `dayNumber` (1-7). Set `dayName` to the corresponding day of the week.
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
let name1 = "";
let hasName;
if (name1 === "") {
  hasName = false;
}
console.log(hasName); // false

// 10. Create an if-else statement that checks if a variable `amount` is greater than 1000. If true, set a variable `shipping` to 0. Otherwise, set it to 5.
let amount = 1100;
let shipping;
if (amount > 1000) {
  shipping = 0;
} else {
  shipping = 5;
}
console.log(shipping); //0

// 11. Write an if-else statement that checks if a variable `password` is equal to "secret123". If true, set a variable `isLoggedIn` to true. Otherwise, set it to false.
let password = "haviv123";
let isLoggedIn;
if (password === "secret123") {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
console.log(isLoggedIn); // false

// 12. Create an if-else if-else statement that checks a variable `month` (1-12). Set `season` to "Winter", "Spring", "Summer", or "Fall" based on the month.
let month = 12;
let season;
if (month <= 2 || month === 12) season = "Winter";
else if (month <= 11 && month >= 9) season = "Autumn";
else if (month <= 8 && month >= 6) season = "Summer";
else if (month <= 5 && month >= 3) season = "Spring";
console.log(season); // Winter

// 13. Write an if statement that checks if a variable `income` is greater than 50000 and a variable `creditScore` is greater than 700. If both are true, set a variable `loanApproved` to true.
let income = 51000;
let creditScore = 8000;
let loanApproved;
if (income > 50000 && creditScore > 7000) {
  loanApproved = true;
}
console.log(loanApproved); //true

// 14. Create an if-else statement that checks if a variable `age` is less than 18 or greater than 65. If true, set a variable `discount` to 0.2. Otherwise, set it to 0.
let age1 = 40;
let discount;
if (age1 < 18 || age1 >= 65) discount = 0.2;
else discount = 0;
console.log(discount); // 0

// 15. Write an if-else statement that checks if a variable `number` is between 1 and 10 (inclusive). If true, set a variable `inRange` to true. Otherwise, set it to false.
let number1 = 7;
let inRange;
if (number1 <= 10 && number1 >= 1) inRange = true;
else inRange = false;
console.log(inRange); //true

// 16. Create a switch statement that checks a variable `dayNumber` (1-7) and sets `dayName` to the corresponding day of the week.
let dayNumber1 = 2;
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
console.log(dayName1); // Monday

// 17. Write a switch statement that checks a variable `grade` (A, B, C, D, F) and sets `description` to a corresponding message (e.g., "Excellent", "Good", etc.).
let grade1 = "B";
let description;
switch (grade1) {
  case "A":
    description = "Excellent";
    break;
  case "B":
    description = "Good";
    break;
  case "C":
    description = "Average";
    break;
  case "D":
    description = "Poor";
    break;
  case "F":
    description = "Failure";
    break;
}
console.log(description); // "Good"

// 18. Create an if-else statement that checks if a variable `number` is positive, negative, or zero. Set a variable `sign` accordingly.
let number2 = -23;
let sign;
if (number2 === 0) sign = "0";
else if (number2 > 0) sign = "+";
else if (number2 < 0) sign = "-";
console.log(sign); // -

// 19. Write an if-else statement that checks if a variable `year` is a century year (ending with 00) and divisible by 400. If true, set `isCenturyLeapYear` to true. Otherwise, set it to false.
let year1 = 2000;
let isCenturyLeapYear;
if (year1 % 400 === 0) {
  isCenturyLeapYear = true;
} else {
  isCenturyLeapYear = false;
}
console.log(isCenturyLeapYear); // true

// 20. Create a switch statement that checks a variable `month` (1-12) and sets `daysInMonth` to the correct number of days for that month (assuming a non-leap year).
//     Hint: Use a switch statement with cases for each month number.
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)
let month1 = 12;
let daysInMonth;
switch (month1) {
  case 1:
    daysInMonth = 31;
    break;
  case 2:
    daysInMonth = 29;
    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  case 12:
    daysInMonth = 31;
    break;
}
console.log(daysInMonth); // 31
