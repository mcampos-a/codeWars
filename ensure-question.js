//8 Kyu
//Ensure question
//Fundamentals

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"


//Solution 

function ensureQuestion(s) {
//check if the last characater in the str is ?
  if(s.endsWith('?')){
//if question mark return str
    return s
//if no question mark return str plus ? str
  }else{
    return s+'?'
  }
}

//str -> word, can be empty, only a str coming in, null or undefined

//str-> if str.length-1 == ? return the str word else return just word without the ?

console.log(ensureQuestion('star'), 'star?')
console.log(ensureQuestion('car?'), 'car?')
