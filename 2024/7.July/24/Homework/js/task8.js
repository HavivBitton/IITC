// Task 8
// Substring Extraction

function extractInitials(firstName, lastName) {
  let upperFirstName = firstName.toUpperCase();
  let upperLastName = lastName.toUpperCase();
  console.log(upperFirstName[0] + "." + upperLastName[0] + ".");
}
extractInitials("haviv", "bitton");

// String Replacement

function maskEmail(email) {
  let index1 = email.indexOf("@");
  let replace1 = email.substring(index1);
  console.log("*****" + replace1);
}
maskEmail("haviv4@gmail.com");

// Nasted If Else

function gradeCalculator(score) {
  if (score >= 90) console.log("A");
  else if (score >= 80) console.log("B");
  else if (score >= 70) console.log("C");
  else if (score >= 60) console.log("D");
  else console.log("F");
}
gradeCalculator(40);

// Complex Boolean
function canVote(age, isCitizen) {
  if (age >= 18 && isCitizen) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are  not eligible to vote");
  }
}
canVote(25, true);
