//8 Kyu
//Formatting decimal places #0
//Fundamentals

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// -3.3424 is rounded -3.34



function twoDecimalPlaces(n) {
//use the to Math.round() method on the number. Multiply it by 100 and then divide the result by 100
  return Math.round(n * 100) / 100
}


//num -> always will be num, never null or undefined, not empty

//num -> return a number that is rounded two decimal places.

console.log(twoDecimalPlaces(5.5589), 5.56)
console.log(twoDecimalPlaces(-3.3424), 3.34)