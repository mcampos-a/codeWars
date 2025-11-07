//7 Kyu
//Strong Number
//Fundamentals, mathematics

// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".


//Solution

function strong(n) {
//set up a variable to keep track of the sum of factorials and make a comparison 
  let sum = 0
//spread the num into an array of digits
  let numArr = [...String(n)]
//loop through the digits aray and have an inner loop to calculate the factorial
  for(let i=0; i<numArr.length; i++){
    let result = 1
    for(let j=2; j<=Number(numArr[i]); j++){
      result *=j
    }
    sum += result
    
  }
  console.log(sum)
//check if the sum is equal to input num and return if its a strong
  if(sum === n){
    return "STRONG!!!!"
  }else{
    return "Not Strong !!"
  }
}

//num -> a number, wont be empty, wont be null or undefined, will always be a num

//str -> if the input num is equal to the individual digits factorials summed up return that the num is a strong else not a strong

console.log(strong(145), "STRONG!!!!")







