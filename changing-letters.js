//7 Kyu
//Changing Letters
//Fundamentals, strings

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


//Solution 

function swap (string) {
//set up an empty str to create the new str
  let result = ''
//set up a str with lowercase vowles to reference 
  const vowels = 'aeiou'
//loop throug the input str and check if any str element is a vowl, if so replace it with the same element .toUpperCase()
  for(let i=0; i<string.length; i++){
    if(vowels.indexOf(string[i]) === -1){
      result+= string[i]
    }else{
      result+= string[i].toUpperCase()
    }
  }
//return result str
  return result
}

//str -> a str of words, wont be empty, wont be null or undefined, will always be a str

//str -> a str where every vowel of the original str is capitalized

console.log(swap("Hello World"), "HEllO WOrld")
