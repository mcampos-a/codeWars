//8 Kyu
//The old switcheroo
//fundamentals, strings

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.



//Solution

function vowel2index(str) {
//set up a str variable to store the vowls
  let result = ''
//set up an empty str variable to create the new str
  let vowels = 'aeiouAEIOU'
//loop through the str and check each character
  for(let i=0; i<str.length; i++){
//if the character is located in the vowl str then replace it with its index +1 and at it to the str
    if(vowels.indexOf(str[i]) != -1){
      result+= i+1
    }else{
//else add that same element str to the result str variable
      result+= str[i]
    }
  }
//return the str result
  return result
}

//str -> a str of words, can be empty wont null or undefined, will always be a str

//str -> a str that has all the vowls from the input str replaced with the vowls position in the input str (but starting from 1)

console.log(vowel2index('this is my string'), 'th3s 6s my str15ng')