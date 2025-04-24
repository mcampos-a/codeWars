//7 Kyu
//Summing up a numbers digits
//Fundamentals

// Write a function which takes a number as input and returns the sum 
// of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//Solution I
function sumDigits(number) {
//use the String() method to split the number argument into individual nums.
   return String(number).split('').reduce((sum, current)=> sum + Math.abs(Number(current)), 0)
//use the reduce method to sum the digits

//return the sum

}

//Parameters
//num -> can be negative, noever empty, only a num coming in, not null.

//Return
//num -> positive, sum of the digits of input num

//Example
//console.log(sumDigits(31), 4)
//console.log(sumDigits(-32), 5)












