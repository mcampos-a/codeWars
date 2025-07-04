//7 Kyu
//Form The Minimum
//Fundamentals

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 
// Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679


//Solution I

function minValue(values){
//set up an emtpy string to store and concatenate each number
  let result = ''
//sort the array in ascending order filter out any duplicates
  let orderedArr = values.sort((a,b) => a-b).filter((el,i,arr)=> arr[i]!==arr[i+1])
//loop through the array and add each element to the str result variable
  orderedArr.forEach(el=> result+= el)
//convert the str number to a number and return
  return Number(result)
}

// arr -> nums from 1 to 9, only numbers coming in the array, only arrays coming in with nums, arr never empty, not null or undefined

// num -> smallest possible number when you concatenate the numbers together, igonre any duplicates, 


console.log(minValue([1,3,1], 13))
console.log(minValue([5,7,5,9,7], 579))
console.log(minValue([4,3,1,7,2,4,3], 12347))

