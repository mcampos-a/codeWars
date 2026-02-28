//7 Kyu
//The Office IV - Find a Meeting Room
//Fundamentals, arrays

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"


//Solution 

function meeting(x){
//loop through the input array and find the index of the first "O" 
  if(x.indexOf("O") != -1){
    return x.indexOf("O")
  }else{
//if no "O" is found return none available
    return "None available!"
  }
}

//arr -> arr of strings, can be empty, wont be null or undefined, will always be an array

//num or str -> return the index of the first occurance of an empty room represented by "O" and if no empty rooms can be found return "None available"

console.log(meeting(['X', 'O', 'X']), 1)

