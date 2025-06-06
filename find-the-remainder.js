//8 Kyu
//Find the Remainder
//Fundamentals, mathematics

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

//Solution I

function remainder(n, m){
//declare two variables smaller and bigger num
  let smaller, bigger
//check to see which number is bigger and assign them accordingly to our variables
  if(n>m){
    bigger = n
    smaller = m
  }else{
    bigger = m
    smaller = n
  }
//if smaller num is 0 return Nan
  if(smaller === 0) return NaN
//if bigger num is 0 return 0
  if(bigger === 0) return 0

//use the % operator and divide the bigger number by the smaller and return the remainder
  return bigger % smaller
}

//parameters
//num1, num2 -> the nums wont be empty, they can be zero, they wont be null or undefined, only always getting a num

//Return
//num -> the remeinder of larger num divided by the smaller num. If divding by zero return Nan

//Example
//console.log(remainder(0, -1), 0)
//console.log(remainder(17,5), 2)
//console.log(remainder(0,1), NaN)
