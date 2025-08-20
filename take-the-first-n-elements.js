//6 Kyu
//Take the First N Elements
//Fundamentals

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.



//Solution

function take(arr, n) {
//take a slice of the incoming array up until n
//return the new sliced array
  return arr.slice(0,n)
}


//arr -> never empty, not null or undefined, always am array of nums coming in
//num -> the number that marks the limit of array repeated. 

//arr -> with elements up to number n

console.log(take([1,2,3,4,5,6], 3), [1,2,3])