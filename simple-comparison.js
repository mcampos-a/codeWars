//8 Kyu
//Simple Comparison
//fundamentals, strings

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().



//Solution

function add(a, b){
//evaulate if the arguments are both equal in value
  return a == b
}

//num or str -> two parameters that can be either a str num or a num, wont be empty, wont be null or undefined

//bool -> return true if the arguments are the same value even if they are different data types, and false if they are not the same value

console.log(add('1', 1), true)