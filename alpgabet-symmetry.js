//7 Kyu
//Alphabet symmetry
//Fundamentals, strings

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// If you like this Kata, please try:

// Last digit symmetry

// Alternate capitalization

//Solution


function solve(arr){  
//set up a variable to store the alphabet as a str
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  //normalize the str to a lowercase
  //split the str at each position of the array.
  //Now filter the str by checking if the index of each character is equal in value to the index of the character at the position.
  //get the length of the fileterd array of str char and return it at the map
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

//arr -> of words, wont be empty, will always include alphabet characters, both upper and lower case, no spaces, wont be null or undefined, will always be an array of str words

//arr -> of numbers that count how many chracters in the str are in their positions in the alphabet

console.log(solve(["abode","ABc","xyzD"]), [4, 3, 1])
