//6 Kyu
//The Vowel Code
//Fundamentals, strings, regular expression, arrays

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.



function encode(string) {
//set up the order of vowls in a arr
  let vowls = "aeiou"
//set up a variable to store our new str elements in an arr
  let result = ""
//loop through str and check each element and see if they are found in vowel array
  for(let i=0; i<string.length; i++){
      
    if(vowls.includes((string[i]))){
//push the index of the vowel found in the input str into our result arr
        result += vowls.indexOf(string[i])+1
    }else{
      result += string[i]
    }
  }
//return arr and join
  return result
}

function decode(string) {
//set up a map with the order of the vowels given
  let vowels = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u"
  }
//set up a variable to store our new decoded str
  let result = ""
//loop thorugh the input str and check if the element is a number found in the map
//if so add the vowel at that index to our result str
  for(let i=0; i< string.length; i++){
    if(string[i] in vowels){
      result += vowels[string[i]]
      
    }else{
//else add the str letter that is already there
      result += string[i]
    }
  }
//return our result str
  return result
}


//str -> wont be empty, wont be null or undefined, treat the vowels not case sensitive, always be a str coming, will always be getting numbers and letters
//str2 -> wont be empty, wont be null or undefined, treat the vowels not case sensitive, always be a str coming, will always be getting numbers and letters

//str, str2 -> for ecode: to replace the vowels with their placement in the given order. For decode: replace the numbers corresponding to the order with their corresponding vowel.

console.log(encode("hello"), "h2ll4")
console.log(decode("h3 th2r2"), "hi there")