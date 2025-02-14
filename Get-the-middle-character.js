//7 Kyu
//Get the middle character
//Fundamentals, strings


// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"




//Solution I

function getMiddle(s) {
  //store string length
    let length = s.length
  //check if the length is a perfect factor of 2, if so slice to grab the middle chracter
    if(length % 2 === 0){
      return s.slice((length/2)-1, (length/2)+1)
  //if the length is not a perfect factor of 2 , if not slice for the middle letter
  //note when using slice, if the integer has a fraction it will be trunkated. ex. 7/2=3.5 but slice will trunk it down to 3.
    }else if(length%2 !== 0){
      return s.slice((length/2),(length/2)+1)
  }
  
  }


//Parameters
//no empty strings, strings with even length and different length will have a different return
//no symbols, no funny bizz

//Results
//if str.length % 2 == 0 -> return middle 2 character
//if str.length % 2 != 0 -> return middle character

//Examples
//console.log(getMiddle("test"),es)
//console.log(getMiddle("testing")t)