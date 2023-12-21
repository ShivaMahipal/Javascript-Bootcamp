/**
 * try catch block
 * 
 * try{
 *  some line of code....
 * }catch(error){
 *  console.log(error);
 * }
 */


const userName= "Shiva Mahipal";
// here, we are making an error and from this error the rest of the 
// code will not work even if the rest code is correct
// console.log(Myname); 
// console.log(userName);

// let's use try and catch method

try{
    somefuntion();
    console.log(Myname);
    console.log("Hey, There!");
}catch(error){ // here, is a error object in catch() condition and it has some name 
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); // it will show from where the error has occured and what was the error
    console.log("Error Occured");
} // although f an error occured it will not try 
console.log(userName); 


