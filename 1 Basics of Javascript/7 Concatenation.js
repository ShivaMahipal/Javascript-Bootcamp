/**
 * Concatenation
 * Template literals/Strings
 */

let name = "Shiva";
let age = 21;

// We want message->My name is Shiva and my age is 21
let message = "My name is "+name+" and my age is "+age;
console.log(message);

// Template literals/Strings
let example=`my name is ${name} and my age is ${age}`;
console.log(example);

let multipleLineText=`My name is ${name} 
I love to code
I love to sleep
and my age is ${age}`
console.log(multipleLineText);

let str = 'Values: ';
str += 42;
str += ' ';
str += {};
str += ' ';
str += null;
str;
console.log(str); 

let message1 = "In-order to create a multiline string an escape sequence \n was used to give new line character.";
console.log(message1);