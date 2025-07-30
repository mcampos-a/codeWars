//8 Kyu
//Simple Calculator
//Fundamentals

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// You should return the result of applying the given operation to these numbers.

// Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

// If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

// return a value:
// "unknown value" (JS, PHP, Python)
// throw an exception:
// std::invalid_argument (C++)
// ArgumentException (C#)
// IllegalArgumentException (Java)
// Example:
// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// refer to the description for what you should return in this case

// # Specifically for dynamically-typed languages:

// arguments: 1, "k", "*"
// should return "unknown value"
// Good luck!



function calculator(a,b,sign){
  let errorMsg = "unknown value"
//check to see if the first two parametors are numbers if not return unknown value
  if(typeof a != 'number' || typeof b != 'number' ) return errorMsg
//check to see if the first parameter is not one of the four operators return unknown if not
//now perform the operation based on the operator given

  switch(sign){
    case '+':
        return a + b;
        break
    case '-':
        return a - b;
        break
    case '*':
      return a * b;
      break
    case '/':
      return a / b;
      break
    default:
      return errorMsg
  }
}


//num -> can be empty, wont be null or undefined, the first two arguments consider other data types coming
//num -> can be empty, wont be null or undefined, the first two arguments consider other data types coming
//str -> The operator used for the simple calculator, the operator can be + - * / buuttt it can also be other strs account for that, wont be empty, wont be null or undefiend

//num -> the result of the first tow parameters operated by the third parameter.
  //-> if either the num params or the oeprator param is not the expected num or str return "unknown value"

  console.log(calculator(2, 4, '+'), 6)
  console.log(calculator(2, "5", '+'), "unknown value")
  console.log(calculator(2, 10, '$'), "unknown value")
  