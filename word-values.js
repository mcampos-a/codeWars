//7 Kyu
//Word Values
//fundamentals, strings

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ... z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// ["abc", "abc abc"] should return [6, 24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!



//Solution

function wordValue(a) {
//set up a variable to store the alphabet
  const alph = 'abcdefghijklmnopqrstuvwxyz'
//set up an empty array variabke to push the result of each str element
//loop through the array and create a sum of the position of each str element and multiply times index plus
 let result = a.map((el, i)=>{
    return el.split('').reduce((sum, current)=> sum + (alph.indexOf(current)+1),0) * (i + 1)
  })
//return result arr
  return result

}

//arr -> of strings, can be empty, wont be null or undefined, will always a be an array of str with lower case letters and space

//arr -> of numbers, each str element will be reduced to the sum of their position of the alphabet and then multiplied by the number of position in the arr, where positions start at 1

console.log(wordValue(["abc", "abc abc"]), [6, 24])