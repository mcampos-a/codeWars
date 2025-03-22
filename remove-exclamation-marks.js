//8 Kyu
//Remove exclamation marks
//Fundamentals, Strings

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//Solution I

function removeExclamationMarks(s) {
  //set up empty string
  let cleanWord = ''
  //loop through string
  for (let letter of s){
     //if char is not a '!' add the char to string variable
    if(letter != '!'){
      cleanWord+=letter
    }
  }
  //return string variable
  return cleanWord
}


//Parameters
//str-> string can be epmty, not null, only taking a string


//Return
//str-> with no exclamation marks

//examples
//console.log(removeExclamationMarks('Hello World!'), 'Hello World')

