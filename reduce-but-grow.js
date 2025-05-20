//8 Kyu
//Reduce But Grow
//Fundamentals, sarrays

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//Solution I

function grow(x){
//Use the array method .reduce() to reduce all numbers in the array using a multiplication operator
  return x.reduce((initial,current)=> initial * current)
}
    

//Parameters
//arr -> w/ nums , not empty, neot null or undefined, only arr coming in

//Return
//num -> multiply each number in the array one at a time and return product

//Example
//console.log(grow([1,2,3,4]), 24)
