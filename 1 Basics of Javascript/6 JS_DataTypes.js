/*
    Lesson 6 :- Data Types in Javascript!
*/

/**
 *  String--> In Javascript, the text written inside this(" ") is considered as String data type(basically text).
 */
let userName = "Shiva Mahipal";
console.log(userName);

// We can use 'typeof' function to get the data type a variable is storing.
console.log(typeof userName);

// We can also find out the data type of data using 'typeof' function.
console.log(typeof "shiva");
console.log(typeof 2);

/**
 *  Number -> Integer data type containes numbers.
 */

let Age = 21;
console.log(Age);
console.log(typeof Age);

// In Javascript, a number and a number with fractional points or points is also a number.
console.log(typeof 123.45);

/**
 * Boolean -> True/False (yes/no) mainly used to check some conditions!
 */

let isPlantsAlive = true;
// So if somewhere we're checking a condition let's say do plants have live then we can simply  check 
// this by using a condition and getting output.
console.log(isPlantsAlive);
console.log( typeof isPlantsAlive);

/**
 *  Undefined---> Basically, it is the value assigned to a variable when no value is assigned to a variable.
 */
let userAddress;
console.log(userAddress);
// The above code will output 'undefined' as result!
// The type of above variable will be same as undefined
console.log(typeof userAddress);

/**
 * Null:- Null means nothing
 */

let noValue = null;
console.log(noValue);
console.log(typeof noValue);

// All the data types discussed above are primitive data types where a single value is assigned to a variable.

/**
 * Object:- A non-primitive data types where multiple values can be assigned to a single variable, also called as comples variable
 */
// In object data type inside curly data types we generates key value pair 
const personDeatils={name:"Shiva", Age:21, Education:" BE IT SKNSITS Lonavala"};
// here, name is key and it's value is Shiva!
console.log(typeof personDeatils);

const arrayOfNumbers = [1,2,3,4,5,6,7];
console.log(arrayOfNumbers);
console.log(typeof arrayOfNumbers); 
