//7 Kyu
//Return the first M multiples of N
//fundamentals, mathematics

// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]



//Solution

function multiples(m, n){
//set up an empty array to store the resulting multiples of n
  let result = []
//loop starting at 1 and ending at m
  for(let i=1 ; i<=m; i++){
//at each iteration add multiples of n 
    result.push(n*i)    
    
  }
//return the result array
    return result
}


//num1 -> a number representing the number of multiples of n that need be in the new array, wont be empty, wont be null or undefined, will always be a num
//num2 -> a number that will be spread in multiples of itself into a new array, wont be empty, wont be null or undefined, will always be a number

//arr -> an array starting with n and includes multiples of n the number of m times.

console.log(multiples(3, 5.0), [5.0, 10.0, 15.0])