// Task 6
// Nested If Statements

function checkDiscount(age, isMember) {
  if (isMember) {
    if (age < 18) console.log("You have 20% discount");
    else if (18 <= age < 64) console.log("You have 10% discount");
    else if (age >= 64) console.log("You have 30% discount");
  } else {
    if (age < 18) console.log("You have 10% discount");
    else if (18 <= age < 64) console.log("No discount available");
    else if (age >= 64) console.log("You have 20% discount");
  }
}
let member1 = checkDiscount(40, false);
