//8 Kyu
//Is there a vowel in there?
//Fundamentals, arrays

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.


//Solution

function isVow(a){
  return a.map((el)=>{
    if(el === "a".charCodeAt()){
      return "a"
    }else if(el === "e".charCodeAt()){
      return "e"
    }else if(el === "i".charCodeAt()){
      return "i"
    }else if(el === "o".charCodeAt()){
      return "o"
    }else if(el === "u".charCodeAt()){
      return "u"
    }else{
      return el
    }
  })
}

//arr -> of nums, wont be empty, wont be null or undefined, will always be an arr of nums

//arr -> of nums and string vowls, if num element of arr is the char code of a voule replace it with a str element of that vowel

console.log(isVow([100,100,116,105,117,121]), [100,100,116,"i","u",121])



