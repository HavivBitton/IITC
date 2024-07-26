// 1. What is the basic assignment operator in JavaScript?
// the = sign
// For example:
let a = 4;
console.log(a); // 4

// 2. How do you assign a value to a variable in JavaScript?
// i used a equal sign after the variable name
// For example:
let b;
b = 4;
console.log(b);

// 3. What does the += operator do?
// += sign adding to variable the value that come after
// For example:
let c = 5;
c += 2;
console.log(c); // 7

// 4. How would you add 5 to a variable x using +=?
let x = 5;
x += 5;
console.log(x); // 10

// 5. What does the -= operator do?
// -= sign subtracts to variable the value that come after
// For example:
let d = 5;
d -= 2;
console.log(d); // 7

// 6. How would you subtract 3 from a variable y using -=?
let y = 4;
y -= 3;
console.log(y); // 1

// 7. What does the *= operator do?
// '*=' sign multiply the variable with the value that come after.
// For example:
let e = 5;
e *= 2;
console.log(e); // 10

// 8. How would you multiply a variable z by 2 using *=?
let z = 4;
z *= 2;
console.log(z); // 8

// 9. What does the /= operator do?
// *= sign divides the variable by the value that come after
// For example:
let f = 10;
f /= 2;
console.log(f); // 5

// 10. How would you divide a variable w by 4 using /=?
let w = 4;
w /= 4;
console.log(w); // 1

// 11. What's the difference between x = x + 1 and x += 1?
// There are no difference, They achieve the same result.
// But is one more concise. if i write '++' is auto plus one to the variable.
// For example:
let h = 5;
h++;
console.log(h); // 6

// 12. How do you increase a variable by 1 using an assignment operator?
let g = 150;
g += 1;
console.log(g);

// 13. What happens when you use += with strings?
// if the variable strings variable, is just adding the strings value.
// but if is  number variable, is convert the number variable to
// strings variable and than is adding the strings value.
// for example:
let string1 = "Hello";
let number1 = 1;
string1 += " World!";
number1 += " World!";
console.log(string1); // '1 World!' in string type.
console.log(number1); // 'Hello World!'

// 14. How would you append the string "Hello" to a variable str using +=?
let string2 = "Haviv, ";
string2 += "Hello";
console.log(string2); // Haviv, Hello

// 15. What's the result of let x1 = 5; x += 3;?
let x1 = 5;
x1 += 3;
console.log(x1); // the result is 8.
