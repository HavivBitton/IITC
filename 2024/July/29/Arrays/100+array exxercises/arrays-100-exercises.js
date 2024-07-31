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

// 12. Access and display the last element of the `seasons` array.
//     Hint: Use `array.length - 1` to get the last index.

// 13. Print the middle element of the `numbers` array.
//     Hint: Calculate the middle index using `Math.floor()`.

// 14. Try to access an index that doesn't exist in `fruits` and print the result.
//     Hint: Accessing a non-existent index returns `undefined`.

// 15. Use a template literal to print "The second color is [second color]" using the `colors` array.
//     Hint: Use `${}` in template literals to embed expressions.

// ## Modifying Elements
// [W3Schools Changing Array Elements](https://www.w3schools.com/js/js_array_methods.asp)

// 16. Change the first element of `fruits` to "apple".
//     Hint: Assign a new value using the index.

// 17. Update the last element of `numbers` to be 10.
//     Hint: Use `array.length - 1` to get the last index.

// 18. Double the value of the third element in the `numbers` array.
//     Hint: Multiply the current value by 2.

// 19. Change all elements in `colors` to uppercase.
//     Hint: Use a loop and the `toUpperCase()` method.

// 20. Swap the first and last elements of the `seasons` array.
//     Hint: Use a temporary variable to hold one value during the swap.

// ## Array Methods: push() and pop()
// [W3Schools Array push()](https://www.w3schools.com/jsref/jsref_push.asp)
// [W3Schools Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

// 21. Add "orange" to the end of the `fruits` array using `push()`.
//     Hint: `push()` adds elements to the end of an array.

// 22. Remove the last element from `numbers` using `pop()` and print the removed element.
//     Hint: `pop()` removes and returns the last element.

// 23. Add three colors to `colors` in a single line using `push()`.
//     Hint: `push()` can accept multiple arguments.

// 24. Create a loop that `push()`es numbers 1 to 5 into an empty array.
//     Hint: Use a for loop with `push()` inside.

// 25. Use `pop()` in a loop to empty an array and print each removed element.
//     Hint: Continue the loop while the array's length is greater than 0.

// ## Array Methods: unshift() and shift()
// [W3Schools Array unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
// [W3Schools Array shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 26. Add "mango" to the beginning of `fruits` using `unshift()`.
//     Hint: `unshift()` adds elements to the beginning of an array.

// 27. Remove the first element from `numbers` using `shift()` and print the removed element.
//     Hint: `shift()` removes and returns the first element.

// 28. Add three numbers to the beginning of `numbers` in a single line using `unshift()`.
//     Hint: Like `push()`, `unshift()` can accept multiple arguments.

// 29. Create a loop that `unshift()`s numbers 5 to 1 into an empty array.
//     Hint: Use a for loop that counts backwards.

// 30. Use `shift()` in a loop to empty an array and print each removed element.
//     Hint: Similar to the `pop()` loop, but use `shift()` instead.

// ## Array Methods: indexOf() and lastIndexOf()
// [W3Schools Array indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
// [W3Schools Array lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp)

// 31. Find the index of "green" in the `colors` array.
//     Hint: `indexOf()` returns the first occurrence of an element.

// 32. Check if "winter" exists in `seasons` using `indexOf()`.
//     Hint: `indexOf()` returns -1 if the element is not found.

// 33. Add "red" to the end of `colors` and find its last occurrence using `lastIndexOf()`.
//     Hint: `lastIndexOf()` searches from the end of the array.

// 34. Create an array with duplicate values and use `indexOf()` and `lastIndexOf()` to find the first and last occurrences.
//     Hint: Compare the results of both methods.

// 35. Use `indexOf()` to check if an array contains a specific value, and print a boolean result.
//     Hint: Compare the result of `indexOf()` to -1.
