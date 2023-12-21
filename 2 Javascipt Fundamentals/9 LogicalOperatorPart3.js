console.log(3 || 2 || 1); // 3

console.log("" || 0 || 2); // 2

console.log("" || 0 || undefined); // umdefined

console.log("" || "null" || 2); // null

console.log(3 && 2 && 1);// 1

console.log("" && 0 && 2); // 

console.log("undefined" && "null" && "1");// 1
