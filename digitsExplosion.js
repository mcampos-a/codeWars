//7 kyu
//Digits Explosion
//fundamentals, strings

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
//set up a variable to store the new str
  let result = ''
//loop through the input str
  for (let i=0; i<s.length; i++){
//add the digit using the repeat method to the result variable
    result+= s[i].repeat(s[i])
  }

//return the result str
  return result
}

//str -> a string of nums between 0 and 9, can be empty, wont be null or undefined, will always be str

//str -> with each digit repeated the number of times itself

console.log(explode('321'), '333221')