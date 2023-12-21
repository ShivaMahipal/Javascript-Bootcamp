/**
 * Nullish Coalescing 🤯🚀
 */

let firstName;
let secondtName ="";
console.log(firstName);
console.log(secondtName);

// let's say if first name is not given so here we uses Nullish Coalescing 
// The nullish caseling will give us second output only when either full value is null or undefined
console.log(firstName ?? "HiddenGeek");
console.log(secondtName ?? "HiddenGeekster");
console.log(undefined ?? "HiddenGeekster");
console.log(null ?? "HiddenGeekster");
console.log(firstName || "HiddenGeek"); // here we'll get the second value as OR operator will consider the empty string 
// as falsy value and it will result into second value


const a = 0;
console.log(a || 1); // here OR operator will consider 0 as falsy value
console.log(a ?? 1); // here Nullish operator doesn't consider 0 as fasly value and it will only checks for null and undefined values
