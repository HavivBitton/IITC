// 1. Create an array called `fruits` with three favorite fruits.
//    Hint: Use square brackets `[]` to create an array.
//    [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)
let fruits = ["mango", "banana", "watermelon"];

// 2. Add a new fruit to the end of the `fruits` array using the `push()` method.
//    Hint: `arrayName.push(newElement)` adds an element to the end.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
fruits.push("apple");
console.log(fruits); //["mango", "banana", "watermelon", "apple"] (4)

// 3. Remove the last fruit from the `fruits` array using the `pop()` method and store it in a variable called `lastFruit`.
//    Hint: `var lastItem = arrayName.pop()` removes and returns the last element.
//    [Learn more about pop()](https://www.w3schools.com/jsref/jsref_pop.asp)
fruits.pop();
console.log(fruits); //["mango", "banana", "watermelon"] (3)

// 4. Create an array of numbers from 1 to 5. Then, use `console.log()` to print the third element of this array.
//    Hint: Array indices start at 0, so the third element is at index 2.
//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)
let number = [1, 2, 3, 4, 5];
console.log(number[2]); //3

// 5. Change the second element of your `fruits` array to "kiwi".
//    Hint: Use array indexing to modify an element: `arrayName[1] = "kiwi"`.
//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)
fruits[1] = "kiwi";
console.log(fruits); //["mango", "kiwi", "watermelon"] (3)

// 6. Create an empty array called `colors`. Then add "red", "green", and "blue" to it using the `push()` method.
//    Hint: You can chain multiple `push()` calls or use one with multiple arguments.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
let color = [];
color.push("red", "blue", "green");
console.log(color); //["red", "blue", "green"] (3)

// 7. Remove the first element from your `colors` array using the `shift()` method.
//    Hint: `arrayName.shift()` removes the first element and returns it.
//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)
color.shift();
console.log(color); //["blue", "green"] (2)

// 8. Add "yellow" to the beginning of your `colors` array using the `unshift()` method.
//    Hint: `arrayName.unshift(newElement)` adds an element to the beginning.
//    [Learn more about unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
color.unshift("yellow");
console.log(color); //["yellow", "blue", "green"] (3)

// 9. Create an array of numbers and use a `for` loop to calculate the sum of all numbers in the array.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let num1 = [1, 4, 8, 2, 5];
let sum = 0;
for (let i = 0; i < num1.length; i++) {
  sum += num1[i];
}
console.log(sum); //20

// 10. Use the `indexOf()` method to find the position of "green" in your `colors` array.
//     Hint: `arrayName.indexOf(element)` returns the index of the first occurrence of the element.
//     [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
let a = color.indexOf("green");
console.log(a); //2

// 11. Create an array of five random numbers. Then use a `for` loop to find and console.log the largest number in the array.
//     Hint: Initialize a variable with the first element, then compare it with other elements in the loop.
//     [Learn more about Math.random()](https://www.w3schools.com/js/js_random.asp)
let largest = 0;
for (let i = 0; i < num1.length; i++) {
  if (num1[i] > largest) {
    largest = num1[i];
  }
}
console.log(largest); //8

// 12. Use the `slice()` method to create a new array containing the second and third elements of your `fruits` array.
//     Hint: `arrayName.slice(startIndex, endIndex)` extracts a portion of an array.
//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)
let newFruits = fruits.slice(1, 3);
console.log(fruits); //["mango", "kiwi", "watermelon"] (3)
console.log(newFruits); //["kiwi", "watermelon"] (2)

// 13. Create an array of numbers. Use the `filter()` method to create a new array containing only the even numbers.
//     Hint: The callback function for `filter()` should return `true` for even numbers.
//     [Learn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)
let num2 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = num2.filter((num) => num % 2 === 0);
console.log(evenNum);

// 14. Use the `join()` method to convert your `colors` array into a string where colors are separated by commas.
//     Hint: `arrayName.join(separator)` joins all elements into a string.
//     [Learn more about join()](https://www.w3schools.com/jsref/jsref_join.asp)
console.log(color.join()); //yellow,blue,green

