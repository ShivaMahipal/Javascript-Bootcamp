/*
 *  Conditional Statements 
 */

/*
    if(condition/expression) {
        body / action to be performed 
    }
*/

// if(true){
//     console.log("Hey there, I'm Shiva!");
// }

// // const value = false;
// const value = true;

// if(value){
//     console.log("Again Shiva!");
// }

// let userAge = 18;
// if(userAge >= 18){
//     console.log("You are an adult!");
// } else{
//     console.log("you are not an adult!");
// }

const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("Enter a number please "));

const remainderafterdivby3=number%3;
const remainderafterdivby5=number%5;

// if(remainderafterdivby3===0) { // here, condition is if number is divisiblr by 3 or not
//     console.log("Yupppp");
// } else if(remainderafterdivby5===0){// here, condition is if number is divisible by 5 or not
//     console.log("Gaapppp");
// }

// But what if we want to use both above and want to find out whether a number if divisible by both 3 & 5or not.
// In such cases we use Logical operators remember &(and), ||(or), !(nor)

// here, below is && logical operator used to check if both the cases are true
// if(remainderafterdivby3===0 && remainderafterdivby5===0) { 
//     console.log("Divisible by both of them");
// }

// here, below is || or logical operator is used to check which one of the two conditions is true

if(remainderafterdivby3===0 || remainderafterdivby5===0) { 
    console.log("Buzzzz");
} else {
    console.log("Ooohhhhh");
}