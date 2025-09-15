//6 Kyu
//Bouncing Balls
//Fundamentals, algorithms, mathematics

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



//Solution

// write the function isAnagram
var isAnagram = function(test, original) {
//split original into an array of strings
  let check = original.split('').toLowerCase()
//loop through the original str
  for(let i=0; i<original.length; i++){
//check if an index exists of each element in parameter original
    if(check.indexOf(test[i]) === -1){
//if one doesnt exhist return false
      return false
    }
//at the end of the loop all letters from parameter original exhists in test. Return true
    return true
  }
};

//str1 -> string of words, wont be empty, wont be null or undefined, will always be a str
//str2 -> string of words, wont be empty, wont be null or undefined, will always be a str

//boolean -> true if all the letters from test are in original, else false

console.log(isAnagram("foefet"), "toffee")




