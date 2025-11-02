//7 Kyu
//V A P O R C O D E
//Fundamentals

// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"


//Solution

function vaporcode(string) {
//create new str with no spaces and all upper case
  let arr = string.toUpperCase().split("").filter((el)=> el != " ")
//split the string to have spaces and return
  return arr.join("  ")
  
}

//str -> of words, wont be empty, wont be null or undefined, will always be a str of words

//str -> all str letters to upper case and a space between str letters.

console.log(vaporcade("Lets go to the movies"), "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S")





