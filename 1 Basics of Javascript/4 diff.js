/*
    Lesson 3:-
    Difference between var & let & const 
*/
// With var we can redeclare variables again and again which is an unnecessary feature   
// var message = "hi";
// console.log(message);
// var message="by";
// console.log(message);


// But with let keyword we can't redeclare the same variable again, it throws an error.

// let message="hello";
// console.log(message);
// let message="meow";
// console.log(message);

// Here, we can see that the red lines are appeared indicating the presence of error!


// In case of const keyword once we declared a constant value we can not assign next 
// value to it or simply we can't change it's value & it works like let keyword.
// const message="hello hi";
// console.log(message);
// message="hi meow";
// console.log(message);
// const message="hi meow wow meow";
// console.log(message);
// This will show error as we are changing a constant variable's value.

// Which keyword is used in which scenario ? 
// we never use var these days because it's an old concept of javascript.
// Also by using var sometimes we can mistakenly redeclare a variable and might caught in error.