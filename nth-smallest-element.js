//7 Kyu
//Nth Smallest Element
//Fundamentals, arrays

// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 


//Solution

function nthSmallest(arr, pos){
//create a variable to hold the array given and sort it
  let set = [...arr].sort((a,b)=> a-b)
//return the element of the unique array by selecting the position-1 to account for the zero index
  return set[pos-1]
}

//array -> of nums, wont be empty, length of array will always be at least 3, wont be null or undefined, will always be an array of nums
//num -> the position param for the return, wont be empty, wont be null or undefined, will always be a num.

//num -> the smallest number of the array based on the position indicated in the second paramter. Remember the index starts at zero

console.log(nthSmallest([3,1,2], 2), 2)
console.log(nthSmallest([2,1,3,3,1,2], 3), 2) //[1,1,2,2,3,3]





