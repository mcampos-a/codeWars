//7 Kyu
//indexed capitalization
//Fundamentals

// Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices. If an index is beyond the string, it should be ignored.

// Examples:
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
// Good luck!


//Solution

function capitalize(string, indices) {
//map through the string and check if the index is found in the array
    return [...string].map((el,i)=>{
//if so capitalize and if not leave it alone.
        if(indices.includes(i)){
            return el.toUpperCase()
        }else{
            return el
        }
    }).join('')
}

//str -> of lower case letters, wont be empty, wont be null or undefined, will always be a str of letters
//arr -> of nums, wont be empty, wont be null or undefined, will always be an arr of nums.

//str -> a str w/ letters which indecies are found in arr capitalzied

console.log(capitalize("abcdef", [1,2,5]), "aBCdeF")







