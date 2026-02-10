//7 Kyu
//Basic Calculator
//fundamentals

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).



//Solution

function calculate(num1, operation, num2) {
let ops = '+-*/'
//check if the operator is one of the following given operators, if not return null
  if(ops.indexOf(operation) === -1) return null
//check if the operator is / and the num2 is 0 and return null of both are true
  if(operation === '/' && num2 === 0) return null
//perform the operation based on the given operator and return the result
  if(operation === '+') return num1 + num2
  if(operation === '-') return num1 - num2
  if(operation === '*') return num1 * num2
  if(operation === '/') return num1 / num2

}

//num -> number used in a calculation, wont be empty, wont be null or undefined, will always be a number
//str -> a str arithmatic symbol, if the str is not one of the operators +, -, *, or / return null
//num -> number used in a calculation, wont be empty, wont be null or undefined, will always be a number

//number -> perform the operation based on the arithmatic sign in the str, but if the sign is / and the second num is 0 return null. Also return null if the operator is not one of the four provided

console.log(calculate(2,"+", 4), 6)