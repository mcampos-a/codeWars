//8 Kyu
//Remove n exclamation marks left to right
//fundamentals, 

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"



//Solution

function remove(s,n){
//set up a str variable to store the input str
    let result = s
//loop through the string s from i=1 to i<= n
    for(let i=1; i<=n; i++){
//check if the str includes an ! if so use .replace method on the input str and replace ! with ''
      result = result.replace("!","")
        
    }

//return s
    return result
  
}

//str -> string s represents a str of words that may contain "!", can be empty, wont be null or undefined, will always be a str
//num -> the number of "!" that will be removed from left to right in the input s

console.log(remove('Hi!!', 2), 'Hi')