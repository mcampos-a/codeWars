//7 Kyu
//shoter concat reverse longer
//fundamentals, strings

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


//Solution

function shorterReverseLonger(a,b){
//set up an empty str variable to store our return str
  let result = ""
//check for which str agrument is the longers
  if(a.length<b.length){
    result+= a+b.split("").reverse().join("")+a
  }else if(b.length<a.length){
    result+= b+a.split("").reverse().join("")+b
//if both str arguments are the same length treat a as the longest
  }else if(a.length===b.length){
    result+= b+a.split("").reverse().join("")+b
  }
//return shorter+reverse(longer)+shorter
  return result
}

//2 strings, can be empty, wont be null or undefined, will always be a str.

//str -> return a str in the form: shorter+reverse(longer)+shorter if a and b are the same length treat a as the longer

console.log(("first", "abcde"), "abcdetsrifabcde")