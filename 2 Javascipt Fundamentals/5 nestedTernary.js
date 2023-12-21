/**
 * Nested Condition use in Ternary Operator 
 */

const netMarks = 89;

if(netMarks<40){
    console.log("D Grade");
} else if(netMarks<60){
        console.log("C Grade");
    }else if(netMarks<75){
        console.log("B Grade");
    } else if(netMarks<85){
        console.log("A Grade")
    } else{
        console.log("Genius");
    }

const result = netMarks<40 ? "D Grade" : netMarks < 60 ? "C Grade" :  netMarks<75 ? "B Grade" :
    netMarks < 80 ? "A Grade" : "Genius";

console.log(result);