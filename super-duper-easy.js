//8 Kyu
//Super Duper Easy
//Fundamentals

// Make a function that returns the value multiplied by 50 and 
// increased by 6. If the value entered is a string it should return "Error".


function problem(x){
  return typeof x === "string" ? "Error" : (x * 50) + 6
}
  

//Parameters
//num -> not empty, never null, may come as a str,

//Return
//num -> if integer return (x * 50) + 6
//if input == str then return "Error"

//Example
//console.log(problem(5), 256)
//console.log(problem("5"), "Error")








