//6 Kyu
//Sentense Calculator
//Fundamentals

// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

//Solution I

function lettersToNumbers(s) {
//set up hash map to keep track of elements
    let map = {}
//set up an emtpy variable to keep track of our score
    let result = 0
//set up a variabele containing a lower case alphabet str
    let alphabet = 'abcdefghijklmnopqrztuvwxyz'
//set up a variable contained an upper case alphaber
    let upperAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//set up a variable with a string 0-9
    let numbers = '0123456789'
//loop through the length of the string and set up a switch statement comparing if any of the elements in the input str is found in one of our three score variables
    for(let i= 0; i<s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1
    }

//loop through object and check each key and add points to result based on the rules
    Object.keys(map).forEach(el=>{
        alphabet.indexOf(el) != -1 ? result+= (alphabet.indexOf(el) + 1) * map[el] : upperAlph.indexOf(el) != -1 ? result+= ((upperAlph.indexOf(el)+1)*2) * map[el] : numbers.indexOf(el) != -1 ? result += (numbers.indexOf(el) * map[el]) : null
    })
//return score
    return result
}


//Parameters
//str-> it can be empty, it wont be null or undefined, only always getting a str.
//

//Return
//num -> a sum of scores derived from the characters in the input str. 
//if a character is a lower case we will get a point based on its placement of the alphabet. 'a' = 1, 'b' = 2, etc
//if a char is an upper case char we will add two times the points based on its placement of the alphabet. 'A' = 2, 'B' = 4.
//if a char is a number between '0-9' we will add a point based on the number it is. 

//Example
//console.log(lettersToNumbers("I Love You"), 170)
//console.log(lettersToNumbers("a b c"), 6)
