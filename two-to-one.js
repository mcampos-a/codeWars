//7 Kyu
//Two to One
//Fundamentals

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



//Solution

function longest(s1, s2) {
//we can concateante the first str with the second str
  let newStr = s1.concat(s2)
//create a new Set from that concateantion to make sure we have only one of each letter
  newStr = new Set(newStr)
//we can turn it into an array to then sort
  newStr = Array.from(newStr).sort()
//retrun the joined array as a new unquie str
  return newStr.join("")

}

//str1->they wont be empty, not null or undefined, always will be getting a str
//str2->they wont be empty, not null or undefined, always will be getting a str

//str -> a sorted, unique letter str, that combines str1 and str2

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"), "abcdefklmopqwxy")