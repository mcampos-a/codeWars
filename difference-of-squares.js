//7 Kyu
//Difference of squares
//fundamentals, arrays

// Recreation of Project Euler problem #6

// Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
// The sum of the squares of the numbers is:

// 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbers is: 3025 - 385 = 2640





//Solution

function differenceOfSquares(n) {
//create a variable to store the sum squared
  let numSquare = 0
//create a variable to store the sqaure of each num summed
  let sumSquare = 0
//loop from 1 to n, add the numbers and square the sum
//And, squareing each number and adding them to the variable
  for(let i=1; i<=n; i++){
    numSquare+=i
    sumSquare+= i**2
  }
  numSquare = numSquare**2
  
//return the difference
  return numSquare - sumSquare 
}

//num -> a number that we will check two different type of squaring strategies, wont be empty, wont be null or undefined, will always be number between 1 and 100

//num -> the differnce between the sum of nums between 1 and n squared and each numbered from 1 to n squared and summed

console.log(differenceOfSquares(10), 2640)