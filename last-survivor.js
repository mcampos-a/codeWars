//7 Kyu
//Last Survivor
//Fundamentals, Arrays


// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// If you like this kata, check out the next one: Last Survivors Ep.2

//Solution 

function lastSurvivor(letters, coords) {
//store the input str in a variable 
  let arr = letters.split('')
//loop through the array
    for(let i=0; i<coords.length; i++){
  //use the element as the index of the str we will remove
      arr.splice(coords[i],1)
    }
//return the result
    return arr.join('')
}

//str -> string of letters, can be empty, wont be null or undefined, will always be an array of letters
//arr -> array of numbers, can be empty, wont be null or undefined, will always be an array of numbers

//str -> a str of letters after the letters in the input str have been removed based on the numbers from the input array

console.log(lastSurvivor('zbk', [0,1]), 'b')