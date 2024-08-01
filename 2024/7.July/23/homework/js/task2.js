// Task 2
// functions and string methods

function greet(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  fullNameUpper = fullName.toUpperCase();
  return "Hello " + fullNameUpper + ", Wellcome to IITC Bootcamp";
}
console.log(greet("Haviv", "Bitton"));
