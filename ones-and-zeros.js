//7 Kyu
//Ones and Zeros
//Fundamentals, arrays

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.


//Solution I

const binaryArrayToNumber = arr => {
//join the array into a str of nums with no spaces
  let strBinary = arr.join('')
 //use the js built in method of parseInt() with a base of 2 and we pass the binary str and return the num
  return parseInt(strBinary,2)
};

//arr -> w/only bianery nums, wont be an emtpy arr, no null or undefined, only arr coming in with the binary nums.

//num -> reflects the sum of the binary values in the array

console.log(binaryArrayToNumber([0, 1, 1, 0]), 6)
console.log(binaryArrayToNumber([1,1,1,1]), 15)