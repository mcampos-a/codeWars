//8 Kyu
//Largest Elements
//Fundamentals, strings

// Write a program that outputs the top n elements from a list.

// Example:

// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
// ==> [6, 7]


//Solution 

function largest(n, array) {
//set up an empty array to store the result
  let result = []
//sort the array to a descending order
  let sortedArr = array.sort((a,b)=>b-a)
//loop thrugh the sorted array from 0 to the argmuent of n and shift() each element to the new array
  for(let i=0; i<n; i++){
    result.unshift(sortedArr[i])
  }
//return result
  return result
}

//num -> the number of elements from acending order of highest number, wont be empty, wont be null or undefined, will always be a number

//arr -> array of numbers, scrambled, can be empty, wont be null or undefined, will always be an array

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]), [6,7])
