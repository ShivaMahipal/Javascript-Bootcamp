/**
 * Function Exercise
 * Sum of all numbers from 1 to 20........
 */

function calculateSum(min, max){

    let total = 0;

    for(let i=min;i<=max;i++){
        total = total+i;
    }
    return total;
}

const result = calculateSum(1,20);
console.log(result);

const output = calculateSum(20, 100);
console.log(output);