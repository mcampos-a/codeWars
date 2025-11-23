//6 kyu
//Dashatize It
//fundamentals, arrays, strings

// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  //Make sure we are only working with a positive num and make it a str num to be able to iterate through it
  const numStr = String(Math.abs(num));
  //set up a variable to store our final str num
  let result = '';
  //loop through the str num
  for (let i = 0; i < numStr.length; i++) {
  //at each loop store the digit as a number for comparing
    const digit = parseInt(numStr[i]);

    // Check if the current digit is odd
    if (digit % 2 !== 0) {
      // Add a dash before if it's not the first character and the previous char wasn't a dash
      if (i > 0 && result[result.length - 1] !== '-') {
        result += '-';
      }
      //add the current digit
      result += digit;
      // Add a dash after if it's not the last character and the next char is an even num
      if (i < numStr.length - 1 && parseInt(numStr[i + 1]) % 2 == 0) {
        result += '-';
      }
    } else {
    //if its not odd then it is even and we can add the digit
      result += digit;
    }
  }
  //return the result str
  return result;
}

//num -> a number with even and odd digits, can be empty, wont be null or undefined, will always be a number

//str -> return a str with odd digits having a '-' before and after the odd num but dint start or end the str with a dash, evens come along unaltered

console.log(dashatize(234), '2-3-4')
console.log(dashatize(38956), '3-8-9-5-6')