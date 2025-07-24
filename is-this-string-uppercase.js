//8 Kyu
//Is the string uppercase?
//Fundamentals, strings

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



String.prototype.isUpperCase = function() {
//check if  str element equal to that str using the .toUpperCase() method
  return this.toString() === this.toUpperCase()
}

//str -> wont be empty, wont be null or undefined, will always be getting upper and lower case letters

//boolean -> true -if str[i] === str[i].toUpperCase() else false

console.log(isUpperCase("CCKEiC"), false)
console.log(isUpperCase("YOMAMAWASHERE"), true)