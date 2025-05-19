//8 Kyu
//Alternate capitalization
//Fundamentals, strings, arrays

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


//Solution I

function stringToArray(string){
//use the .split() method on the string and return it
  return string.split(" ")
}
    

//Parameters
//str -> words, can be empty, never null, only will always get a str

//Return
//arr-> of str words 

//Example
//console.log(stringToArray("This is a codewars kata"), ["This","is","a","codewars","kata"])

