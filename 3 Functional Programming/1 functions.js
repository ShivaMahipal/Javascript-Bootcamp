/**
 * Functions in Javascript 🚀
 * 1. Function Statement / Function Declaration
 */

// Function Declaration
function greetMessage(name, city){  // here, the 'name' is the parameter
    console.log(`Welcome Here ${name}`); // this is the body of the function 
    console.log(`Thank You for joining through ${city}`);
}
// to execute the body of the function we have to call teh function 
// calling Function 
greetMessage("Shiva"); // here, 'Shiva' is the argument

// Argument is what you pass in fuction when you call the function
greetMessage("Yashya", "Digras");
// In other languages we first declare a function then we call it and if we call function before declaring 
// then it'll give error but in JS we can call a fucntion berfore decalring it and it'll not give us any error