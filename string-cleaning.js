//8 Kyu
//String cleaning
//Fundamentals, String, REgular Expression

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.




//Solution I

function stringClean(s){
  //split str into array of chars
  let arr = s.split('')
  //create an array with nums (strings) from 0-9
  let nums = ['0','1','2','3','4','5','6','7','8','9']
  //loop through arr of chars and check if any of the elemets is a string num is included in the nums array, if so filter them out
  let arrFilter = arr.filter((el)=> !nums.includes(el))
  //join the string and return it
  return arrFilter.join('')
  
}

//Parameters
//str-> words w/ letters, nums, symbols. never null, can be empty string, only str coming in, case sensitive

//Return 
//str-> w/ all numbers 0-9 filterd out. Keep special chars and spaces.

//Examples
//console.log(stringClean('! !') '! !')
//console.log(stringClean('This looks5 grea8t!') 'This looks great!')

