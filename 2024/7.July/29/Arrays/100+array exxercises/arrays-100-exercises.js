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
let seasonsCopy = seasons.slice();
console.log(seasonsCopy); //["Autumn", "Winter", "Spring", "Summer"] (4)

// 45. Extract elements from the middle of an array using `slice()`.
//     Hint: Calculate start and end indices based on array length.
console.log(seasons.slice(1, seasons.length - 1)); //["Winter", "Spring"] (2)

// ## Array Methods: splice()
// [W3Schools Array splice()](https://www.w3schools.com/jsref/jsref_splice.asp)

// Create an Array
let fruits1 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];

// 46. Remove two elements from the middle of `fruits` using `splice()`.
//     Hint: `splice()` can remove elements from any position.

fruits1.splice(2, 2);
console.log(fruits1); //["Banana", "Orange", "kiwi"]

// 47. Replace an element in `numbers` with two new elements using `splice()`.
//     Hint: Use `splice()` with 3 or more arguments to replace elements.
console.log(numbers); //[-1, 0, 1, 2, 3, 4]
numbers.splice(2, 2, 10, 12);
console.log(numbers); //[-1, 0, 10, 12, 3, 4] (6)

// 48. Insert three new elements between existing elements in `colors` without removing any.
//     Hint: Set the delete count to 0 when using `splice()` to insert.
console.log(color); //["red", "green", "blue", "white", "black", "pink", "red"](7);
color.splice(2, 0, "yellow", "grey", "silver");
console.log(color);
//["red", "green", "yellow", "grey", "silver", "blue", "white", "black", "pink", "red"] (10)

// 49. Remove the first element and add two new elements at the beginning using a single `splice()` call.
//     Hint: `splice()` can remove and add elements simultaneously.
console.log(fruits1); //["Banana", "Orange", "kiwi"]
fruits1.splice(0, 1, "apple", "mango");
console.log(fruits1); //["apple", "mango", "Orange", "kiwi"] (4)

// 50. Use `splice()` to empty an array by removing all elements.
//     Hint: Remove elements from index 0 to the array's length.
color.splice(0, color.length);
console.log(color); //[] (0)

// ## Array Methods: concat()
// [W3Schools Array concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)

// 51. Concatenate `fruits` and `colors` into a new array.
//     Hint: `concat()` returns a new array without modifying the original arrays.
fruits = ["Banana", "Orange", "Apple"];
color = ["red", "green", "blue"];
let colorFruits = color.concat(fruits);
console.log(colorFruits);

// 52. Join three different arrays using `concat()`.
//     Hint: Chain multiple `concat()` calls or pass multiple arguments.
numbers = [1, 2, 3];
let colorFruitsNum = color.concat(fruits.concat(numbers));
console.log(colorFruitsNum);
//["red", "green", "blue", "Banana", "Orange", "Apple", 1, 2, 3] (9)

// 53. Use `concat()` to add new elements to the end of an array without modifying the original.
//     Hint: `concat()` can take both arrays and individual elements as arguments.
console.log(numbers.concat(5)); //[1, 2, 3, 5] (4)

// 54. Combine an array with itself to create a doubled array.
//     Hint: Use an array as an argument to `concat()`.
console.log(numbers); //[1, 2, 3] (3)
console.log(numbers.concat(numbers)); //[1, 2, 3, 1, 2, 3] (6)

// 55. Concatenate an array with multiple individual elements.
//     Hint: Pass individual elements as separate arguments to `concat()`.
console.log(numbers.concat(5, 6)); //[1, 2, 3, 5, 6] (5)

// ## Array Methods: join()
// [W3Schools Array join()](https://www.w3schools.com/jsref/jsref_join.asp)

// 56. Convert `fruits` into a comma-separated string using `join()`.
//     Hint: Default separator for `join()` is a comma.
fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsText = fruits.join(", ");
console.log(fruitsText); //Banana, Orange, Apple, Mango

// 57. Join elements of `numbers` with a dash between them.
//     Hint: Pass the desired separator as an argument to `join()`.
console.log(numbers); //[1, 2, 3] (3)
let dashNum = numbers.join("-");
console.log(dashNum); // 1-2-3

// 58. Create a function that takes an array and a separator, then returns the joined string.
//     Hint: Use the separator parameter in the `join()` method.
function arraySeparator(array, separator) {
  let result = array.join(separator);
  return result;
}
numbers = [1, 2, 3];
let dash = "-/-";
console.log(arraySeparator(numbers, dash)); //  1-/-2-/-3

// 59. Join array elements with an empty string to create a single word.
//     Hint: Pass an empty string as the separator.
let name1 = ["h", "a", "v", "i", "v"];
console.log(name1.join("")); // haviv

// 60. Use `join()` and `split()` to reverse the order of words in a sentence.
//     Hint: Split the sentence into words, reverse the array, then join.

// ## Array Methods: reverse()
// [W3Schools Array reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)

