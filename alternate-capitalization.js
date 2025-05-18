//7 Kyu
//Alternate capitalization
//Fundamentals, strings

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

//Solution I

function capitalize(s){
//set up emtpy even str to handle our even cap solution
  let even = ""
//set up empty variable to hold our odd str cap
  let odd = ""
//loop through input str
  for(let i=0; i<s.length; i++){
//check the index if its -> i % 2 === 0 ? if so cap the element and add it to the even variable else cap the odd element and it to the odd str
    i%2 == 0 ? even += s[i].toUpperCase() : even += s[i]
  }
  for(let i=0; i<s.length; i++){
//check the index if its -> i % 2 === 0 ? if so cap the element and add it to the even variable else cap the odd element and it to the odd str
    i%2 != 0 ? odd += s[i].toUpperCase() : odd += s[i]
  }
//return arr
  return [even,odd]
};
    

//Parameters
//str-> never empty, wont be null or undefined, always will get a str. 

//Return
//arr -> w/ two elements, two strings. One str will contain every even index capilized including 0, and the other elment will include every odd index capilized. 

//Example
//console.log(capilized("codewars"), ["CoDeWaRs","cOdEwArS"])

