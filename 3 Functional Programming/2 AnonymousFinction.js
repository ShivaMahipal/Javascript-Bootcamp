/**
 * Functions:- 
 *  Anonymous Function & Function Expression 👻
 * Anonymous Function :-> function not having any identity
 */

// An anonymous function can also have multiple arguments, but only one expression.
/* 
The syntax below illustrates the declaration of anonymous function using normal declaration:
    function() {
        // Function Body
    }
*/
let anonymousFunction = function(){ // here, we're just declaring a function without giving it a name rather than assignig a variable to it.
    console.log("Hello, I'm Anonymous");
}


console.log(typeof(anonymousFunction));

anonymousFunction(); // it looks like a variable right but it's a function

// In case of Anonymous Function wehen we are declaring it using let and const 
// we can't call a function before it's initialiZation 

// When we're trying to use 

// Function  Expression :- Assigning a function to a variable 
// Name function expression :- when a function has a name and you basically assigns a variable to a fucntion

// Name assigned Anonymous function
let AnonymousFunction = function Gfg() {
    console.log("Hello, I'm Anonymous");
}

// In this example, we pass an anonymous function 
// as a callback function to the setTimeout() method. This executes this anonymous function 2000ms later.
setTimeout(function () {
    console.log("Welcome to GFG!");
}, 2000);

// Arrow functions
// ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions.
// In an Arrow function, everything remains the same, except here we don’t need the function keyword.
// Here, we define the function by a single parenthesis and then ‘=>’ followed by the function body.

let greet = () =>
{
    console.log("Arrow function ");
}

greet();

/**
 * If we have only a single statement in the function body, we can even remove the curly braces.

In this example, we create a self-executing function.

*/

let arrow = () => console.log("Welcome to GeeksforGeeks!");
arrow();