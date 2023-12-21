/**
 * Logical Operator with truthy and falsy values
 * 1. OR || ⚡
 * 2. AND && 🤯
 */

const firstName ="Shiva";
const nickname ="Yashya";
const lastName ="";
console.log(`Name - ${lastName}`);

// lets think if user has entered only name maybe name or nickname and we want atleast a name whether it's
// name or  nickname so we will use Logical Opeator OR || for this operation!

console.log(firstName || nickname);
// By default it will show only first vairable written using OR operator 
// if we give no name in firtname(first varibale) then it will display nickname(second variable)

// We can also try this operations with && Logical operator 
console.log(firstName && nickname);
// this will return last variable value if it's a truthy value
// && searches for the falsy values and whatever the first variable value is, it will return the falsy value
// this phenomenon happening here is often termed as short circuiting

/**
 * Truthy values 😇
 * Falsy values 😈
 */

console.log(Boolean("Shiva")); // any text and space in between "" this will always return true

console.log(Boolean("")); // this will return false as no text is provided inside this ""

console.log(Boolean(" ")); // this will return true as space(it has some ASCII values) is provided in between this ""

console.log(Boolean(0));

console.log(Boolean(null));


//here below What OR operator basically 
// doing is it will first convert firstName to boolean and if it's true
// const userName = firstName || nickname;

const userName = firstName || nickname || null;

console.log(`Name  - ${userName}`);

let a=12;
let b;
console.log(a+b); // Output -> NaN(Not a Number)
console.log(a+(b || a));
console.log(a+(b || 0));

/*
 * Logical Operator Exercise 🎽🏃‍♂️🤸‍♂️
 * 1. what will be the result of the OR operation 
 * -> console.log(3 || 2 || 1)
 * -> console.log("" || 0 || 1)
 * -> console.log("" || 0 || undefinied)
 * -> console.log("" || "null" || 2)
 * 
 * 2. what will be the output of the && AND operation
 * ->console.log(3 && 2 && 1) 
 * ->console.log("" && 0 && 1) 
 * ->console.log("" && 0 && 1)
 * ->console.log("undefinied" || "null" || "")
 */


