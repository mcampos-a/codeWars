//8 Kyu
//Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//Solution I

function sumStr(a,b) {
//take str inputs and use the Number() method to add them up. Store in a variable
    let sum = Number(a) + Number(b)
//return the input with a String() method 
    return String(sum)
}
    

//Parameters
//str1, str2 -> str nums coming in for both inputs, can be empty = 0, wont be null, will always be str nums coming in. str inout will never exceed 32-bit integer limit

//Return
//str -> sum of the nums and returned as str. If inputs are empty treat them as zeros

//Example
//console.log(sumStr('4','7'), '11')
//console.log(sumStr('4',''), '4')











