// Task 1
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Task 2
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 3
// let x = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(i + x);
//   x = i + x;
// }

// Task 4
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }

// Task 5
// let x = "*";
// let y = "";
// for (let i = 1; i <= 5; i++) {
//   console.log(y + x);
//   y = y + x;
// }

// // for (let i = 1; i <= 5; i++) console.log("*".repeat(i));
// let number = 1;
// // let number = Number(prompt("Enter"));
// while (number <= 100) {
//   console.log(number);
//   number *= 2;
// }

// let number1;
// do {
//   number1 = Number(prompt("Enter"));
// } while (number1 <= 0);

// let number = 1;
// do {
//   console.log(number);
//   number++;
// } while (number <= 5);

let playAgain;
do {
  playAgain = prompt("Do you want to play again? (yes/no)");
  playAgain = playAgain.toLowerCase();
} while (playAgain === "yes");
