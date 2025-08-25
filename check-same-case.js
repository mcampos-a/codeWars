//8 Kyu
//Check and Same Case
//Fundamentals

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1



//Solution

function sameCase(a, b){
//set up a str with alphabet both in caps and not
  let alphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
//check if the characters are both letters if not return -1
  if(alphabet.indexOf(a) === -1 || alphabet.indexOf(b) === -1) return -1
//then check if the characters are both same case if so return 1
  if((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())){
    return 1
//else if the characters are letters but not the same case return 0
  }else{
    return 0
  }
}

//str1 -> str character that can be lower case, uppecase or a symbol. Wont be empty, wont be null or undefined, always will be a single str character
//str2 -> str character that can be lower case, uppecase or a symbol. Wont be empty, wont be null or undefined, always will be a single str character

//num -> depending on a few conditionals return the following: if either character is not a letter return -1
          //if both characters are the same case return 1
          //if both characters are letter but not the same case return 0

console.log(sameCase('e', '%'), -1)
console.log(sameCase('e', 'f'), 1)
console.log(sameCase('e', 'G'), 0)


