/**
 * ⭐Ternary Operator⭐🤯 :- bascially a short form of if-else condition
 * Ternary operator is actually used in React and the Framework
 */

const totalMarksScoredByStudent=60;

// The below code is using tradiotional if-else conditions

// if(totalMarksScoredByStudent<4){
//     console.log("Fail");
// } else{
//     console.log("Pass");
// }   

// Now, terary operator 🔥
// Synatx-> (Condtion) ? result 1(if condition is true) : result 2(if condition is false);
(totalMarksScoredByStudent<40) ? console.log("Fail") : console.log("Pass");
const result = totalMarksScoredByStudent<40 ? "Fail" : "Pass";
console.log(result);