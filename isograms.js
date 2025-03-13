//7 Kyu
//Isograms
//Fundamentals, Strings

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)




//Solution I

function isIsogram(str){
  //create a map to track first occurance of letters
  let map = {}
  //convert string to lower case and split to array of letters
  let letters = str.toLowerCase().split('')
  //loop once through array of letters
  for(let i=0; i<str.length; i++){
    //check if letter exisits in map, if so, return false
    if(map[letters[i]]){
      return false
    }else{
      //else if it doesnt exsits set the proeprty as the letter and the value to 1
      map[letters[i]]=1
    }
    
  }
    //return true
    return true
}
 

//Parameters
//str-> word, can be empty, letter case doesnt matter, not null, only string coming in

//Return 
//""-> True
//no repeated letter -> True
//if repeat letter -> False

//Example
//console.log(isIsogram("Dermatoglyphics"), true)
//console.log(isIsogram("moOse"), false)