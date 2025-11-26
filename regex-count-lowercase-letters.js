//8 kyu
//Regex count lowercase letters
//fundamentals, algorithms

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    //set up a variable to keep track of lowercase occurances
    let count = 0
    //set up a str with the alphabet in lowercase
    let alph = 'abcdefghijklmnopqrstuvwxyz'

    //loop through the str 
    for(let i=0; i<str.length; i++){
    //check if each element character is the same as thhat character when you use the .toLowerCase method
        if(alph.indexOf(str[i]) != -1 && str[i] === str[i].toLowerCase()){
    //if so add 1 to count
            count++

        }

    }
    //return the count variable
    return count
}


//str-> of characters, simbols, letters (cap and lowercase), wont be empty, wont be null or undefined, will always be a string

//num -> the count of letters tht are lowercase

console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26)
