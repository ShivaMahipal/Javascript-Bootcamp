/**
 * User enters a name, if the number i greater than 50 then as the user to enter number again 
 * if the number is large than 50 then ask a number lesser than 50
 */

let readlineSync=require("readline-sync");

let number = readlineSync.question("Enter a number less than 50 :- ");
while(number>=50){
    number = readlineSync.question("Please enter a number less than 50 :- ");
}
console.log("number accepted!");
