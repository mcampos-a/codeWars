//8 Kyu
//Century From Year
//Fundamentals, Mathematics

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here


//Solution I

function century(year) {
//divide the incoming year by 100 using modulous to cehck if there is a remainder. If so use the Math.ciel() method if it doesnt return the input year divided by 100
  return year % 100 === 0 ? year / 100 : Math.ceil(year/100)
}
    

//Parameters
//num -> not empty, not null or undefined (when a variable has not been assigned or a function that does not return anything), only num coming.

//Return
//num -> reflecting the centoru in which the input year is in. 

//Example
//console.log(century(1705), 18)
