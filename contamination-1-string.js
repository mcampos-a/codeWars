//8 Kyu
//Contamination #1 -String-
//Fundamentals

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"



function contamination(text, char){
//get the length of the str 
  let length = text.length
//create a variable to store a new str using the repeat method with the str length for number of repeats
  let mutation = char.repeat(length)
//return the result str variable
  return mutation

}


//str -> can be empty, always will be getting a str, the str wont be null or undefined
//str -> can be empty and if not empty it will be a one length str or letter, always going to be a str, wont be recieving null or undefined values

//str -> replace letters in the text str with the char input so that the return is a new str. Even change spaces in the text input str

console.log(contamination("Yo Mama", 'z'), "zzzzzz")
console.log(contamination("I am the best", 'm'), "mmmmmmmmmmmmm")


