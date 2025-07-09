//8 Kyu
//Remove First and Last Character
//Fundamentals, Strings

// Remove First and Last Character
// Task
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// removeChar('eloquent') // -> 'loquen'
// removeChar('country')  // -> 'ountr' 
// removeChar('person')   // -> 'erso'
// removeChar('ab')       // -> '' (empty string)
// removeChar('xyz')      // -> 'y'
// Function Signature
// function removeChar(str) {
//   // Your code here
// }
// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters
// Test Cases
// Your solution will be tested against:

// Basic functionality with common words
// Edge cases with 2-character and 3-character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths


//Solution I

function removeChar(str){
//split the str into an array of letters
    str = str.split('')
//pop the input str
    str.pop()
//shift the input str
    str.shift()
//return the str
    return str.join('')
};

//str -> always will have two elements, will be a str, can be empty, wont be null or undefined

//str -> pop and shift the last and first element of the input str. If the str.length is only 2 return empty str

console.log(removeChar('country'), 'ountr')
console.log(removeChar('ab'), '')




