//8 Kyu
//True for all?
//fundamentals, arrays

// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True
// Help
// Here's a (Ruby) resource if you get stuck:

// http://www.rubycuts.com/enum-all





//Solution

function all( arr, fun ){
//apply the function to the arr
  return arr.every(fun)
}

//arr -> of nums, can be empty, wont be null or undefined, will always be an array 
//function -> a function that checks each number in the arr paramater will give a true or false


console.log(all([1,2,3]), )