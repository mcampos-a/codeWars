//8 Kyu
//Duplicate Encoder
//Fundamentals, arrays, strings

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



//Solution I

function duplicateEncode(word){
//set up an empty str for ur return str
  let result = []
//take the incoming word and make it all lower case to make sure we can deal with capitalization and repeats
   word = word.toLowerCase().split('')
//generate a hash map to track the occurance of each element
  let map = {}

  word.forEach(letter=>{
      if(!map[letter]){
      map[letter] = 0
    }
    map[letter]++
  })
//now loop through the letter array and check each element against the occurance hash map and inster "(" if the elmenet occurs only once else insert ")" 
  word.forEach(letter=>{
    if(letter in map && map[letter] === 1){
      result.push('(')
    }else if(letter in map && map[letter] > 1){
      result.push(')')
    }
  })
// join the result array into a str and return it
  return result.join('')
}

  
//str -> w/ letters lower case and upper case plus special chars, it wont be empty, wont be null or undefined, always a str. 

//str -> if element count = 1 add a "(" to a return str
//        else if element count > 1 add a ")" to the return str

console.log(duplicateEncode("din"), "(((")
console.log(duplicateEncode("Success"), ")())())")