// 61. Reverse the order of elements in `seasons`.
//     Hint: `reverse()` modifies the original array.
console.log(seasons); // ["Autumn", "Winter", "Spring", "Summer"] (4)
console.log(seasons.reverse()); // ["Summer", "Spring", "Winter", "Autumn"] (4)

// 62. Create a function to check if a word is a palindrome using `split()`, `reverse()`, and `join()`.
//     Hint: Compare the original word with its reversed version.

function isPalindrome(word) {
  let splitWord = word.split("");
  let reversedWord = splitWord.reverse();
  if (reversedWord.join("") === word) return "Palindrome";
  else return "not a Palindrome";
}
console.log(isPalindrome("haviv"));

// 63. Reverse `numbers` and then map each element to its square.
//     Hint: Chain `reverse()` and `map()` methods.
numbers = [4, 9, 16, 25];
numbers = numbers.reverse();
let squareNum = numbers.map(Math.sqrt);
console.log(squareNum); //[5, 4, 3, 2] (4)

// 64. Use `reverse()` to reverse the order of characters in a string (Hint: use `split()` first).
//     Hint: Convert the string to an array, reverse it, then join back to a string.
name1 = "haviv";
name1 = name1.split("");
console.log(name1); //["h", "a", "v", "i", "v"]
reverseName = name1.reverse();
console.log(reverseName.join("")); // vivah

// 65. Implement a function that reverses an array without using the `reverse()` method.
//     Hint: Use a loop to swap elements from the start and end of the array.
function reverseString(string) {
  let stringArray = string.split("");
  let reverseStr = [];
  for (let i = stringArray.length - 1; i >= 0; i--) {
    reverseStr.push(stringArray[i]);
  }
  return reverseStr.join("");
}
console.log(reverseString("bitton")); //nottib

// ## Array Methods: sort()
// [W3Schools Array sort()](https://www.w3schools.com/jsref/jsref_sort.asp)

// 66. Sort the `fruits` array in alphabetical order.
//     Hint: Default `sort()` works alphabetically for strings.

console.log(fruits); //["Banana", "Orange", "Apple", "Mango"] (4)
console.log(fruits.sort()); //["Apple", "Banana", "Mango", "Orange"] (4)

// 67. Sort `numbers` in ascending order.
//     Hint: Use a compare function for numerical sort.
numbers = [25, 9, 16, 4];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); //[4, 9, 16, 25] (4)

// 68. Sort `numbers` in descending order.
//     Hint: Modify the compare function to sort in reverse order.
numbers = [25, 9, 16, 4];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); //[25, 16, 9, 4] (4)

// 69. Create an array of words and sort them by length.
//     Hint: Use a compare function that compares string lengths.

// let words = ["aaaa", "aaa", "aa", "aaaaa"];
// words.sort((a, b) => a.length - b.length);
// console.log(words);

let words = ["aaaa", "aaa", "aa", "aaaaa"];
words.sort(function (a, b) {
  return a.length - b.length;
});
console.log(words); //["aa", "aaa", "aaaa", "aaaaa"] (4)

// 70. Implement a custom sort to order an array of numbers based on their remainder when divided by 3.
//     Hint: Use the modulo operator (%) in the compare function.

numbers = [25, 9, 17, 4];
numbers.sort(function (a, b) {
  return (a % 3) - (b % 3);
});
console.log(numbers); //[9, 25, 4, 17] (4)

// SKIP IT:
// ## Array Iteration: forEach()
// [W3Schools Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)

// 71. Use `forEach()` to print each element in `colors`.
//     Hint: The callback function in `forEach()` receives each element as an argument.

color.forEach((a) => console.log(a));

// 72. Double each number in `numbers` using `forEach()`.
//     Hint: Modify the original array within the `forEach()` callback.
console.log(numbers); //[9, 25, 4, 17](4);
numbers.forEach((a) => console.log(a * a)); // 81 , 625 , 16 , 289

// 73. Use `forEach()` to create an HTML list from an array of strings.
//     Hint: Concatenate HTML tags within the `forEach()` callback.

// 74. Implement a simple search function using `forEach()`.
//     Hint: Use a condition inside the `forEach()` callback to find matching elements.
function searchArray(array, target) {
  let resultIndex = -1;
  array.forEach((element, index) => {
    if (element === target) {
      resultIndex = index;
      return;
    }
  });
  return resultIndex;
}
numbers = [5, 3, 8, 1, 2];
let target = 8;
let index = searchArray(numbers, target);

console.log(index); // Output: 2

// 75. Use `forEach()` to count how many elements in an array meet a certain condition.
//     Hint: Increment a counter variable in the `forEach()` callback when the condition is met.

// SKIP IT:
// ## Array Iteration: map()
// [W3Schools Array map()](https://www.w3schools.com/jsref/jsref_map.asp)

// 76. Use `map()` to create a new array with the lengths of each string in `fruits`.
//     Hint: Return the length of each string in the `map()` callback.

