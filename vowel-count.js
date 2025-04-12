//7 Kyu
//GVowel Count
//Fundamentals, strings

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



//Solution I

function getCount(str) {
  //decalre a  variable to keep track of vowels
  let count = 0
  //declare a str with vowls
  let vowels = 'aeiou'
  //loop through the vowls string and check if any letter from the vowls str are present in the input str
  for(let i=0; i<str.length; i++){
      //input str has a vowel increase counter
    if(vowels.includes(str[i])){
      //return result counter
      count++
    }
  }
  return count
}
  

//Parameters
//str -> words, only lower case, can be empty, wont be null

//Return
//num -> count of lower case vowels

//example
//console.log(getCount("edmund and max"), 4)
//console.log(getCount("bernardo just got here"), 7)






