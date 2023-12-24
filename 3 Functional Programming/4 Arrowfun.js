/**
 * Arrow/Fat arrow function function
 */

// const calculateAddition = (x,y) =>{
//     return x+y;
// }

const calculateAddition = (x, y) => x + y;

// console.log(calculateAddition(12,80));

const greaterSum = (x, y) => {
    if(x > y){
        return x + y;
    } else {
        x - y;
    }
}

console.log(greaterSum(31,21));
console.log(greaterSum(11,21));


const sum =(x, y) =>x > y ? x + y : x - y;
const output =sum(12,11);
console.log(output);