// ## Basic Syntax and Declaration
// [W3Schools Array Declaration](https://www.w3schools.com/js/js_arrays.asp)

// 1. Declare an empty array called `fruits`.
//    Hint: Use square brackets `[]` to create an empty array.
let fruits = [];

// 2. Create an array `numbers` with the values 1, 2, 3, 4, and 5.
//    Hint: Separate values with commas inside square brackets.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); //[1, 2, 3, 4, 5] (5)

// 3. Initialize an array `colors` with three string values: "red", "green", "blue".
//    Hint: Use quotes for string values in the array.
let color = ["red", "green", "blue"];
console.log(color); //["red", "green", "blue"] (3)

// 4. Create an array `mixed` with different data types: a number, a string, and a boolean.
//    Hint: JavaScript arrays can hold multiple data types.
let mixed = [true, 4, "haviv"];
console.log(mixed); //[true, 4, "haviv"] (3)

// 5. Declare an array `seasons` with the four seasons as string values.
//    Hint: Think about the names of the four seasons.
let seasons = ["Summer", "Winter", "Spring", "Autumn"];
console.log(seasons); //["Summer", "Winter", "Spring", "Autumn"] (4)

// ## Array Length
// [W3Schools Array Length](https://www.w3schools.com/js/js_array_length.asp)

// 6. Write a statement to print the length of the `numbers` array.
//    Hint: Use the `length` property of the array.
console.log(numbers.length); //5

// 7. Create an array `emptyCheck` and write an if statement to check if it's empty.
//    Hint: An empty array has a length of 0.
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log("The array is empty");
} else {
  console.log("The array is not empty");
}

// 8. Initialize an array `dynamic` with 5 elements and print its length.
//    Hint: The length will be equal to the number of elements.
let dynamic = [true, 1, "may", null, Infinity];
console.log(dynamic.length); //5

// 9. Add an element to `dynamic` and print the new length.
//    Hint: Adding an element increases the length by 1.
dynamic.push("haviv");
console.log(dynamic.length); //6

// 10. Remove an element from `dynamic` and print the updated length.
dynamic.shift();
console.log(dynamic.length); //5
//     Hint: Removing an element decreases the length by 1.

// ## Accessing Elements
// [W3Schools Accessing Array Elements](https://www.w3schools.com/js/js_array_access.asp)

// 11. Print the first element of the `colors` array.
//     Hint: Array indices start at 0.
console.log(color[1]); //green

// 12. Access and display the last element of the `seasons` array.
//     Hint: Use `array.length - 1` to get the last index.
console.log(seasons[seasons.length - 1]); //Autumn

// 13. Print the middle element of the `numbers` array.
//     Hint: Calculate the middle index using `Math.floor()`.
let middleArr = Math.floor(numbers.length / 2);
console.log(numbers); //[1, 2, 3, 4, 5] (5)
console.log(numbers[middleArr]); //3

// 14. Try to access an index that doesn't exist in `fruits` and print the result.
//     Hint: Accessing a non-existent index returns `undefined`.
console.log(fruits.length); //0
console.log(fruits[1]); //undefined

// 15. Use a template literal to print "The second color is [second color]" using the `colors` array.
//     Hint: Use `${}` in template literals to embed expressions.
console.log(`The second color is ${color[1]}`); //The second color is green

// ## Modifying Elements
// [W3Schools Changing Array Elements](https://www.w3schools.com/js/js_array_methods.asp)

// 16. Change the first element of `fruits` to "apple".
//     Hint: Assign a new value using the index.
fruits[0] = "apple";

// 17. Update the last element of `numbers` to be 10.
//     Hint: Use `array.length - 1` to get the last index.
numbers[numbers.length - 1] = 10;

// 18. Double the value of the third element in the `numbers` array.
//     Hint: Multiply the current value by 2.
console.log(2 * numbers[2]); //6

// 19. Change all elements in `colors` to uppercase.
//     Hint: Use a loop and the `toUpperCase()` method.
// console.log(color); //["red", "green", "blue"] (3)
// for (let i = 0; i < color.length; i++) {
//   color[i] = color[i].toUpperCase();
// }
// console.log(color); //["RED", "GREEN", "BLUE"] (3)

