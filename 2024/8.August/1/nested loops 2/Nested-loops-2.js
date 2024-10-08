// # 30 Easy Nested Loop Exercises in JavaScript

// ## Exercise 1
// Print a 2x2 grid of asterisks.

// Hint: Use two nested loops, both running 2 times.

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

function gridOfAsterisks(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add `*` x times.
  for (let i = 0; i < numOfRow; i++) {
    for (let j = 0; j < numOfRow; j++) {
      grid += "*   ";
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfAsterisks(2));
/* Output:
 *   *
 *   *
 */

// ## Exercise 2
// Print numbers from 1 to 4 in a 2x2 grid.

// Hint: Use a counter variable that increments in the inner loop.

// [Learn about variables in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#loop_scope_and_closures)

function gridOfNum(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // Create a variable that contain the number that get in to the grid
  let counter = 0;
  // nested loops that add the number times.
  for (let i = 0; i < numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // add 1 to the conter variable and add it to the grid/
      counter++;
      grid += `${counter} `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfNum(2));
/* Output:
1 2 
3 4
 */

// ## Exercise 3
// Print a right-angled triangle of asterisks with 3 rows.

// Hint: The outer loop controls rows, the inner loop prints asterisks based on the row number.

// [Learn about triangular patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

function triangleOfAsterisks(numOfRow) {
  // Create a variable that contain the result
  let triangle = "";
  // nested loops that add `*` i times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      triangle += "*   ";
    }
    // Going down a row
    triangle += "\n";
  }
  return triangle;
}
// console.log(triangleOfAsterisks(3));
/* Output:
 *
 *   *
 *   *   *
 */

// ## Exercise 4
// Print a 3x3 grid where each cell contains the sum of its indices.

// Hint: Use the loop variables as indices and add them.

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

function gridOfSumNum(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the sum of row's index and the col's index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      grid += `${i + j}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfSumNum(3));
/* Output:
2  3  4  
3  4  5  
4  5  6  
*/

// ## Exercise 5
// Print a 3x3 multiplication table.

// Hint: Multiply the outer loop variable by the inner loop variable.

// [Learn about multiplication tables](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)

function multyTable(numOfRow) {
  // Create a variable that contain the result
  let table = "";
  // nested loops that add the result of row's index * col's index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      table += `${i * j}  `;
    }
    // Going down a row
    table += "\n";
  }
  return table;
}
//console.log(multyTable(3));
/* Output:
1  2  3  
2  4  6  
3  6  9 
*/

// ## Exercise 6
// Print a square border of asterisks with side length 3.

// Hint: Use conditional statements to print asterisks only on the border.

// [Learn about conditional statements in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

function squareBorderAsterisks(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add `*` x times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // if that check if the index i/j is in the border, true - add `*` and false add space.
      if (j == 1 || i === 1 || j === numOfRow || i === numOfRow) {
        grid += "*   ";
      } else grid += "     ";
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(squareBorderAsterisks(3));
/* Output:
 *   *   *
 *       *
 *   *   *
 */

// ## Exercise 7
// Print numbers from 1 to 9 in a 3x3 grid.

// Hint: Use a single counter variable that increments in the inner loop.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
function gridOfNum(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // Create a variable that contain the number that get in to the grid
  let counter = 0;
  // nested loops that add the number every loop.
  for (let i = 0; i < numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // add 1 to the conter variable and add it to the grid/
      counter++;
      grid += `${counter} `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfNum(3));
/* Output:
1 2 3 
4 5 6 
7 8 9
  */

// ## Exercise 8
// Print a 3x3 grid of even numbers starting from 2.

// Hint: Start with 2 and increment by 2 in each iteration.

// [Learn about arithmetic in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)
function gridOfEvenNum(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // Create a variable that contain the number that get in to the grid
  let counter = 0;
  // nested loops that add the number times.
  for (let i = 0; i < numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // add 1 to the conter variable and add it to the grid/
      counter += 2;
      grid += `${counter} `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfEvenNum(3));
/* Output:
2 4 6 
8 10 12 
14 16 18
 */

// ## Exercise 9
// Print a right-angled triangle of numbers with 3 rows.

// Hint: Use the inner loop variable as the number to print.

// [Learn about nested loops for patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

function triangleOfNumber(numOfRow) {
  // Create a variable that contain the result
  let triangle = "";
  // Create a variable that contain the number that get in to the triangle variable
  let counter = 0;
  // nested loops that add the counter to triangle i times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      counter++;
      triangle += `${counter} `;
    }
    // Going down a row
    triangle += "\n";
  }
  return triangle;
}
// console.log(triangleOfNumber(3));
/* Output:
1 
2 3 
4 5 6
 */

// ## Exercise 10
// Print a 3x3 checkerboard pattern of 0s and 1s.

// Hint: Use the sum of indices and the modulo operator to determine whether to print 0 or 1.

// [Learn about the modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

function checkerboard_1_0(numOfRow) {
  // Create a variable that contain the result
  let border = "";
  // nested loops that add to border 0 / 1 .
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      //if that decides if add 1 or 0 to the border.
      if (i % 2 === 0) border += `${j % 2}  `;
      else border += `${(j + 1) % 2}  `;
    }
    // Going down a row
    border += "\n";
  }
  return border;
}
// console.log(checkerboard_1_0(3));
/* Output:
0  1  0  
1  0  1  
0  1  0  
*/

// ## Exercise 11
// Print a 3x3 grid where each cell contains its row number.

// Hint: Use the outer loop variable as the number to print.

// [Learn about accessing loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

function gridOfRowIndex(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the row's index to the grid.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      grid += `${i}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfRowIndex(3));
/* Output:
1  1  1  
2  2  2  
3  3  3  
*/

// ## Exercise 12
// Print a 3x3 grid where each cell contains its column number.

// Hint: Use the inner loop variable as the number to print.

// [Learn about nested loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

function gridOfColumnIndex(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the column's index to the grid.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      grid += `${j}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfColumnIndex(3));
/* Output:
1  2  3  
1  2  3  
1  2  3  
*/

// ## Exercise 13
// Print a 4x4 grid of alternating X and O.

// Hint: Use the sum of indices and the modulo operator to determine whether to print X or O.

// [Learn about conditional operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator)

function alternatingXO(numOfRow) {
  // Create a variable that contain the result
  let border = "";
  // nested loops that add to border X / O .
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      //if that decides if add X or O to the border.
      if (i % 2 === j % 2) border += `X  `;
      else border += `O  `;
    }
    // Going down a row
    border += "\n";
  }
  return border;
}
// console.log(alternatingXO(4));
/* Output:
X  O  X  O  
O  X  O  X  
X  O  X  O  
O  X  O  X
*/

