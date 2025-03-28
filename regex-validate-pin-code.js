//7 Kyu
//Regex validate PIN code

//Fundamentals, Lists, Arrays

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//Solution I

function validatePIN (pin) {
  //store length of pin in a variable for later use
  let length = pin.length
  //declare a str with numbers 0-9 to check each element
  let nums = "0123456789"
  //loop through pin to check if each pin element is found in our number str.
  for(let i=0; i<length; i++){
  //return false if at least one element is not a number
    if(nums.indexOf(pin[i]) === -1) return false
  }
  //return true if length of pin is 4 or 6 
  return length === 4 || length === 6
}

//Parameters
//str -> str.length = 4 or str.length = 6, no other data types coming in, can be empty, pin only takes string nums, never null

//Return
//boolean -> true if str.length is 4 o 6, and each element in str is a num bewtwee, 0-9.
//else false if anything else comes in.

//Example 
//console.log(validatePIN("1234"), true)
//console.log(validatePIN("12345"), false)
//console.log(validatePIN("a234"), false)