//7 Kyu
//Largest pair sum in array
//Fundamentals

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


//Solution I

function largestPairSum (numbers) {
//sort the array in descending order.
  let orderedArr = numbers.sort((a,b)=> b-a)
//add up the 0th and 1st elements and return the value
  return orderedArr[0] + orderedArr[1]
}

//arr -> never empty will always have at least two elements, not null or undefined, always will be an array

//num -> the sum of the two largest elements in the array

console.log(largestPairSum([10, 14, 2, 23, 19]), 42)