//8 Kyu
//Opposite number
//Fundamentals

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34


//Solution I

function opposite(number) {
  //multiply number by * -1 and return it
  return number * -1
}


//Paramaters
//num -> interger or decimal, not null, only nums, no funnny biz

//Return
//return nums -> opposite or negative of the same num ir num -> num * -1

//Examples
//console.log(opposite(-123), 123)
//console.log(opposite(32), -32)