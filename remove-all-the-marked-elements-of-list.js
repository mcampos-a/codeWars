//7 kyu
//Remove all the marked elements of list
//fundamentals, algorithms, and data structures

// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
// Enjoy it!!

Array.prototype.remove_ = function(integer_list, values_list){
//loop through the incoming first array and check if the number is included in the second array
//if so filter the number out and move on
//if not keep the number
//return the filtered array
  return integer_list.filter((el,i)=> !values_list.includes(el))
}

//arr1 -> of nums, wont be null or undefined, can be empty, will always be an array of nums
//arr2 -> of nums, wont be null or undefined, can be empty, will always be an array of nums

//arr -> an array of nums that will have filtered the second array argument from the first array argument

console.log(remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]), [2,2,4])