// 20. Swap the first and last elements of the `seasons` array.
//     Hint: Use a temporary variable to hold one value during the swap.
console.log(seasons); // ["Summer", "Winter", "Spring", "Autumn"](4);
let temporary = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = temporary;
console.log(seasons); //["Autumn", "Winter", "Spring", "Summer"] (4)

// ## Array Methods: push() and pop()
// [W3Schools Array push()](https://www.w3schools.com/jsref/jsref_push.asp)
// [W3Schools Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

// 21. Add "orange" to the end of the `fruits` array using `push()`.
//     Hint: `push()` adds elements to the end of an array.
fruits.push("orange");
console.log(fruits); //["apple", "orange"] (2)

// 22. Remove the last element from `numbers` using `pop()` and print the removed element.
//     Hint: `pop()` removes and returns the last element.
console.log(numbers); //[1, 2, 3, 4, 10] (5)
console.log(numbers.pop()); //10
console.log(numbers); //[1, 2, 3, 4] (4)

// 23. Add three colors to `colors` in a single line using `push()`.
//     Hint: `push()` can accept multiple arguments.
console.log(color); //["RED", "GREEN", "BLUE"] (3)
color.push("white", "black", "pink");
console.log(color); //["RED", "GREEN", "BLUE", "white", "black", "pink"](6);

// 24. Create a loop that `push()`es numbers 1 to 5 into an empty array.
//     Hint: Use a for loop with `push()` inside.
let newNumArr = [];
for (let i = 1; i <= 5; i++) {
  newNumArr.push(i);
}
console.log(newNumArr); //[1, 2, 3, 4, 5] (5)

// 25. Use `pop()` in a loop to empty an array and print each removed element.
//     Hint: Continue the loop while the array's length is greater than 0.
console.log(newNumArr);
for (let i = 1; i <= 5; i++) {
  console.log(newNumArr.pop(i)); //5,4,3,2,1
}
console.log(newNumArr); //[] (0

// ## Array Methods: unshift() and shift()
// [W3Schools Array unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
// [W3Schools Array shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 26. Add "mango" to the beginning of `fruits` using `unshift()`.
//     Hint: `unshift()` adds elements to the beginning of an array.
fruits.unshift("mango");
console.log(fruits); //["mango", "apple", "orange"] (3)

// 27. Remove the first element from `numbers` using `shift()` and print the removed element.
//     Hint: `shift()` removes and returns the first element.
console.log(numbers); //[1, 2, 3, 4] (4)
numbers.shift();
console.log(numbers); //[ 2, 3, 4] (3)

// 28. Add three numbers to the beginning of `numbers` in a single line using `unshift()`.
//     Hint: Like `push()`, `unshift()` can accept multiple arguments.
numbers.unshift(-1, 0, 1);
console.log(numbers); //[-1, 0, 1, 2, 3, 4] (6)

// 29. Create a loop that `unshift()`s numbers 5 to 1 into an empty array.
//     Hint: Use a for loop that counts backwards.
let numberArray = [];
for (let i = 5; i > 0; i--) {
  numberArray.unshift(i);
}
console.log(numberArray); //[1, 2, 3, 4, 5] (5)

// 30. Use `shift()` in a loop to empty an array and print each removed element.
//     Hint: Similar to the `pop()` loop, but use `shift()` instead.
let numberLoop = numberArray.length;
for (let i = 0; i < numberLoop; i++) {
  console.log(numberArray.shift());
}
console.log(numberArray); //[] (0)

// ## Array Methods: indexOf() and lastIndexOf()
// [W3Schools Array indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
// [W3Schools Array lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp)

// 31. Find the index of "green" in the `colors` array.
//     Hint: `indexOf()` returns the first occurrence of an element.

console.log(color); // ["red", "green", "blue", "white", "black", "pink"] (6)
console.log(color.indexOf("green")); //1

// 32. Check if "winter" exists in `seasons` using `indexOf()`.
//     Hint: `indexOf()` returns -1 if the element is not found.
if (seasons.indexOf("Winter") !== -1) {
  console.log(`Winter is exists in index ${seasons.indexOf("Winter")}`);
} else {
  console.log("winter is not exists");
}
// 33. Add "red" to the end of `colors` and find its last occurrence using `lastIndexOf()`.
//     Hint: `lastIndexOf()` searches from the end of the array.
color.push("red");
console.log(color.lastIndexOf("red")); //6

