//8 Kyu
//return the day
//Fundamentals


// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"




//Solution I

function whatday(num) { 
//deal with edge cases including null or undefined
  if(num == null || null == undefined) return "Wrong, please enter a number between 1 and 7"
//run a conditional chain between 1 - 7 and respond with its corresponding str
  if(num === 1){
    return "Sunday"
  }else if(num ===2){
    return "Monday"
  }else if(num ===3){
    return "Tuesday"
  }else if(num ===4){
    return "Wednesday"
  }else if(num ===5){
    return "Thursday"
  }else if(num ===6){
    return "Friday"
  }else if(num ===7){
    return "Saturday"
  }else{
    return "Wrong, please enter a number between 1 and 7"
  }



}

//parameters
//num -> can be empty, can be null or undefined, can expect other data types

//Return
// str -> strings of the days of the week. Between 1-7 num inputs will return Sunday-Saturday respectively. Else return error msg str

//Example
//console.log(whatday(3), 'Tuesday')
//console.log(whatday(12), 'Wrong, please enter a number between 1 and 7')