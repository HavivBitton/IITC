// ## Basic Counting Exercises

// 1. Write a for loop that counts from 1 to 5 and prints each number.
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 2. Create a for loop that counts from 0 to 9 and prints each number.
// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// 3. Write a for loop that counts from 10 to 1 (backwards) and prints each number.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 4. Create a for loop that counts from 1 to 10, but only prints even numbers.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// 5. Write a for loop that counts from 1 to 10, but only prints odd numbers.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) console.log(i);
// }

// ## Counting with Different Increments

// 6. Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).
// for (let i = 0; i <= 15; i += 3) {
//   console.log(i);
// }

// 7. Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// 8. Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// 9. Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
// for (let i = 10; i >= 0; i -= 2) {
//   console.log(i);
// }

// 10. Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
// for (let i = 5; i <= 25; i += 5) {
//   console.log(i);
// }

// ## Printing Patterns

// 11. Write a for loop that prints "*" five times on the same line.
// let counts = "";
// for (let i = 0; i < 5; i ++) {
//   counts += "*";
// }
// console.log(counts);

// 12. Create a for loop that prints "Hello" three times, each on a new line.
// for (let i = 0; i < 3; i++) {
//   console.log("Hello" + "\n");
// }

// 13. Write a for loop that prints numbers from 1 to 3, each followed by "!".
// for (let i = 1; i <= 3; i++) {
//   console.log(`${i} !`);
// }

// 14. Create a for loop that prints "A" to "E" (one letter per iteration).
// for (let i = 0; i < 5; i++) {
//   console.log(String.fromCharCode("A".charCodeAt(0) + i));
// }

// 15. Write a for loop that prints "2" four times, separated by spaces.
// let string = "";
// for (let i = 1; i <= 4; i++) {
//   string += "2 ";
// }
// console.log(string);

// ## Working with Arrays

// 16. Given the array `[1, 2, 3, 4, 5]`, write a for loop to print each element.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 17. Given the array `['a', 'b', 'c', 'd']`, use a for loop to print each element.
// let arr = ["a", "b", "c", "d"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 18. Write a for loop to print each element of `[10, 20, 30, 40, 50]` backwards.
// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 19. Use a for loop to print every second element of `[1, 2, 3, 4, 5, 6]`.
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (i++ % 2 === 0) console.log(arr[i]);
// }

// 20. Given `['red', 'green', 'blue']`, use a for loop to print "Color: [color]" for each.
// let colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//   console.log("Color: " + colors[i]);
// }

// ## Simple Calculations in Loops

// 21. Write a for loop to calculate the sum of numbers from 1 to 5.
//     ```javascript
// let sum = 0;
// for (i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// 22. Create a for loop to calculate the product of numbers from 1 to 5.
//     ```javascript
// let product = 2;
// for (i = 1; i <= 5; i++) {
//   console.log(product * i);
// }

// 23. Use a for loop to count how many even numbers are in `[1, 2, 3, 4, 5, 6, 7, 8]`.
//     ```javascript
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) count++;
// }
// console.log(count);

// 24. Write a for loop to find the largest number in `[10, 5, 8, 12, 3]`.
// let arr = [10, 5, 8, 12, 3];
// let largest = arr[0];
// for (i = 1; i <= arr.length; i++) {
//   if (arr[i] > largest) largest = arr[i];
// }
// console.log(largest);

//////////// 25. Use a for loop to calculate the sum of even numbers from 1 to 10.
// let sum = 0;
// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) sum += i;
// }
// console.log(sum);

// ## Nested Loops

//////////////// 26. Write nested for loops to create this pattern:
//     ```
//     *
//     **
//     ***
//     ```
// for (let i = 1; i <= 3; i++) {
//   console.log("*".repeat(i));
// }

/////////////////// 27. Create nested for loops to print a 3x3 grid of asterisks.
// let grid = "";
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     grid += "* ";
//   }
//   grid += "\n";
// }
// console.log(grid);
//
//
//
// 28. Use nested for loops to create this number pattern:
//     ```
//     1
//     12
//     123
//     ```
//     ```javascript
//     // Your code here
//     ```
/*
function numberPyramid(numberOfRow) {
  let currentNumber = " ";
  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1) {
        currentNumber += i.toString();
        console.log(currentNumber);
      }
    }
  }
}
numberPyramid(7);
*/
//
//
// 29. Write nested for loops to create a 4x4 multiplication table.
/*
function multyTable(numberOfRow) {
    let row = "";
    for (let i = 1; i <= numberOfRow; i++) {
        for (let j = 1; j <= numberOfRow; j++) {
            row += j * i + ", ";
        }
        row += "\n";
    }
    console.log(row);
}
multyTable(10);
*/

// 30. Create nested for loops to print this pattern:
//     ```
//     1
//     22
//     333
//     ```
/*
function numberPyramid(numberOfRow) {
  let currentNumber = " ";
  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      currentNumber += i.toString();
    }
    console.log(currentNumber);
    currentNumber = "";
  }
}

numberPyramid(7);
*/
