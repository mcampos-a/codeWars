//6 Kyu
//Detect Pangram
//Fundamentals, Lists, Arrays

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//Solution I

function isPangram(string){
  //convert string to lower case
  let str = string.toLowerCase()
  //create a sring with all 26 letters of alphaphet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  //loop through array and check if each letter in the input string is in the alphabet string we created
  for(let i = 0; i<alphabet.length; i++){
  //if not, then there is a letter missing return flase 
    if(str.indexOf(alphabet[i]) === -1){
      return false
    }
  }
  //if the loop noes not return a false then return true, since we have a complete alphabet in the string.
  return true
}


//Paramaters
//str-> words, must contain all 26 letters to == pangram, ignore numbers, punctuation, and not case sensitive. 
//the string can be empty, not null, no funny bizz

//return
//check if string is a pangram == string that contains all 26 letters of aplh
//if pangram-> true else ->false

//example
//console.log(isPangram("The quick brown fox jumps over the lazy dog"), true)