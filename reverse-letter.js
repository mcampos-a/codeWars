//7 Kyu
//Reverse Letter
//Fundamentals

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//Solution I

function reverseLetter(str) {
//set up an empty variable to store our result str elements
  let result = ""
//set up a variable with lower case alphabet to test input str
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
//loop through the str starting from the end and check if there are any elements that are not found in the lwoer case alphabet
  for( let i= str.length-1; i>=0; i--){
    if(alphabet.indexOf(str[i]) != -1){
//if the element is a lowercase letter then add it to the str. else ignore it
      result += str[i]
    }
  }
//return the str result. 
  return result
  
}


//str-> lowercase letters, digits, symbols. No empty str, no null or undefined all inputs are valid, always only a str

//str-> with only letter, no symbols or digits. 

// console.log(reverseLetter("a1ma2m(oy)"), "yomama")
// console.log(reverseLetter("ultr53o?n"), "nortlu")