// 34. Create an array with duplicate values and use `indexOf()` and `lastIndexOf()` to find the first and last occurrences.
//     Hint: Compare the results of both methods.
let numberArray1 = [1, 2, 3, 4, 1, 5];
console.log(numberArray1.indexOf(1)); // 0
console.log(numberArray1.lastIndexOf(1)); //4

// 35. Use `indexOf()` to check if an array contains a specific value, and print a boolean result.
//     Hint: Compare the result of `indexOf()` to -1.
if (seasons.indexOf("Winter") !== -1) {
  console.log(`Winter is exists in index ${seasons.indexOf("Winter")}`);
} else {
  console.log("winter is not exists");
}

// ## Array Methods: includes()
// [W3Schools Array includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)

// 36. Check if `fruits` includes "apple" and print the result.
//     Hint: `includes()` returns a boolean.
console.log(fruits); //["mango", "apple", "orange"] (3)
if (fruits.includes("apple")) {
  console.log(true); // true
}
// 37. Verify if `numbers` includes the number 10.
//     Hint: `includes()` works with any data type.
console.log(numbers); //[-1, 0, 1, 2, 3, 4] (6)
if (numbers.includes(10)) {
  console.log(true);
} else console.log(false); //false

// 38. Use `includes()` with a starting index to check for "blue" in the second half of `colors`.
//     Hint: `includes()` accepts an optional second argument for the starting position.
console.log(color); //["red", "green", "blue", "white", "black", "pink", "red"] (7)
let startIndex = Math.floor(color.length / 2);
let isBlueInSecondHalf = color.includes("blue", startIndex);
console.log(isBlueInSecondHalf); //false

// 39. Create a function that returns true if an array includes a specific value, false otherwise.
//     Hint: Use `includes()` inside the function.
if (color.includes("blue")) {
  console.log(true); //true
} else {
  console.log(false);
}
// 40. Use `includes()` in an if statement to print different messages based on whether an element exists.
//     Hint: Use a ternary operator or if-else statement.
if (color.includes("blue")) {
  console.log(true); //true
} else {
  console.log(false);
}

// ## Array Methods: slice()
// [W3Schools Array slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)

// 41. Extract the first three elements from `numbers` using `slice()`.
//     Hint: `slice()` with one argument extracts from that index to the end.
console.log(numbers); //[-1, 0, 1, 2, 3, 4] (6)
let newNumberArray = numbers.slice(0, 3);
console.log(newNumberArray); //[-1, 0, 1] (3)

// 42. Get the last two elements from `colors` using `slice()`.
//     Hint: Use negative indices with `slice()`.
console.log(color); //["red", "green", "blue", "white", "black", "pink", "red"] (7)
console.log(color.slice(color.length - 3, color.length - 1)); //["black", "pink"] (2)

// 43. Extract elements from index 1 to 3 (exclusive) from `seasons`.
//     Hint: `slice()` second argument is exclusive.
console.log(seasons.slice(1, 3)); //
// 44. Use `slice()` to create a copy of an entire array.
//     Hint: `slice()` without arguments copies the whole array.

// 45. Extract elements from the middle of an array using `slice()`.
//     Hint: Calculate start and end indices based on array length.

// ## Array Methods: splice()
// [W3Schools Array splice()](https://www.w3schools.com/jsref/jsref_splice.asp)

// 46. Remove two elements from the middle of `fruits` using `splice()`.
//     Hint: `splice()` can remove elements from any position.

// 47. Replace an element in `numbers` with two new elements using `splice()`.
//     Hint: Use `splice()` with 3 or more arguments to replace elements.

// 48. Insert three new elements between existing elements in `colors` without removing any.
//     Hint: Set the delete count to 0 when using `splice()` to insert.

// 49. Remove the first element and add two new elements at the beginning using a single `splice()` call.
//     Hint: `splice()` can remove and add elements simultaneously.

// 50. Use `splice()` to empty an array by removing all elements.
//     Hint: Remove elements from index 0 to the array's length.