console.log(words); //["aa", "aaa", "aaaa", "aaaaa"] (4)
let length = words.map((words) => words.length);
console.log(length); //[2, 3, 4, 5] (4)

// 77. Square all numbers in `numbers` using `map()`.
//     Hint: Return the square of each number in the `map()` callback.

numbers = [25, 9, 16, 4];
console.log(numbers.map(Math.sqrt)); //[5, 3, 4, 2] (4)

// 78. Create a new array where each element is a boolean indicating if the original element is even.
//     Hint: Use the modulo operator (%) to check for even numbers.

// 79. Use `map()` to format an array of names into a new array of greetings.
//     Hint: Return a greeting string that includes the name in the `map()` callback.

// 80. Implement a function that uses `map()` to convert an array of Celsius temperatures to Fahrenheit.
//     Hint: Use the formula (C * 9/5) + 32 in the `map()` callback.

// ## Array Iteration: filter()
// [W3Schools Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

// 81. Use `filter()` to create a new array with only the even numbers from `numbers`.
//     Hint: Use the modulo operator (%) to check for even numbers in the `filter()` callback.

// 82. Filter `fruits` to only include fruits with more than 5 characters.
//     Hint: Check the length of each string in the `filter()` callback.

// 83. Create a function that filters an array to only include unique values.
//     Hint: Use `indexOf()` in the `filter()` callback to check for duplicates.

// 84. Use `filter()` to remove all falsy values from an array.
//     Hint: The callback can simply return the element itself, as falsy values will be filtered out.

// 85. Implement a search function using `filter()` that returns all elements containing a specific substring.
//     Hint: Use the `includes()` method on each element in the `filter()` callback.

// ## Array Iteration: find() and findIndex()
// [W3Schools Array find()](https://www.w3schools.com/jsref/jsref_find.asp)
// [W3Schools Array findIndex()](https://www.w3schools.com/jsref/jsref_findindex.asp)

// 86. Use `find()` to get the first element in `numbers` that's greater than 3.
//     Hint: Return true in the callback when the condition is met.

// 87. Find the index of the first color in `colors` that starts with the letter 'b'.
//     Hint: Use `startsWith()` method in the `findIndex()` callback.

// 88. Implement a function that finds the first prime number in an array.
//     Hint: Create a helper function to check if a number is prime, then use it in the `find()` callback.

// 89. Use `findIndex()` to locate the position of a specific season in `seasons`.
//     Hint: Compare each element to the target season in the `findIndex()` callback.

// 90. Create a function that uses `find()` to get the first element that satisfies a custom condition.
//     Hint: Pass the custom condition as a callback function to `find()`.

// ## Array Iteration: some() and every()
// [W3Schools Array some()](https://www.w3schools.com/jsref/jsref_some.asp)
// [W3Schools Array every()](https://www.w3schools.com/jsref/jsref_every.asp)

// 91. Check if `numbers` contains any even numbers using `some()`.
//     Hint: Use the modulo operator (%) to check for even numbers in the callback.

// 92. Verify if all elements in `fruits` have more than 3 characters using `every()`.
//     Hint: Check the length of each string in the `every()` callback.

// 93. Use `some()` to check if an array contains any negative numbers.
//     Hint: Compare each number to zero in the `some()` callback.

// 94. Implement a function using `every()` to check if all elements in an array are unique.
//     Hint: Use `indexOf()` and the current index in the `every()` callback to check for duplicates.

// 95. Use `some()` and `every()` together to check various conditions on an array.
//     Hint: Combine `some()` and `every()` checks using logical operators.

// SKIP IT:
// ## Array Iteration: reduce()
// [W3Schools Array reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

// 96. Sum all numbers in `numbers` using `reduce()`.
//     Hint: The accumulator in `reduce()` should be updated with each element.

// 97. Find the longest word in `fruits` using `reduce()`.
//     Hint: Compare the length of the current element with the accumulator in each iteration.

// 98. Use `reduce()` to count the occurrences of each element in an array.
//     Hint: Use an object as the accumulator to store counts.

// 99. Implement a `flatten()` function for nested arrays using `reduce()`.
//     Hint: Use `concat()` within the `reduce()` callback to merge nested arrays.

// 100. Use `reduce()` to group an array of objects by a specific property.
//      Hint: The accumulator should be an object with keys based on the grouping property.

// ## Advanced Exercises - for PROS
// 101. Implement a function that removes duplicate elements from an array without using Set.
//      Hint: Use `reduce()` or `filter()` with `indexOf()`.

// 102. Create a function that rotates an array by a given number of positions.
//      Hint: Use `slice()` and spread operator to rearrange elements.

// 103. Implement a simple version of `map()` using `reduce()`.
//      Hint: Build a new array within the `reduce()` callback.

// 104. Write a function that finds the intersection of two arrays.
//      Hint: Use `filter()` and `includes()` methods.

// 105. Create a function that generates an array of specified length containing random numbers.
//      Hint: Use a loop or `Array.from()` with a mapping function.
