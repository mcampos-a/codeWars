//8 Kyu
//Sum Mixed Aray
//Fundamentals, Arrays, strings


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.






//Solution I

function sumMix(x){
//map through the array and make sure all elements are nums.
let numsOnlyArr = x.map((element)=> Number(element))
//reduce the array.
let sum = numsOnlyArr.reduce((sum, current)=> sum+ current, 0)
//return the array. 
return sum
}


//Parameters
//arr-> nums and strings as nums
//no empty arrays, no funny bizz

//returns
//sum of the array values, one num

//examples
//console.log(sumMix([1,2,3,4,"5"]),15)


//