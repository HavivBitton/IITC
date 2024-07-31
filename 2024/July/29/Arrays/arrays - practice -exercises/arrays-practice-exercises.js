// # JavaScript Arrays Practice Exercises

// 1. Create an array of your five favorite foods.
//    Hint: Use square brackets and separate items with commas.
//    [Learn more about creating arrays](https://www.w3schools.com/js/js_arrays.asp)
let fruits = ["banana", "apple", "kiwi", "mango", "watermelon"];
console.log(fruits); // ["banana", "apple", "kiwi", "mango", "watermelon"] (5)

// 2. Access and print the third item in your favorite foods array.
//    Hint: Remember that array indexing starts at 0.
//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)
console.log(`${fruits[2]}, ${fruits[3]}, ${fruits[4]}`); //kiwi, mango, watermelon

// 3. Change the second item in your array to a different food.
//    Hint: Use array indexing to modify an element.
//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)
fruits[1] = "melon";
console.log(fruits); //["banana", "melon", "kiwi", "mango", "watermelon"] (5)

// 4. Add a new food to the end of your array using `push()`.
//    Hint: The push() method adds an element to the end of an array.
//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)
fruits.push("apple");
console.log(fruits); //["banana", "melon", "kiwi", "mango", "watermelon", "apple"] (6)

// 5. Remove the first food from your array using `shift()`.
//    Hint: The shift() method removes the first element from an array.
//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)
fruits.shift();
console.log(fruits); //["melon", "kiwi", "mango", "watermelon", "apple"] (5)

// 6. Create a loop that prints all the foods in your array.
//    Hint: Use a for loop and the array's length property.
//    [Learn more about looping through arrays](https://www.w3schools.com/js/js_array_iteration.asp)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 7. Find the index of a specific food in your array using `indexOf()`.
//    Hint: indexOf() returns the first index at which a given element can be found.
//    [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
let indexOF = fruits.indexOf("kiwi");
console.log(indexOF); // 1

// 8. Create an array of numbers and use a loop to calculate their sum.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.
//    [Learn more about array iteration](https://www.w3schools.com/js/js_array_iteration.asp)
num = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum); //15

// Remember to test your code and experiment with different inputs!
