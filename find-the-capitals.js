//8 Kyu
//Find the capitals
//Fundamentals, strings, arrays


// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


//Solution I

var capitals = function (word) {
//set up a variable with an empty array to store the index of each uppercase letter
  let result = []
//loop through the str 
  for(let i=0; i<word.length; i++){
//check if the element equals itself toUpperCase()
    if(word[i]===word[i].toUpperCase()){
      result.push(i)
    }
//if so push the index to our array. Else move on
  }
//return the result arr
  return result
};

//parameters
//str-> can be empty, lowercase and uppercase letters in the str, it wont be null or undefined, it will always be a str. 

//Return
//arr -> w/ the indices of only uppercase letters. 

//Examples
//console.log(capitals("CodEWaRs"), [0,3,4,6])
//console.log(capitals("MaXiStHeBesT"), [0,2,4,6,8,11])
//console.log(capitals("hello"), [])