//7 Kyu
//Maximum Length Difference
//Fundamentals

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
//check if any array is empty and return -1 if so
  if(a1.length === 0 || a2.length === 0) return -1
//convert the str elements into str lengths
  a1 = a1.map(el=> el.length)
  a2 = a2.map(el=> el.length)

//store the maximum length and minimum length of str elements from both arrays
  let a1_min = Math.min(...a1)
  let a1_max = Math.max(...a1)

  let a2_min = Math.min(...a2)
  let a2_max = Math.max(...a2)
//subtract the largest and smallest lengths between arr1 and arr2
  let a1_result = a1_max - a2_min
  let a2_result = a2_max - a1_min


//compare the difference variables and return the largest
  if(a1_result > a2_result){
    return a1_result
  }else{
    return a2_result
  }
}

//arr1, arr2 -> arr of str words, each element str will only contain letters from a to z, arrs can be empty, the wont be null or undefined, always getting arrays

//num -> the maximum difference between str element lengths between both arrays

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]), 13) // the largest str in both arrays is length 16 and the shorts length in both arrays is 3 -> 16 - 3 = 13