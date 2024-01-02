/**
 * Hoisting :- It is a process where you can access the value of a variable or
 *             function even before it is initiallised.
 */


var a = 100;
console.log(a); //this will output undefined not an error 


var getUserName = function showName(){
    console.log("Shiva Mahipal");
}

function showName(){
    console.log("Shiva Mahipal");
}

// console.log(showName);

showName();
getUserName();