// ## Exercise 14
// Print a right-angled triangle of odd numbers with 4 rows.

// Hint: Use a counter that starts at 1 and increments by 2.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

function triangleOfOddNumber(numOfRow) {
  // Create a variable that contain the result
  let triangle = "";
  // Create a variable that contain the number that get in to the triangle variable
  let counter = -1;
  // nested loops that add the counter to triangle i times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      counter += 2;
      triangle += `${counter} `;
    }
    // Going down a row
    triangle += "\n";
  }
  return triangle;
}
// console.log(triangleOfOddNumber(4));
/* Output:
1 
3 5 
7 9 11 
13 15 17 19 
 */

// ## Exercise 15
// Print a 3x3 grid where each cell contains the absolute difference between its row and column indices.

// Hint: Use Math.abs() to calculate the absolute difference.

// [Learn about Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

function gridOfAbsDiff(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the absolute difference between row's index and column's index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      grid += `${Math.abs(i - j)}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
// console.log(gridOfAbsDiff(3));
/* Output:
0  1  2  
1  0  1  
2  1  0    
*/

// ## Exercise 16
// Print a hollow right-angled triangle of asterisks with 4 rows.

// Hint: Print asterisks only when it's the first or last column, or the last row.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

function hollowTriangleOfAsterisks(numOfRow) {
  // Create a variable that contain the result
  let triangle = "";
  // nested loops that add `*` i times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === numOfRow) triangle += "*  ";
      else triangle += "   ";
    }
    // Going down a row
    triangle += "\n";
  }
  return triangle;
}
console.log(hollowTriangleOfAsterisks(4));
// console.log(triangleOfAsterisks(3));
/* Output:
 *
 *   *
 *   *   *
 */

// ## Exercise 17
// Print a 4x4 grid where each cell contains the smaller of its row or column index.

// Hint: Use Math.min() to compare row and column indices.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

function gridOfSmaller(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the the smaller of row or column index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // if that check which index is smaller (row or column)
      if (i <= j) grid += `${i}  `;
      else grid += `${j}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
console.log(gridOfSmaller(4));
/* Output:
1  1  1  1  
1  2  2  2  
1  2  3  3  
1  2  3  4  
*/

// ## Exercise 18
// Print a 4x4 grid where each cell contains the larger of its row or column index.

// Hint: Use Math.max() to compare row and column indices.

// [Learn about Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

function gridOfLarger(numOfRow) {
  // Create a variable that contain the result
  let grid = "";
  // nested loops that add the the larger of row or column index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      // if that check which index is larger (row or column)
      if (i <= j) grid += `${j}  `;
      else grid += `${i}  `;
    }
    // Going down a row
    grid += "\n";
  }
  return grid;
}
console.log(gridOfLarger(4));
/* Output:
1  2  3  4  
2  2  3  4  
3  3  3  4  
4  4  4  4  
*/

