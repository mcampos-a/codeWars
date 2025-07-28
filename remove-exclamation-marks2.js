//8 Kyu
//Remove all exclamation marks except the last
//Fundamentals

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"



function remove (string) {
//split the string into an array, loop through the array and filter out all exclamation marks
  let removeSymb = [...string].filter(el => el !== '!')
//join the array and add n "!" then return
  return removeSymb.join('') + '!'
}


//str -> never empty, not null or undefined, will always be a str

//str -> remove all exclamation marks except for the last indexed one

console.log(remove("!Hi!"), "Hi!")
console.log(remove("!!!Hi"), "Hi!")
console.log(remove("!Hi! Hi!"), "Hi Hi!")
