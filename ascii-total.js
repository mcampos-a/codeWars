//8 Kyu
//ASCII Total
//Fundamentals

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


//Solution

function uniTotal (string) {
//set up a variable to store the sum of character codes
    let sum = 0
//loop through the str, get the character code of each str element and add it to the result variable
    for(i=0; i<string.length; i++){
        sum += string[i].charCodeAt()
    }
//return the result variable
    return sum
}

//str -> str of ascii printable characters, can be empty, wont be null or undefined, will always be a str

//num -> the sum of the character code of each character str

console.log(uniTotal("a"), 97)
console.log(uniTotal("aaa"), 291)






