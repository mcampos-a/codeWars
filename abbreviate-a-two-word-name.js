//8 Kyu
//Abbreviate a Two Word Name
//Fundamentals, strings

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F




//Solution I

function abbrevName(name){
    //split str into array of words
    let words = name.split(' ')
    //then return a string with just the first letter of each word and a dot in bewteen. use template string
    return `${words[0].slice(0,1).toUpperCase()}.${words[1].slice(0,1).toUpperCase()}`
}


//Parameters
//str-> two words, the string can be empty, no null, no symbols, always a word space word.

//returns
//str -> with only first letter cap from name and last name with a dot in bewtween letters.

//console.log(abbrevName("Max Campos"), "M.C")

