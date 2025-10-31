//7 Kyu
//No oddities here
//Fundamentals, arrays

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


//Solution

function noOdds( values ){
  return values.filter(el=> el % 2 === 0)
}



