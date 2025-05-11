//6 Kyu
//Break camelCase
//Fundamentals, strings

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Solution I

function solution(string) {
//set up an empty str to add our str values
    let result = ""
//loop through the str and check if any elements are Capitalized
    for(let i=0; i<string.length; i++){
//if an element is equal to itself Capitalized -> result += " " + str[i]
//else we add str[i] to result
        string[i] === string[i].toUpperCase() ? result += " " + string[i] : result += string[i]
    }
//return result
    return result
}
    

//Parameters
//str -> one word in cammel case. frist part is lowercase, and the second part will begin with a capital letter. 
//cam be emtpy, no null values, only always a str with a camel case set of words, only one word per str

//Return
//str-> with camel case broken up by a space. When the element is a Capital letter that is where we will add a space and the following Captial element

//Example
//console.log(solution("camelCasing"), "camel Casing")

