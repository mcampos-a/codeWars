//8 Kyu
//Do you speak "English"?
//Fundamentals

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


//Solution I

function spEng(sentence){
//use the .toLowerCase() method to normalize the input str
    let lCase = sentence.toLowerCase()
//now use the .contains() on the input str and return result
    return lCase.includes("english")
}

//str -> can be empty, wont be null or undefined, will always be getting a str

//boolean -> true if str .contains("english") or false if it doesnt

console.log(spEng("abcEnglishdef"), true)
console.log(spEng("eNglisH"), true)
console.log(spEng("abcnEglishsef"), false)