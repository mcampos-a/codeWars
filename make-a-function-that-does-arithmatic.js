//7 Kyu
//Make a function that does arithmatic!
//Fundamentals

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!
//Solution I

function arithmetic(a, b, operator){
//set up a conditional statement for a str operator match
//then do the operator and return the solution.
  if(operator === "add"){
    return a + b
  }else if(operator === "subtract"){
    return a - b
  }else if(operator === "multiply"){
    return a * b
  }else if(operator === "divide"){
    return a / b
  }

}

//Parameters
//num1 and num2 and str -> num1 and num2 will be positive integers and a will always be first in operation. No parameters will be empty, they will not be null, 
// and I am always expecting integers for num1 and num2 and a str for the str param.
//the str = four operators: "add", "subtract", "divide", "multiply"

//Return
//num -> a number that is the product of the str operator entered on the parameter. 

//Example
//console.log(arithmatic(5, 2, "add"), 7)
//console.log(arithmatic(5, 2, "subtract"), 3)













