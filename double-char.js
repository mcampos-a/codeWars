//8 Kyu
//Double Char
//Fundamentals, strings

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


//Solution I

function doubleChar(str) {
  //set up a result empty str to track each element
  let result = ''
  //loop through string grab each element and use the .repeat method and push it to the empty str
  for(let i = 0; i < str.length; i++){
    result += str[i].repeat(2)

  }
  //return result str
  return result
}



//Parameters
//str-> letters, nums, special chars. The string can be empty, wont be null, no other data types to worry, no funny bizz. Case sensitive

//Return
//str-> every element would be repeated once. 

//Examples
// console.log(doubleChar("Hello"), "HHeelllloo")