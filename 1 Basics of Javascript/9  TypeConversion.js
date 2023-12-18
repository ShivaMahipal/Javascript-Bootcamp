/**
 *  Type Conversion:- Converting a one data type into another data type
 * to string... 
 * to Number...
 * to Boolean...
 */

const a="10";
const b="3";
console.log(a+b); // string concatenation will happen here output will be 103

// We want to convert this string into a number 
// we will use number function for this 
// console.log(Number(a)+Number(b));
// console.log(Number("10")+Number(b));
// console.log(Number("10")+Number("20"));

// const c=Number(a);
// const d=Number(b);
// console.log(typeof a);
// console.log(typeof c);
// console.log(typeof d);

const x = 3;
const y = 0;
const m =String(x);
const n =String(y);
console.log(typeof x); // number
console.log(typeof m); // string

console.log(Boolean(x)); // any value other than zero will result true
console.log(Boolean(y)); // zero will result into false

const p ="Shiva"; //this will be true 
const q = ""; // empty string value will be false
console.log(Boolean(p));
console.log(Boolean(q));