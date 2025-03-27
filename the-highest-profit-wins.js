//7 Kyu
//The highest profit wins!

//Fundamentals, Lists, Arrays

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and 
// sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to 
// check for null, undefined or similar.


//Solution I

function minMax(arr){
  //set up an empty resutl array
  let result = []
  //I will sort the array in ascending order
  let sortedArr = arr.sort((a,b)=>a-b)
  //I will push the first and last number into the result array 
  result.push(sortedArr[0])
  result.push(sortedArr[sortedArr.length-1])
  //return result array
  return result
}

//Parameters
//arry -> nums, length >= 1, never empty, never null, only always getting an array

//Return
//array -> [minEl, maxEl]

//Example
//console.log(minMax([1,2,3,4,5]), [1,5])