//8 Kyu
//Is it a palindrome?
//Fundamentals

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


//Solution I

function isPalindrome(x) {
  //split string into an array of elemetns
  let itemsArray = x.split('')
  //reverse the order and join to a string
  let reversedString = itemsArray.reverse().join('')
  //check if the reversed string equals x if so return true else false. Make sure they are both lower case
  return x.toLowerCase() === reversedString.toLowerCase()
  
}


//Paramaters
//string, num, symbol -> inputs, never null, can be empty string, make it not case sensitive

//returns
//boolean -> true or false

//example
//console.log(isPalindrome('madam'), true)
//console.log(isPalindrome('Basketball'), false)

