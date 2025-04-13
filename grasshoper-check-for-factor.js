//8 Kyu
//Grasshopper - Check for factor
//Fundamentals

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


function checkForFactor (base, factor) {
  //check if base is a factor of the input factor and return if it is true
  return base % factor == 0
}
  

//Parameters
//num1, num2 -> num1 = base and num2 = factor. both are positive, wont be null and wont be empty.

//Return
//boolean -> true (if(base % factor == 0))

//Example
//console.log(checkForFactor(10, 2), true)
//console.log(checkForFactor(9, 2), false)








