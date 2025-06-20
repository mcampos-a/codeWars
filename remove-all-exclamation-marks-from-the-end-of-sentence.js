//8 Kyu
//remove all exclamation marks from the end of sentence
//Fundamentals

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//Solution I

function remove(string) {  
//loop through the string and check if th elast element is a "!" 
  while(string[string.length-1] === "!"){
//if it is a "!" use the .slice() method to remove that last exclamation mark and reasign the string variable
    string = string.slice(0,-1)
  }
//return string
  return string
}


//str-> not empty, not null or undefined, only str coming in

//str-> remove exclamation mark from the end of of the str. The str can have no exclamation marks
//you can use last indexOf

console.log(remove("Hi!"), "Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")