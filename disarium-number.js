//7 Kyu
//Disarium Number
//Fundamentals, mathematics


// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"




//Solution 

function disariumNumber(n){
//set up a variable to store the sum of the digits to its placement powers
  let check = 0
//take the number and spread its digits into an array of individual nums
  let numArr = [...String(n)]
//loop through the digits array 
//take each number and multiply it to the power of its index plus 1 
//add that number to the variable
  numArr.forEach((el,i)=> check+= Number(el)**(i+1))
  //check if the variable is equal to n
  //if so retrun "Disarium !!"
  //else return "Not !!"
  return n === check ? "Disarium !!" : "Not !!"

}

//num -> a number that will always be positive, wont be null or undefined, will always be a positive number

//str -> if the input number equals the sum of each digit to the power of its position in the number then return "Disarium !!" else return "Not !!"

console.log(disariumNumber(89), "Disarium !!")

