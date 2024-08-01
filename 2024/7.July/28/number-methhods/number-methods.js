// # JavaScript Number Methods Exercises

// 1. Use `toFixed()` to format the number 3.14159 to 2 decimal places.
//    Hint: `number.toFixed(2)` will round to 2 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
let a = 3.14159;
console.log(a.toFixed(2)); //3.14

// 2. Convert the number 42 to a string using `toString()`.
//    Hint: `number.toString()` converts a number to a string.
//    [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
let b = 42;
console.log(b.toString()); // "42"

// 3. Use `toPrecision()` to format the number 123.456789 to 5 significant digits.
//    Hint: `number.toPrecision(5)` will format to 5 significant digits.
//    [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
let c = 123.456789;
console.log(c.toPrecision(5)); //123.46

// 4. Parse the string "10" into an integer using `parseInt()`.
//    Hint: `parseInt(string)` converts a string to an integer.
//    [Learn more about parseInt()](https://www.w3schools.com/jsref/jsref_parseint.asp)
let d = "10";
console.log(parseInt(d)); // 10

// 5. Parse the string "3.14" into a float using `parseFloat()`.
//    Hint: `parseFloat(string)` converts a string to a floating-point number.
//    [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
let e = "3.14";
console.log(parseFloat(e)); //

// 6. Check if the value "Hello" is NaN using `isNaN()`.
//    Hint: `isNaN(value)` returns true if the value is Not-a-Number.
//    [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
console.log(isNaN("Hello")); //true

// 7. Determine if 100 is a finite number using `isFinite()`.
//    Hint: `isFinite(value)` returns true if the value is a finite number.
//    [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
console.log(isFinite(100)); //true

// 8. Convert the number 255 to a hexadecimal string using `toString()`.
//    Hint: `number.toString(16)` converts to hexadecimal.
//    [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
let f = 255;
console.log(f.toString(16)); // ff

// 9. Use `toFixed()` to format the number 0.000001 to 7 decimal places.
//    Hint: `number.toFixed(7)` will show 7 decimal places.
//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
let g = 0.000001;
console.log(g.toFixed(7)); //0.0000010

// 10. Convert the binary string "1010" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 2)` parses a binary string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
console.log(parseInt("1010", 2)); //10

// 11. Use `toPrecision()` to format the number 0.000123456 to 3 significant digits.
//     Hint: `number.toPrecision(3)` will format to 3 significant digits.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
let h = 0.000123456;
console.log(h.toPrecision(3)); //0.000123

// 12. Check if the result of 0/0 is NaN using `isNaN()`.
//     Hint: Division by zero may result in NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
console.log(isNaN(0 / 0)); //true

// 13. Convert the number 1000000 to exponential notation with 2 decimal places using `toExponential()`.
//     Hint: `number.toExponential(2)` formats to exponential notation.
//     [Learn more about toExponential()](https://www.w3schools.com/jsref/jsref_toexponential.asp)
let i = 1000000;
console.log(i.toExponential(2)); // 1.00e+6

// 14. Parse the string "3.14some" into a float using `parseFloat()`.
//     Hint: `parseFloat()` parses until it encounters a non-numeric character.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
console.log(parseFloat("3.14some")); // 3.14

// 15. Use `toString()` to convert the number 16 to its binary representation.
//     Hint: `number.toString(2)` converts to binary.
//     [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
let j = 16;
console.log(j.toString(2)); //"10000"

// 16. Check if Infinity is a finite number using `isFinite()`.
//     Hint: Infinity is not considered a finite number.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
console.log(isFinite(Infinity)); //false

// 17. Use `toFixed()` to format the number 1.23e-5 to 8 decimal places.
//     Hint: `toFixed()` works with very small numbers too.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
let k = 1.23e-5;
console.log(k.toFixed(8)); //0.000001230

// 18. Convert the octal string "777" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 8)` parses an octal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
console.log(parseInt("777", 8)); //511

// 19. Use `toPrecision()` to format the number 123456.789 to 4 significant digits.
//     Hint: This will result in exponential notation.
//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)
let l = 123456.789;
console.log(l.toPrecision(4)); //1/234e+5

// 20. Check if the string "NaN" is NaN using `isNaN()`.
//     Hint: The string "NaN" is not the same as the value NaN.
//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)
console.log(isNaN("NaN")); //true

// 21. Convert the number -10 to a string using `toString()`.
//     Hint: `toString()` works with negative numbers too.
//     [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
let m = -10;
console.log(m.toString()); // "-10"

// 22. Use `parseFloat()` to parse the string "1.2e-3" into a number.
//     Hint: `parseFloat()` can handle scientific notation.
//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
let n = "1.2e-3";
console.log(parseFloat(n));
0.0012;

// 23. Format the number 1234.5678 to 2 decimal places using `toFixed()`.
//     Hint: This will round the number.
//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)
let o = 1234.5678;
console.log(o.toFixed(2)); //1234.56

// 24. Use `isFinite()` to check if the result of 1/0 is finite.
//     Hint: Division by zero results in Infinity.
//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)
console.log(isFinite(1 / 0)); // false

// 25. Convert the hexadecimal string "FF" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 16)` parses a hexadecimal string.
//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)
console.log(parseInt("FF", 16)); //255

// Remember to test your solutions and experiment with different inputs!
