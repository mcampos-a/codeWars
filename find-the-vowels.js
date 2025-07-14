//7 Kyu
//Find the vowels
//Fundamentals

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
//use the .toLowerCase() method to make sure you capture upper and lower case vowels
  let words = word.toLowerCase()
//set up an empty array to push de index that contains a vowel
  let result = []
//set up a str storing the vowels to reference
  let vowels = "aeiouy"
//loop through the str and check if each element in the str is found in the vowel str
  for(let i = 0; i<words.length; i++){
    if(vowels.includes(words[i])){
      result.push(i + 1)
    }
  }
//Add one to the index and push it to the result arr

//return result array
  return result
}


//str -> str words coming in, can be empty, wont be null or undefined, will only be a str, upper and lower case str letters.

//arr -> a list of indexes where there are vowels, + 1, 


console.log(vowelIndices("Super"), [2,4])
console.log(vowelIndices("Uber"), [1,3])