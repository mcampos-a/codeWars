//8 Kyu
//Is it a number?
//Fundamentals


// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")


//Solution 

function isDigit(s) {
// Use parseFloat to convert the string to a number, handling decimals leading/trailing whitespace.
  const parsedNumber = parseFloat(s);
//if the parsed number is NOT NaN (meaning the string was a valid number)
//and the original string, with whitespace trimmed, equals the parsed number when converted back to a string.
  return !isNaN(parsedNumber) && s.trim() === String(parsedNumber);
}