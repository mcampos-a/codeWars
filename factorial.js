//7 Kyu
//Factorial
//Fundamentals, algorithms

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.




//Solution


function factorial(n){
//take care of edge cases
  if(n===0) return 1
  
  if(n<0 || n>12) throw new RangeError()
  
//set up a variable to store the product
  let result 
//loop from the number n to 1 going down 
  for(let i = n; i>=1; i--){
    if(i==n){
      result = n
    }else{
//add the product to the result variable
      
    result*=i
    }
  }
//return product result
  return result
}


//num -> the number to truned into a factoria product, wont be empty, wont be null or undefined

//num -> if n < 0 or n > 12 throw RangeError, the product of the factorial 

console.log(factorial(5), 120) // 5! = 5 * 4 * 3 * 2 * 1 = 120



