//8 Kyu
//Find the position!
//Fundamentals

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested



//Solution I

function position(letter){
//set up a template str that returns the message provided. Use the charCodeAt(0) to obtain the unicode value where a = 97
//make sure to subract 96 from the return unicode to align it with the placement of the alphabet
  return `Position of alphabet: ${letter.charCodeAt(0)-96}`
}


//str -> str letter, only lower case letter will be coming in, no empty letter, not null or undefined, only str coming in

//str-> that start with "Position of alphabet: #"

console.log(position("a"), 1)
console.log(position("z"), 26)

