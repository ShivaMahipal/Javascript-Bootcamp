/**
 * Arithematic Operators 
 */

const x=12;
const y=2;

// Addition Operator
console.log(x+y);

// Substraction Operator
console.log(x-y);

// Multiplication Operator
console.log(x*y);

// Division Operator
console.log(x/y);

// Modulus Operator
console.log(x%y);

// Power 
console.log(x ** 2);
console.log(y ** 3);

const a="12";
const b=2;
// The below operation will not show error because javascript in backend converts numbers into strings and performs concatenations operation.
// Addition Operator in string will act as concatenation operator
console.log(a+b);
console.log(typeof(a+b));

// Substraction Operator
console.log(a-b);
a
// Multiplication Operator
console.log(a*b);

// Division Operator
console.log(a/b);

// Modulus Operator
console.log(a%b);

// Power 
console.log(a ** 2);
console.log(a ** 3);

const m="Mango";
const n="Apple";

// Addition Operator will result in string concatenation
console.log(m+n);
// The rest all below will result in output NaN-> Not a Number Output
console.log(m-n);

console.log(m*n);

console.log(m/n);

console.log(m%n);

// Increment Operator
// Pre Increment Operator
// If used prefix with operator before operand (for example, ++x), then it increments and returns the value after incrementing.
let p = 10;
let q = ++p; // p = 11, q = 11
console.log(p);
console.log(q);

// Post Increment Operator
// If used postfix with operator after operand (for example, x++), then it returns the value before incrementing.
let r = 10;
let s = r++; // r = 11, s = 10
console.log(r);
console.log(s); 

// Decrement Operator
// Pre Decrement Operator
// If used prefix with operator before operand (for example, --x), then it decrements and returns the value after decrementing.
let t = 10;
let u = --t; // t = 9, u = 9
console.log(t);
console.log(u);

// Post Decrement Operator
// If used postfix with operator after operand (for example, x--), then it returns the value before decrementing.
let v = 10;
let w = v--; // v = 9, w = 10
console.log(v);
console.log(w);

// Unary Plus Operator
// Tries to convert the operand into a number
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+"10"); // 10 number

// Unary Minus Operator
// Tries to convert the operand into a number and negates after
console.log(-true); // -1
console.log(-false); // -0
console.log(-null); // -0
console.log(-"10"); // -10 number

// Unary NOT Operator
// Converts the operand into a boolean value and negates it
console.log(!true); // false
console.log(!false); // true
console.log(!null); // true
console.log(!"10"); // false string

