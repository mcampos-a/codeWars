//6 Kyu
//Replace With Alphabet Position
//Fundamentals, strings

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"




//Solution I

function alphabetPosition(text) {
  //convert the text string to lower case and split by letters
  let letters = text.toLowerCase().split('')
   //loop through array letters and create a new array holding the alphabet placement of each letter. There will be spaces included.
   let charCodes = letters.map((el)=> el.charCodeAt()-96)
  //loop through array of charCodes and filter our the spaces
    let onlyCodes = charCodes.filter((el)=>{
      if(el>=1 && el <=26){
        return el
      }
    })
  //join and return the array of character codes 
  return onlyCodes.join(' ')
}

//Parameters
//str-> nums, special chars, letters. str can be empty, not null, no funny bizz
//if letter -> replace with aplphabet position

//return
//str-> no letters, symbols. It will contain only integers corresopinding to the input letters alphabet position. Keep order and have a space in between each interger.

//examples
//console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
