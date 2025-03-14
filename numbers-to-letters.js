//7 Kyu
//Numbers to Letters
//Fundamentals, Strings, Arrays

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.


abcdefghijklmnopqrstuvwxyz

//Solution I

function switcher(x){
  //set up an alphabet string
  let alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '
  //set up an emtpy word to store our letters coming from x
  let word = ''
  //loop through array and use the alph array as reference to pull the letter using the x array letter and subtract 1
  x.map(el=> word += alphabet[Number(el) - 1])
  //return word
  return word
}

//Parameters
//arr -> nums (in string format), nums = letters -> 26 = a , 1 = z. nums -> 27 ,28, 29 = !, ? , ' '

//return
//string-> with letters corresponding to each number

//examples
//console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars')

