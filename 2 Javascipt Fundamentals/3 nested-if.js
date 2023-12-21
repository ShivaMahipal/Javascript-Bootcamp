const readlineSync=require("readline-sync");

const num = Number(readlineSync.question("Enter a number : "));
// console.log(num); Agile Method used  to know if code is working properly in beginnig of programming!

const remainder = num % 2;

if(remainder===0){
    console.log(`${num} is an even number!`);
    if(num%6===0) {
        console.log(`${num} is divisible by 6 also!`);
    } else {
        console.log(`${num} is not divisible by 6!`);
    }
} else {
    console.log(`${num} is an odd number!`);
    if(num%5==0) {
        console.log(`${num} is divisible by 5!`);
    } else {
        console.log(`${num} is not divisible by 5!`);
    }
}