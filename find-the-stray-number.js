//7 Kyu
//Find the stray number
//Fundamentals, Algorithms

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//Solution I
function stray(numbers) {
//use the .find() method to iterate through array
//then use .indexOf() and .lastIndexOf() to check if an element is unique. If the index and last index are the 
//same the element does not have duplicates and is unquie
  return numbers.find(el=> numbers.indexOf(el) === numbers.lastIndexOf(el))

}

//Parameters
//arr-> of integers, wont empty, it wont be null, always an array dont need to check for other data types.

//Return
//num -> the only unique num in the array. 

//Example
//console.log(stray([1,1,2]), 2)
//console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3)














