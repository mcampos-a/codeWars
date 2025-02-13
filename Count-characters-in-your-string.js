//6 Kyu
//Count characters in your string
//Fundamentals, strings


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.





//Solution I

function count(string) {
  //create an empty object
let letterObj = {}
  //normalize the string, sort, toLowerCase, and split it to an array of letters
let normStr = string.split('')
  //loop through array and create a property named for each letter you loop
  //if its the first time make the property equal to one if not then add one to it
normStr.map((letter)=>letterObj[letter]=letterObj[letter]+1||1)
  //return object
  return letterObj;
}


// Solution II

function count (string) {  
//first we set up an empty obj to define it with our letters
  let count = {};
//we lopp thorugh the split string array
  string.split('').forEach(function(letter) {
//If count 
     count[letter] ? count[letter]++ : count[letter] = 1;
  });
  return count;
}

//Parameters
//input-> strings, empty strings are okay, keep Cap letters, keep order.

//return
//object with one property value pair for each string elements/letter, not counting spaces.

//Examples
//console.log(count('maxa',{a:2,m:1,x:2})
//console.log(count("ab"),{a:1,b:1})

