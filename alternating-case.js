//8 Kyu
//Bin to Decimal
//Fundamentals, binary

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.


//Solution



String.prototype.toAlternatingCase = function (string) {
  
  //split the incoming str argument into an array of str letters.
  return this.split('').map((el) => {
//check if the str letter is lower case. If so, make it uppercase    
    if(el === el.toLowerCase()){
        return el.toUpperCase()
    }else if(el === el.toUpperCase()){
//check if the str letter is upper case. If so, make it lower case
      return el.toLowerCase()
    }
//join the array of str letters back to a full str
  }).join('')
}





