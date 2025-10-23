//7 Kyu
//Love vs friendship
//Fundamentals

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


//Solution

function wordsToMarks(string){
//set up a variable to store the sum
  let result = 0
//loop through the string word and check the char code of each str letter
  for(let i=0; i<string.length; i++){
//add the value of each str letter in the result variable
    result += string[i].charCodeAt() - 96
  }
//return the result
  return result
}

//str-> string word, always lower case, wont be empty, wont be null or undefined

//num-> sum of letters in str word placements of the alphabet. 

console.log(wordsToMarks("love"))



