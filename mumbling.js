//7 Kyu
//Mumbling
//Fundamentals, Strings, Puzzles

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



//Solution I

function accum(s) {
//make str toLowerCase() to normalize it and split str into an array of elemnts
let letters = s.toLowerCase().split("")
//loop through letter array and make sure we use the element and index param to make char(0) to upper case and add the same element lower case with a .repeat() with the number index 
let sequence = letters.map((el, index)=> el.toUpperCase() + el.repeat(index))
//join the array with a "-" and return the new str
return sequence.join("-")
}
  

//Parameters
//str-> only letters from alphabet will be included, caps and no caps, can be emtpy, wont be null, only a string

//Return
//str -> repeats each element of the original str the number of times equal to the index of each element. The first char will be toUpperCase(). Each element will be joined by a "-"

//Example
//console.log(accum("abcd"), "A-Bb-Ccc-Dddd")
//console.log(accum("cwAt"), "C-Ww-Aaa-Tttt")







