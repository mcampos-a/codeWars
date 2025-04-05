//8 Kyu
//Parse nice int from char problem
//Fundamentals

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//Solution I

function getAge(inputString){
    //split the str into an array of words/elements by a space
    let words = inputString.split(" ")
    //return the first element of the array
    return Number(words[0])
}
  

//Parameters
//str-> never empty, never null, only str coming in. The string will consist of a number and some words after it

//Returns
//num -> girls age between 0-9

//Examples
//console.log(getAge("10 years old"), 10)
//console.log(getAge("6 years old"), 6)





