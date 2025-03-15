//7 Kyu
//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
//Fundamentals, Mathematics

// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? 
// Because this sum gives the same number: 
// 89 = 8^1 + 9^2
// The next number in having this property is 135:
// See this property again: 135 = 1^1 + 3^2 + 5^3
 
// Task
// We need a function to collect these numbers, that may receive two integers a,b that defines the range [a,b]
//(inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

//Solution I

function sumDigPow(a, b) {
  //set up emtpy array to store nums with funky property
  let result = []
  //loop through all nums in the range between a - b including them. Start at a and go up one until a is > b
  for (let i=a; i<=b; i++){
  //take a as a string, split into array of nums (to be able to iterate through it to check for funky prop)
    let digits = String(i).split('')
  //multiply each num to the power of their index + 1 and reduce the aray of nums (making sure to convert back to nums)
    if(i === digits.reduce((sum, current, index)=> sum + Math.pow(Number(current), index+1),0)){
  //if each num starting at a is equal to the reduced sum of its numbers push the num to the result array
      result.push(i)
    }
  }
  //return array
  return result

}


//Parameters
//two nums -> no null nums, only taking nums, no empty nums, nums will represent the range of test with them being inclusive. 

//return
//arr-> of nums that meet the funky charatersitic. if num is split to individual digits and those digits are multiplied to the power of their index (startig at 1) and it equals num. 
//Push num to array
//can return empty array

//examples
//console.log(sumDigPow(1,100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])