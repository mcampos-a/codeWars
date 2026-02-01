//7 Kyu
//Specisl number 5
//Fundamentals, mathematics

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Definition
// A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5

// Given a number, determine if it is a special number or not.

// Notes
// The number passed will be positive (N > 0)

// All single-digit numbers within the interval [1:5] are considered special numbers

// Examples
// 2 ==> return "Special!!"
// Explanation: It's a single-digit number within the interval [1:5]

// 9 ==> return "NOT!!"
// Explanation: Although, it's a single-digit number but Outside the interval [1:5]

// 23 ==> return "Special!!"
// Explanation: All the number's digits formed from the interval [0:5] digits

// 39 ==> return "NOT!!"
// Explanation: Although there is a digit (3) within the interval,
//              the second digit is not (Must be ALL the number's Digits)

// 59 ==> return "NOT!!"
// Explanation: Although there is a digit (5) within the interval,
//              the second digit is not (Must be ALL the number's Digits)

// 513 ==> return "Special!!"

// 709 ==> return "NOT!!"


//Solution 

function specialNumber(n){
//set up a str of nums from 0-5
  let test = '012345'
//split the number into an array of str numbers
  let check = String(n).split('')
//loop through array and check if the index of each number is found in the str num variable
  for(let i=0; i< check.length; i++){
//if any number is not found in the str num variable return false else true
    if(test.indexOf(check[i]) === -1){
      return 'NOT!!'
    }
  }
  return 'Special!!'
}

//num -> will always be pos numbers, can be empty, wont be null or undefined, will always be a pos number

//str => if all the numbers in the num  provided are between 0-5 return "Special!!" else return "NOT!!"

console.log(specialNumber(513), "Special!!")