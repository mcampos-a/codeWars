//8 Kyu
//For Twins 1 Types
//fundamentals

// Prolog:
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

// Good luck!



//Solution

function typeValidation(variable, type) {
//check if the typeOf variable === type if so return true else return false
  return typeof variable === type
}

//num or str -> it will be a variable storing either a number or a str num, wont be empty, wont be null or undefined, will always be a num or str num

//boolean -> true if the type of data type of the parameter variable is equal to argument type else false

console.log(typeValidation(21, "number"), true)
console.log(typeValidation("21", "number"), false)

