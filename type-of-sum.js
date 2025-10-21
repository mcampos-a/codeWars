//8 Kyu
//Type of sum
//Fundamentals

// Return the type of the sum of the two arguments


//Solution

function typeOfSum(a, b) {
  if(typeof a === "string" || typeof b === "string"){
    return "string"
  }else{
    return "number"
  }
}




