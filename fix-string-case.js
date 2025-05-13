//7 Kyu
//Fix string case
//Fundamentals

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates


//Solution I

function solve(s){
//set up variable to count letter in lower case
    let lower = 0
//set up variable to count letter in upper case
    let upper = 0
//loop through str and check if it is .toLowerCase or UpperCase and add one to the appropriate counter
   for(let i=0; i<s.length; i++){
    if(s[i]===s[i].toLowerCase()){
        lower++
    }else{
        upper++
    }
   }
//compre upper case and lower case counter and return the approriate return. 
    return lower === upper ? s.toLowerCase() : lower > upper ? s.toLowerCase() : s.toUpperCase()
}
    

//Parameters
//str -> words, w/ lower case letter and upper case letter. Str wont be emtpy, str wont be null or undefined, only always we will get a str

//Return
//str -> if count of lower case > count of upper case return the str toLowerCase, if upper case count is > lower case count return str .toUpperCase, if the count is equal return str .toLowerCase

//