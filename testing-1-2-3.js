//7 Kyu
//Testing 1-2-3
//Fundamentals, Arrays

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//Solution I

var number=function(array){
    //map through the incoming array
    //set up a template string using the index + 1 as a property and the element as the value.
    let result = array.map((el,i)=> `${i + 1}: ${el}`)
    //return the new array
    return result
}
  

//Parameters
//arr -> with strings, can be epmty, wont be null, will only get a number. 

//Return
//arr -> with strings, with property = index starting at 1 and key value = el

//console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"])





