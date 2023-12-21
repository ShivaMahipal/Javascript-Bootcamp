/**
 * A program that reads 3 strings and print the largest string 
 */

const firstString = "Apple";
const secondString = "Banana";
const thirdString = "Chikkuu";

// There are several properties of String which we can use inorder to find length, size and many more things!
console.log(firstString.length);
console.log(secondString.length);
console.log(thirdString.length);

const lenFirstString=firstString.length;
const lenSecondString=secondString.length;
const lenThirdString=thirdString.length;

// Code for finding largest string 
if(lenFirstString>lenSecondString && lenFirstString>lenThirdString){
    console.log(firstString);
} else if(lenSecondString>lenThirdString){
    console.log(secondString);
} else{
    console.log(thirdString);
}

// Code for finding smallest string 
if(lenFirstString < lenSecondString && lenFirstString < lenThirdString){
    console.log(firstString);
} else if(lenSecondString < lenThirdString){
    console.log(secondString);
} else{
    console.log(thirdString);
}

// We can also add a condition where two or more strings are having same length!