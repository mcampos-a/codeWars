//8 Kyu
//Remove Exclamation Mark From the End String
//Fundamentals, Strings

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


//Solution I

function remove (string) {
//check if the str ends with an '!' if so return a slice of the string without that last '!'
  if(string.endsWith("!")){
    return string.slice(0, string.length-1)
  }
  return '';
}

//str -> can be empty str, it will always be str, wont be null or undefined

//str -> if str endsWith() ! mark then str. slice(0, str.length-1)

console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi!!")
