/**
 * Logical Operator 🙄
 * 1 OR || ⚡ --> if only one is true then all is true
 * 2 AND && 🤗 -> all true then true
 * 3 NOT 🙅‍♂️ --> reverse the logic
 * 4 NULLISH COALESCING ?? 🌧️
 */

const physics = 89;
const math = 50;
const chemistry = 40;
const bio = 95;

// Suppose we want to check the eligibility of a candidate based on these marks and as we know 
// these three subject of whether a student scored above 85 or not in these subject can be checked by 
// a combine condtion rather than writing all the three conditions as they gives the same result

// // We will use AND(&&) operator here
// if(physics>85 && chemistry>85 && math>85){
//     console.log("You are eligible for engineering!");   
// } else {
//     console.log("You are not eligible for engineering !");
// }

// Now, OR logical operator 

// if(physics>85 || chemistry > 85 || math > 85) {
//     console.log("You are eligible for engineering!");   
// } else {
//     console.log("You are not eligible for engineering !");
// }

// Now, NOT operator

const isEligible =false;

if(!isEligible){
    console.log("it is reversed !");
}