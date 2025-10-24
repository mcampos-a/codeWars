//7 Kyu
//Tidy Number
//Fundamentals, arraus, strings

// Definition
// A Tidy Number is a number whose digits are in non-decreasing order.

// Task
// Given a number, determine if it is tidy or not.

// Notes
// The number passed will always be positive.
// Return the result as a boolean.
// Examples
// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).


//Solution

function tidyNumber(n){
//store the incoming number into an array of digits
  let numArr = [...String(n)]
//loop through the array of nums and check if the following number is greater or equal to the current number
  for(let i=0; i<numArr.length; i++){
//if so return true 
    console.log(n)
    if(numArr[i] > numArr[i+1]){
      return false
    }
  }
  return true
}

//num -> positive num, wont be empty wont be null or undefined, will always be a positive num

//boolean -> true if the nums digits are in ascending order, false if its not in ascending order


console.log(tidyNumber(13579), true)



