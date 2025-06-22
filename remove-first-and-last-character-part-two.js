//8 Kyu
//Remove First and Last Character Part Two
//Fundamentals, arrays, strings

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL



//Solution I

function array(string) {
//split the incoming str into an array seprated by commas
  let newStr = string.split(",")
//check for the edge cases if the new arr length is <= 2 return null
  if(newStr.length<=2) return null
//shift() and pop() the array of str nums
  newStr.shift()
  newStr.pop()
//join it with spaces and return it
  return newStr.join(" ")
}

//str -> sequence of chats separated by commas, str can be empty, wont be null or undefined, only always will be getting a str

//str-> shift() and pop() elements of the str and elements are space separated, if length is >= 2 return null

console.log(array("1,2,3"), "2")
console.log(array("1,2,3,4"), "2 3")