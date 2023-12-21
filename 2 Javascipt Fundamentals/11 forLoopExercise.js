/**
 * Star Pattern
 * 
 * *
 * * *
 * * * *
 * * * * *
 */

const symbol="* ";
// console.log(symbol.repeat(1));
// console.log(symbol.repeat(2));
// console.log(symbol.repeat(3));
// console.log(symbol.repeat(4));
// console.log(symbol.repeat(5));

// for(let i=1;i<=5;i++){
//     console.log("Javascript For Loop");
// }


// for(let i=1;i<=5;i++){
//     console.log(symbol.repeat(i));
// }

for(let i=5;i>=1;i--){
    console.log(symbol.repeat(i));
}

const userName = "Shiva Pravin Mahipal";
console.log(userName.length); // we want this info using for loop space is also counted
let count=0;
for(let i=0;i<userName.length;i++){
    count++; // count = count + 1
}

console.log(`Number of characters in the string is: ${count}`);

/**
 * Given a range of numbers 1 to 101
 */

let remainder;

for(let i=1;i<=101;i++){
    remainder= i%2;
    if(remainder===0){
        console.log(`${i} is an even number`);
    } else{
        console.log(`${i} is an odd number`);   
    }
}

// suppose we want to find out a string has vowels or not 

const inputString="Hello, I'm Shiva ";

const vowels ="aeiou";

// "stirng".includes("char")
"Shiva".includes("i");


for(let i=0 ; i<inputString.length ; i++){
    if(vowels.includes(inputString[i])){ // here inputString[i] will give us the one character at a time and it indicates just only index
        console.log(`${inputString[i]} is a vowel`);
    } else{
        console.log(`${inputString[i]} is not an vowel`);
    } 
}