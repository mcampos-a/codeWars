//8 Kyu
//String repeat
//Fundamentals, Strings 

// Write a function that accepts a non-negative integer n and a 
// string s as parameters, and returns a string of s repeated exactly 
// n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


//Solution I

function repeatStr (n, s) {
  return '';
}


//str -> can be empty, wont be null or undefined, always going to be a str
//num -> non negative num, wont be empty, can be zero, wont be null or undefined, always will be a num

//str -> use the .repeat method to repeat string a number of input n times and return

console.log(repeatStr(6, "I"), "IIIIII")
console.log(repeatStr(3, "Hola"), "HolaHolaHola")



