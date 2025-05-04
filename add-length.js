//8 Kyu
//Add Length
//Fundamentals, Strings, Arrays

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Solution I

function addLength(str) {
//split the str into an array of words
    let words = str.split(" ")
//create a second array by mapping through words array and storing the length of each word
    let length = words.map(el=>el.length)
//map through the words array and concatenate the length of the words from the length array to the new array and return it
    return words.map((el,i) => el + ` ${length[i]}`)
}
    

//Parameters
//str -> words, at least one element in the str, never empty, not null, only always a str coming.

//Return
//arr -> arr mapping each element in input str and concatenating the elements length with a space in between. 

//Example
//console.log(addLength("apple ban"), ["apple 5", "ban 3"])
//console.log(addLength("you will win"), ["you 3", "will 4", "win 3"])












