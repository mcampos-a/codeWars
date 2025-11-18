//7 Kyu
//max diff - easy
//Fundamentals, strings

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

//Solution


function maxDiff(list) {
//check for arrays of one or no lengths
  if(list.length < 2) return 0
//sort the incoming array in descending order
  let sortedArr = list.sort((a,b)=>b-a)
  
  console.log(sortedArr)
//subtract the frist number from the last number of the array and return it
  return sortedArr[0] - sortedArr[sortedArr.length-1]
};

//arr -> of nums pos and neg, can be empty, wont be null or undefined, will always be an arry of nums

//num -> difference between largest and smallest value in the input array

console.log(maxDiff([1, 2, 3, -4]), 7)

