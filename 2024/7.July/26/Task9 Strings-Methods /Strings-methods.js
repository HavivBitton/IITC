// ## String Method Exercises (1-20)

// 1. Write a function that takes a string and returns its length.
//    Hint: Use the `length` property.
//    [Learn more about string length](https://www.w3schools.com/jsref/jsref_length_string.asp)
function strLength(string) {
  return string.length;
}
console.log(strLength("haviv")); // 5

// 2. Create a function that converts a string to uppercase.
//    Hint: Use the `toUpperCase()` method.
//    [Learn more about toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp)
function toUpperCase(string) {
  return string.toUpperCase();
}
console.log(toUpperCase("haviv")); // HAVIV

// 3. Write a function that converts a string to lowercase.
//    Hint: Use the `toLowerCase()` method.
//    [Learn more about toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp)
function toLowerCase(string) {
  return string.toLowerCase();
}
console.log(toLowerCase("HAVIV")); //haviv

// 4. Create a function that returns the character at a specified index in a string.
//    Hint: Use the `charAt()` method.
//    [Learn more about charAt()](https://www.w3schools.com/jsref/jsref_charat.asp)
function strIndex(string) {
  return string[2];
}
console.log(strIndex("Haviv")); // v

// 5. Write a function that extracts a portion of a string between two specified indices.
//    Hint: Use the `substring()` method.
//    [Learn more about substring()](https://www.w3schools.com/jsref/jsref_substring.asp)
function extractsStr(string) {
  return string.substring(1, 3);
}
console.log(extractsStr("Haviv")); // av

// 6. Create a function that replaces all occurrences of a specified value in a string.
//    Hint: Use the `replace()` method with a regular expression.
//    [Learn more about replace()](https://www.w3schools.com/jsref/jsref_replace.asp)
function replaceStr(sentence, string, replacingStr) {
  return sentence.replace(string, replacingStr);
}
console.log(replaceStr("Hello Haviv", "Haviv", "there")); // Hello there

// 7. Write a function that removes whitespace from both ends of a string.
//    Hint: Use the `trim()` method.
//    [Learn more about trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp)
function removesSpace(string) {
  return string.trim();
}
console.log(removesSpace("     Haviv    ")); //haviv without the whitespace.

// 8. Create a function that checks if a string starts with a specified value.
//    Hint: Use the `startsWith()` method.
//    [Learn more about startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp)
function checkStartsWith(string, value) {
  return string.startsWith(value);
}
console.log(checkStartsWith("haviv", "h")); // true

// 9. Write a function that checks if a string ends with a specified value.
//    Hint: Use the `endsWith()` method.
//    [Learn more about endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp)
function checkEndsWith(string, value) {
  return string.endsWith(value);
}
console.log(checkEndsWith("haviv", "v")); //true

// 10. Create a function that searches a string for a specified value and returns the position.
//     Hint: Use the `indexOf()` method.
//     [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)
function searchesIndex(string, value) {
  return string.indexOf(value);
}
console.log(searchesIndex("Hello Haviv Bitton", "Haviv")); // 6

// 11. Write a function that splits a string into an array of substrings.
//     Hint: Use the `split()` method.
//     [Learn more about split()](https://www.w3schools.com/jsref/jsref_split.asp)
function splitString(string, value) {
  return string.split(value);
}
let newArray = splitString("Haviv Bitton", " ");
console.log(newArray); //["Haviv", "Bitton"]

// 12. Create a function that repeats a string a specified number of times.
//     Hint: Use the `repeat()` method.
//     [Learn more about repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp)
function repeatString(string, number) {
  return string.repeat(number);
}
console.log(repeatString("Ha ", 5)); // Ha Ha Ha Ha Ha

// 13. Write a function that concatenates two strings.
//     Hint: Use the concatenation operator (+) or the `concat()` method.
//     [Learn more about concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)
function connectionString(string1, string2) {
  return string1.concat(string2);
}
console.log(connectionString("haviv", "bitton")); //havivbitton

// 14. Create a function that pads a string with a specified character to a certain length.
//     Hint: Use the `padStart()` or `padEnd()` method.
//     [Learn more about padStart()](https://www.w3schools.com/jsref/jsref_padstart.asp)
function characterString(character, number) {
  return character.padStart(number, character);
}
console.log(characterString("h", 4)); //hhhh

// 15. Write a function that extracts the first n characters from a string.
//     Hint: Use the `slice()` method.
//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)
function firstNCharacters(string, n) {
  return string.slice(0, n);
}
console.log(firstNCharacters("Haviv Bitton", 5)); // Haviv

// 16. Create a function that replaces the first occurrence of a specified value in a string.
//     Hint: Use the `replace()` method without a regular expression.
//     [Learn more about replace()](https://www.w3schools.com/jsref/jsref_replace.asp)
function replaceFirstOcc(sentence, string, replaceStr) {
  return sentence.replace(string, replaceStr);
}
console.log(replaceFirstOcc("Hello Haviv", "H", "h")); //hello Haviv

// 17. Write a function that checks if a string includes a specified value.
//     Hint: Use the `includes()` method.
//     [Learn more about includes()](https://www.w3schools.com/jsref/jsref_includes.asp)
function CheckIncludes(s, string) {
  return s.includes(string);
}
console.log(CheckIncludes("Hello Haviv", "Haviv")); // true

// 18. Create a function that returns the last character of a string.
//     Hint: Use the `length` property and square bracket notation.
//     [Learn more about string characters](https://www.w3schools.com/js/js_strings.asp)
function lastCharacter(string) {
  return string[string.length - 1];
}
console.log(lastCharacter("Haviv")); //v

// 19. Write a function that checks if a string is empty.
//     Hint: Check if the `length` of the string is 0.
//     [Learn more about string length](https://www.w3schools.com/jsref/jsref_length_string.asp)
function emptyStr(string) {
  return string.length === 0;
}
console.log(emptyStr("")); //true

// 20. Create a function that returns a portion of a string from a specified index to the end.
//     Hint: Use the `slice()` method with only one argument.
//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)
function fromIndexToEnd(string, index) {
  return string.slice(index);
}
console.log(fromIndexToEnd("Haviv Bitton", 5)); // Bitton