// 15. Create two arrays of numbers. Use the `concat()` method to combine them into a single array.
//     Hint: `array1.concat(array2)` combines two arrays.
//     [Learn more about concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)
array1 = [1, 2, 3];
array2 = [4, 5, 6];
console.log(array1.concat(array2)); //[1, 2, 3, 4, 5, 6] (6)

// 16. Use the `reverse()` method to reverse the order of elements in your `fruits` array.
//     Hint: `arrayName.reverse()` reverses the array in place.
//     [Learn more about reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)
console.log(fruits); //["mango", "kiwi", "watermelon"] (3)
console.log(fruits.reverse()); //["watermelon", "kiwi", "mango"] (3)

// 17. HARD: Create an array of names. Use the `map()` method to create a new array where each name is prefixed with "Hello, ".
//     Hint: The callback function for `map()` should return the modified string.
//     [Learn more about map()](https://www.w3schools.com/jsref/jsref_map.asp)

let name1 = ["haviv", "may", "daniel"];
let helloName = name1.map((string) => `Hello ${string}`);
console.log(helloName); //["Hello haviv", "Hello may", "Hello daniel"] (3)

// 18. Use the `every()` method to check if all numbers in an array are greater than 0.
//     Hint: The callback function for `every()` should return a boolean.
//     [Learn more about every()](https://www.w3schools.com/jsref/jsref_every.asp)
let num = [-1, 3, -4, 5, 2, -5];
let posNum = num.every((num) => num > 0);
console.log(posNum); // false

// 19. Create an array of numbers. Use the `find()` method to get the first number greater than 10.
//     Hint: The callback function for `find()` should return `true` for the desired element.
//     [Learn more about find()](https://www.w3schools.com/jsref/jsref_find.asp)
let num3 = [1, 4, 23, 6, 13];
console.log(num3.find((num) => num > 18));

// 20. Use the `some()` method to check if your `fruits` array contains the fruit "banana".
//     Hint: The callback function for `some()` should return `true` if the element is "banana".
//     [Learn more about some()](https://www.w3schools.com/jsref/jsref_some.asp)
console.log(fruits);
console.log(fruits.some((fruit) => fruit === "banana")); // false

// 21. HARD: Create an array of numbers. Use the `reduce()` method to calculate the product of all numbers in the array.
//     Hint: The callback function for `reduce()` should multiply the accumulator by the current value.
//     [Learn more about reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

// 22. Use a `for` loop to create an array containing the squares of numbers from 1 to 10.
//     Hint: Initialize an empty array and use `push()` inside the loop to add squared values.
//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)
let squarNum = [];
for (let i = 1; i <= 10; i++) {
  squarNum.push(i * i);
}
console.log(squarNum);

// 23. HARD: Create an array of words. Use the `filter()` method to create a new array containing only words with more than 5 letters.
//     Hint: The callback function for `filter()` should check the length of each word.
//     [Learn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)
let words = ["haviv", "bitton", "hello", "watermelon"];
let longWord = words.filter((word) => word.length > 5);
console.log(longWord); //["bitton", "watermelon"] (2)

// 24. Use the `includes()` method to check if your `colors` array includes the color "purple".
//     Hint: `arrayName.includes(element)` returns `true` if the element is in the array.
//     [Learn more about includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)
console.log(color); //["yellow", "blue", "green"] (3)
console.log(color.includes("purple")); //false

// 25. IMPOSIBLE: Create a 2D array representing a tic-tac-toe board. Fill it with "X", "O", and empty strings. Then, write a function that console.logs the board in a readable format.
//     Hint: Use nested arrays to create a 2D array. Use nested loops to print the board.
//     [Learn more about multidimensional arrays](https://www.w3schools.com/js/js_array_methods.asp)
let tinTacToe = [
  ["x", "o", " "],
  ["x", "x", "o"],
  [" ", "o", " "],
];
console.log(tinTacToe);
let print1 = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    print1 += tinTacToe[i][j] + ", ";
  }
  print1 += "\n";
}
console.log(print1);
