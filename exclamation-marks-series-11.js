//8 Kyu
//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//Fundamentals

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

//Solution I

function replace(s) {
//split str into array of letters. 
    let letters = s.split("")
//set up a str variable to keeo track of our vowels including capital vowels
    let vowels = 'aeiouAEIOU'
//loop trhough each letter in the str and check if the element is found in the vowel variable if so replace it with "!"
    let result = letters.map(el => vowels.includes(el) ? "!" : el)
//joinstr and return it
    return result.join("")

}
    

//Parameters
//str-> words, only str coming in, never empty, not null

//Return
//str -> all vowels replaced by '!' and in our case it is case sensitive 'aeiouAEIOU'.

//Example
//console.log(replace("Hi!"), "H!!")
//console.log(replace("ABCDE"), "!BCD!")




