// Srings and Number Conversion

function convertToUpperCaseAndAddAge(name, age) {
  let upperName = name.toUpperCase();
  console.log(upperName + age);
}
convertToUpperCaseAndAddAge("haviv", 24);

// Capitalize First Letter

function capitalize(word) {
  let firstLetter = word.charAt(0);
  let upperFirstLetter = firstLetter.toUpperCase();
  console.log(upperFirstLetter + word.substring(1));
}
capitalize("haviv");

// Check Substring

function containsSubstring(mainString, subString) {
  if (mainString.includes(subString)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
containsSubstring("haviv bitton", "haviv");
