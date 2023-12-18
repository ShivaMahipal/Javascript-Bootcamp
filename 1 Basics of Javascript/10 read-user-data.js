/**
 * Read Data from User
 * We have to install a package and for that we should have NodeJS installed on our system.
 * To install package using terminal type in terminal this command--> npm install readline-sync
 * This will install the required necessary package in VSCode
 * basically, this package will do the task that it will coversation with the user via the terminal 
 */

const readlineSync = require("readline-sync");

// const userName = readlineSync.question("May I know your name?");
// const userAge = readlineSync.question("May I know your age? ");
// console.log("Welcome "+userName); // old way
// console.log(`welcome ${userName} to JS code`); // new way


const number = Number(readlineSync.question("Enter a number please "));

if(number%2==0){
    console.log("it is even");
} else{
    console.log("it is odd");
}