// ## Exercise 19
// Print a right-angled triangle of consecutive letters (A-Z) with 4 rows.

// Hint: Use String.fromCharCode() to convert numbers to letters.

// [Learn about String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

function triangleOfLatter(numOfRow) {
  // Create a variable that contain the result
  let triangle = "";
  // Create a variable that contain the latter that get in to the triangle variable
  let counter = 0;
  // nested loops that add the counter to triangle i times.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= i; j++) {
      counter++;
      //convert number to charCode and adding to the container variable
      triangle += `${String.fromCharCode(counter + 64)} `;
    }
    // Going down a row
    triangle += "\n";
  }
  return triangle;
}
console.log(triangleOfLatter(4));
/* Output:
A 
B C 
D E F 
G H I J 
 */

// ## Exercise 20
// Print a 3x3 grid where each cell contains the sum of all numbers from 1 to the product of its indices.

// Hint: Use a nested loop to calculate the sum for each cell.

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

function sumTable(numOfRow) {
  // Create a variable that contain the result
  let table = "";
  // nested loops that add the result of row's index + col's index.
  for (let i = 1; i <= numOfRow; i++) {
    for (let j = 1; j <= numOfRow; j++) {
      table += `${i + j}  `;
    }
    // Going down a row
    table += "\n";
  }
  return table;
}
console.log(sumTable(3));
/* Output:
2  3  4  
3  4  5  
4  5  6
*/

// ## Exercise 21
// Print a 4x4 grid of ascending numbers in a spiral pattern.

// Hint: Use a 2D array and fill it in a spiral pattern.

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

// ## Exercise 22
// Print a diamond pattern of asterisks with maximum width 5.

// Hint: Combine an increasing triangle with a decreasing triangle.

// [Learn about complex patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 23
// Print a 4x4 grid where each cell contains the result of its row index raised to the power of its column index.

// Hint: Use the ** operator for exponentiation.

// [Learn about the exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

// ## Exercise 24
// Print a right-angled triangle of descending numbers with 4 rows, starting from 10.

// Hint: Initialize a counter with 10 and decrement it in each iteration.

// [Learn about decrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 25
// Print a 4x4 grid where each cell contains the result of (row index * 2) + column index.

// Hint: Use arithmetic operations with the loop variables.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 26
// Print a hollow square of hash symbols (#) with side length 5.

// Hint: Print hash symbols only when it's the first or last row, or the first or last column.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 27
// Print a 4x4 grid where each cell contains the smaller of: the product of its indices or 5.

// Hint: Use Math.min() to compare the product with 5.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 28
// Print a right-angled triangle of asterisks with 5 rows, but skip the third row.

// Hint: Use an if statement to skip printing when the row index is 3.

// [Learn about if statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

// ## Exercise 29
// Print a 5x5 grid where cells on the main diagonal (where row index equals column index) contain 1, and all other cells contain 0.

// Hint: Use an if statement to check if row index equals column index.

// [Learn about equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

// ## Exercise 30
// Print a 4x4 grid where each cell contains the sum of its row index, column index, and the number 1.

// Hint: Add the row index, column index, and 1 for each cell.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)
