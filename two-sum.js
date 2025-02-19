//6 Kyu
//Two Sum
//Fundamentals, arrays, algorithms


// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]




//Solution I

function twoSum(numbers, target) {
  //set up an empty hash map to store numbers seen and their indices
  let map = {}
  //Iterate through the array one element at a time
  for(let i = 0; i <numbers.length; i++){
    //For each element calcualte the complement by subtracitng it from the target value
    let complement = target - numbers[i]
     //check if the complement exists as a key in the hash map.
     //If so return an array with the index of the existing complement and the current elements index
     if(complement in map){
      return [map[complement],i]
     }
    // If it doesnt store the current element as a key and its index as the value.
     map[numbers[i]]=i
  }
  
}

//Parameters
//arr-> w/integers, and a target num. two params, find two elements in arr that add up to target num.
//no empty array, no str, no symb, no funny bizz, arr always will contain 2 or more elements

//return
//return an array with the index of the numbers that add up to target

//Examples
//console.log(twoSum([1, 2, 3], 4), [0, 2] )
//console.log(twoSum([3, 2, 4], 6), [1, 2] )



