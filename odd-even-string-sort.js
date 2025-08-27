//7 Kyu
//Odd-Even String Sort
//Fundamentals, strings, sorting

// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

// Examples
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

// Notes
// Tested strings are at least 8 characters long.



//Solution

function sortMyString(S) {
//set up an empty str to store even str elements
    let even = ''
//set up an empty str to store odd str elements
    let odd = ''
//loop through str and check on the index of each element. 
    for(let i=0; i<S.length; i++){
//add 0 and even indexes to the even str variable
        if(i%2===0){
            even += S[i]
//add odd indexes to the str variable
        }else if(i%2 != 0){
            odd += S[i]
        }

    }
//return a new str with a space in between the even and odd str variables
    return `${even} ${odd}`
}

//str -> of words at least 8 chars long, wont be empty, wont be null or undefined, will always be a str

//str -> grouping even and odd elements together and separating them with a space. Even indexes come first then a space followed by odd indexes.

console.log(sortMyString("CodeWars"), "CdWr oeas")




