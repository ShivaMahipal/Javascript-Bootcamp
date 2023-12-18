/*
Lesson 2 :- Variables in Javascript!

Q. Why need variables ?
Ans:- To store some information, variables are like containers. Variable is technically called as a placeholder
which can hold the information.

Q.Diiferent ways to create a variable ?
Ans:- There are 3 different ways to create a vaiable namely:- 
        1) var
        2) let
        3) cons
    By using above three keywords we can create variables in javascript.
*/
// Uisng keyword 'var'
var message; // Declaring or creating a variable 
message = "Hello Shiva!" // Assigning a value to a variable
console.log(message);

// declaring multiple variables
var name, title, num;

message = "My name is Shiva Mahipal"
console.log(message);

// Using keyword 'let'
let myname = "Shiva Mahipal"
console.log(myname);

// Using keyword 'const' generally used for creating constant value variables
// Whenever we declare a const variable we have to assign a value to it at the same time otherwise it will cause error.

const number = 3;
console.log(number);

// We can't update const variable as they throws errors because const variable value should not be changed
// number=2;
// console.log(number);
// This will throw an error.
