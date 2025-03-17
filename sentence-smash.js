//8 Kyu
//Sentence Smash
//Fundamentals, Mathematics

// /Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.
// What We're Testing
// We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

// Disclaimer
// This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.

//Solution I

function smash (words) {
  return words.join(' ')
};


//Parameters
//arr-> words/strings, only strings coming in, no arrays, no nums, array can be empty, we dont know how many words will come

//Return
//str-> of the words in the array separated by a coma. If array empty return empty string

//console.log(smash(['hello', 'world', 'this', 'is', 'great']), 'hello world this is great')