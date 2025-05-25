//7 Kyu
//Flatten and sort an array
//Fundamentals, arrays, sorting

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

//Solution I

"use strict";

function flattenAndSort(array) {
//set up empty array to push values as we loop through them
  let result = []
//loop through input array 
    array.forEach((el,i)=> result.push(...el))
  
//at each array element access each element and push it to result array

//sort the result array and return
  return result.sort((a,b)=> a-b)
}

//Parameters
//array -> of two dimensial arrays, can be empty, wont be null or undefined, 

//Return
//arr-> with all integers in an ascending order array, flattened into a single array

//Example
//console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])