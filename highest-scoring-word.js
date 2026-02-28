//7 Kyu
//Alphabet War
//Fundamentals, strings

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//Solution 

function high(x){
//set up a str with the alphabet to store each letter
  let alph = 'abcdefghijklmnopqrstuvwxyz'
//split up the str of words into an array of words
  let words = x.split(' ')
//map through the array of words and get an array of scores
  let scores = words.map((el,i)=> el.split('').reduce((sum, current)=> sum + alph.indexOf(current)+1,0))
//find the index of the highest score and use that to extract the word from the array of words
  let maxIndex = scores.indexOf(Math.max(...scores))
//return the highest scoring word
  return words[maxIndex]
}

//str -> of words, wont be empty, wont be null or undefined, will always be a str of words

//str -> return the highest scoring word as a str. Each letter in the word has a score equal to the its position in the alphabet

console.log(high('man i need a taxi up to ubud'), 'taxi')
