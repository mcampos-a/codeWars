//7 Kyu
//Maximum Gap 
//Fundamentals, arrays


// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

// Note : Regardless the sign of negativity .

// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
// Explanation:
// The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

// Note : Regardless the sign of negativity .

// maxGap ({-54,37,0,64,640,0,-15}) //return (576)
// Explanation:
// The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

// Note : Regardless the sign of negativity .

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou


//Solution 

function maxGap (numbers){
//set up a variable to store the highest difference
  let diff = 0
//sort the array
  let sortedArr = numbers.sort((a,b)=> a-b)
//loop through the array to calculate differences between adjecent elements using their absolute values
  for(let i=0; i<sortedArr.length; i++){
//check if the difference is greater than what is stored in the diff variable, if so reasign the variable 
    if(Math.abs(sortedArr[i]-sortedArr[i+1]) > diff){
      diff = Math.abs(sortedArr[i]-sortedArr[i+1])
    }
  }
//return the diff variable
  return diff
}


//arr -> of nums, with at least three numbs, wont be empty, wont be null or undefined

//num -> when the arr is sorted, calcualte the difference between adjecent elements and return the largest difference. Account for differences in negative numbers by using their absolute values.

console.log(maxGap([2,5,1,10]), 5)

