//8 Kyu
//Convert a Boolean to a String
//Fundamentals, strings

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


//Solution I

function booleanToString(b){
  //check if input is true if so return string true else return string false
  return b === true ? 'true' : 'false'
}

//Parameters
//boolean -> true or false, no null or other data types coming in, no empty values.

//Return
//string -> 'true' or 'false'

//Example
//console.log(booleanToString(true), 'true')
//console.log(booleanToString(false), 'false')