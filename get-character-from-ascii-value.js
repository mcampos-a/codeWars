//8 Kyu
//get character from ASCII Value
//Fundamentals

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/


function getChar(c){
//use the charCode to pull the char
return String.fromCharCode(c)
//return char
}

//Parameters
//num -> only nums coming in, not empty, not null

//Returns
//str->char code of the input num as str

//example
//console.log(getChar(65), 'A')
//console.log(getChar(48), '0')









