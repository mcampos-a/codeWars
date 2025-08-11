//7 Kyu
//Sorted? Yes? No? How?
//Fundamentals, sorting, arrays

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal



//Solution

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}


//arr -> of nums, not empty will always have at least 2 elements, never null or undefined, always an array of nums, there will be no arrays where all the nums are equal

//str -> if arr.sort() == arr is assending return "yes, ascending", if arr.sort(descending) == arr return "yes, descending", else return "no"

console.log(isSortedAndHow([1,3,9,6]), "no")
console.log(isSortedAndHow([4,5,6,7]), "yes, ascending")
console.log(isSortedAndHow([10,9,8]), "yes, descending")