// 1. What is the equality operator in JavaScript?
// The equality operator is '==='
// For example:
let a = 4;
let b = 5;
console.log(a === b); // false

// 2. What's the difference between == and ===?
// '==' is equal to, and '===' is equal value and equal type.
// For example:
console.log(0 == false); // true
console.log(0 === false); //false
// Anyways, With '===' we use and with '==' we dont.

// 3. How do you check if two values are not equal in JavaScript?
// I put a !== between them.
// For example:
let c = 4;
let d = 5;
console.log(a !== b);

// 4. What does the > operator do?
// Is tell if some value greater then the seconde value.
// For example:
let e = 5;
let f = 4;
console.log(e > f); // true

// 5. What does the < operator do?
// Is tell if some value smaller then the seconde value.
// For example:
let g = 5;
let h = 4;
console.log(g < h); // true

// 6. How do you check if a value is greater than or equal to another value?
// I use the <= sign.
// For example:
let i = 10;
let j = 10;
console.log(g <= h); // true

// 7. How do you check if a value is less than or equal to another value?
// I use the >= sign.
// For example:
let k = 5;
let l = 4;
console.log(k >= l); // false

// 8. What is the result of 5 > 3?
console.log(5 > 3); //true

// 9. What is the result of 10 === "10"?
console.log(10 === "10"); //false

// 10. What is the result of 7 <= 7?
console.log(7 <= 7); //true

// 11. How would you compare two strings alphabetically?
// I write them like a string, in parentheses.
// For example:
console.log("apple" === "apple"); //true

// 12. What's the result of "apple" < "banana"?
console.log("apple" < "banana"); // true, because 'a' come before 'b' in the english alphabetical.

// 13. What does the !== operator do?
// Is tell if some value not equal to the seconde value.
// For example:
let m = 45;
let n = 46;
console.log(m !== n); // true

// 14. What's the result of 5 !== "5"?
console.log(5 !== "5"); //true

// 15. How do comparison operators work with different data types?
// Its always tell that the result is false.
// For example:
let o = 1;
let p = "one";
console.log(o === p); // false
