//7 Kyu
//Even numbers in an array

//Fundamentals, arrays

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//Solution I

function evenNumbers(array, number) {
//loop through array and filter out all the odd numbers.
  let evenNums = array.filter(el=> el % 2 === 0)
//if the array length is greater than the number paramter use the .shift() method and remove until the length == number
  while(evenNums.length > number){
    evenNums.shift()
  }
//return arr
  return evenNums
}


//arr -> arr wont be empty, wont be null or undefined, always an array of nums coming.
// num -> wont be empty, wont be null or undefined, always a num. It represents the amount of even numbers from the end of the array to return

//arr -> w/ the last even numbers dicated by the num param given

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])