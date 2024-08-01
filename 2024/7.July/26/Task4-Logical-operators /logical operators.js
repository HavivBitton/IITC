// 1. What are the three main logical operators in JavaScript?
//    && sign (AND),|| sign (OR) and ! sign (NOT).

// 2. What does the AND (&&) operator do?
// It fulfills the condition only if both operands are met.

// 3. What is the result of true && true?
// The result is true
// For example:
let a = 4;
let b = 5;
console.log(a > 3 && b > a); // true

// 4. What is the result of true && false?
// The result is false
// For example:
let c = 6;
let d = 7;
console.log(c > 3 && c > d); // false

// 5. What does the OR (||) operator do?
// It fulfills the condition if one of operands are met.

// 6. What is the result of false || true?
// The result is true
// For example:
let e = 8;
let f = 9;
console.log(e > f || e > 3); // true

// 7. What is the result of false || false?
// The result is false
// For example:
let g = 10;
let h = 11;
console.log(g > h || g > 30); // false

// 8. What does the NOT (!) operator do?
// It inverts the boolean value of its operand.

// 9. What is the result of !true?
// The result is false
console.log(!true);

// 10. What is the result of !false?
// The result is false
console.log(!false);

// 11. What is the result of true && true && false?
// The result is false
// For example:
let i = 10;
let j = 20;
let k = 30;
console.log(j > i && k > 20 && j > k); // false

// 12. What is the result of false || false || true?
// The result is true
// For example:
let l = 10;
let m = 20;
let n = 30;
console.log(l > m || (m > 25 && n > l)); // true

// 13. What is the order of precedence for logical operators?
// NOT has the highest precedence, followed by AND, then OR.

// 14. What is short-circuit evaluation in logical operations?
// It's when the second operand is not evaluated if the first operand is sufficient to determine the result.
// It's when the one or more operands is not evaluated but there is one operand is sufficient to determine the result.

// 15. In the expression a && b, when is b not evaluated?
// The result is undefined because the expression cant be determined by a alone.
let o = 5;
let p;
console.log(o && p); // undefined

// 16. In the expression a || b, when is b not evaluated?
// The result is a because the expression can be determined by a alone.
let q = 10;
let r;
console.log(q || r); // 10

// 17. What is the result of 5 > 3 && 2 < 4?
// The result is true because each of comparison is true.
console.log(5 > 3 && 2 < 4); // true

// 18. What is the result of 5 > 7 || 3 < 2?
// The result is false because none of comparison is true.
console.log(5 > 7 || 3 < 2); // false

// 19. What is the result of !(5 > 3)?
// The result is false .
console.log(!(5 > 3)); // false

// 20. How can you use parentheses to change the order of evaluation in logical expressions?
// I put parentheses in places that not first in the logical expressions evaluation order but i want its evaluated first.
