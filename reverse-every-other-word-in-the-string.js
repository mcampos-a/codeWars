//6 Kyu
//Reverse every other word in the string
//fundamentals, arrays

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.



//Solution

function reverse(str){
//set up an empty variable to create the new str
    let result = ''
//split the incoming str into an array of words
    let wordArr = str.split(' ')
//loop through the array of words. Check for every odd index and reverse that word. 
    for(let i=0; i<wordArr.length; i++){
        if(i%2 === 0){
            result+= wordArr[i] + ' '
        }else{
//add the word to the new str
            result+= wordArr[i].split('').reverse().join('') + ' '
        }
    }
//return the result str using the trim method to remove any left over front or ending spaces
    return result.trim()
}

//str-> a str of words, can be empty, wont be null or undefined, will always be a str of words

//str-> the same str with every odd indexed word reversed

console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")