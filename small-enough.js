//7 Kyu
//Small enough?
//Fundamentals, arrays


// You will be given an array and a limit value. You must check that all 
// values in the array are below or equal to the limit value. If they 
// are, return true. Else, return false.

// You can assume all values in the array are numbers.




//Solution I

function smallEnough(a, limit){
//loop through input array and check if any element is greater than the limit
  for(el of a){
    if (el > limit){
//If so return false
      return false
    }
  }
//If no elmenets are greater than the limit return true
  return true
}

//parameters
//arr -> of nums 
//num -> sets the total magnitude for each element in the input arr
//both inputs wont be empty, wont be null or undefined, they will always be vaild inputs

//Return
//boolean -> true if all elements are <= limit

//Example
//console.log(smallEnough([2,4,6,8], 10), true)
//console.log(smallEnough([9, 65, 3, 24, 45], 25), false)