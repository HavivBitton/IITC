// Task 3
// Conditions

// If and Eles
function checkAge(age) {
  if (age < 13) return "You are a Child";
  else if (13 <= age && age <= 17) return "You are a Teenager";
  else if (18 <= age && age <= 64) return "You are a Adult";
  else if (age >= 65) return "You are a Senior";
}
console.log(checkAge(18));

// Switch Statement

function getDayMassage(dayOfWeek) {
  switch (dayOfWeek) {
    case "Monday":
      console.log("Start of the work week");
      break;
    case "Tuesday":
      console.log("Twice because good");
      break;
    case "Wednesday":
      console.log("Have a good day!");
      break;
    case "Thursday":
      console.log("Here come the weekend");
      break;
    case "Friday":
      console.log("Time to Kidush");
      break;
    case "Saturday":
      console.log("A beautiful day to go sea");
      break;
    case "Sunday":
      console.log("Take a rest!");
      break;
  }
}
let message = getDayMassage("Sunday");
