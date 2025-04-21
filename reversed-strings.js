//8 Kyu
//Reversed Strings
//Fundamentals

// Complete the solution so that it reverses the string passed into 
// it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
//take str split into array of letters, 
//then reverese the array, lastly join the reversed array and return
return str.split('').reverse().join('')
  
}

//Parameters
//str -> words. It can be empty, not null, only a str 

//Return
//str -> reversed from the input

//Examples
//console.log(solution("codewars"), "srawedoc")
//console.log(solution("word"), "drow")









