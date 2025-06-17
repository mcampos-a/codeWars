//8 Kyu
//Sum of differences in array
//Fundamentals, arrays

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//Solution I

function sumOfDifferences(arr) {
//set up a result varibale where we can store our sum
  let result = 0
//check if the array length is less than two if so return 0
  if(arr.length < 2) return 0
//sort the array in descending order
  let sortedArr = arr.sort((a,b)=> b-a)
//loop through array and  calcualte the difference of each consecutive element pair. (arr[i]-arr[i+1])
  for(i=0; i<sortedArr.length-1; i++){
//add it to our result variable
    result += sortedArr[i] - sortedArr[i+1]
  }


//return sum variable
  return result
}

//array -> of nums, the array can be empty, it wont be null or undefined, only array coming in. 

//num -> sum of the difference of consecutive pairs starting from an array ordered in descending order. If array.length === 0 || array.length < 2 return 0

console.log(sumOfDifferences([2,1,10], 9))
console.log(sumOfDifferences([-3,-2,-1], 2))