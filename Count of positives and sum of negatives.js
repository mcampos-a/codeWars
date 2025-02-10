//8 Kyu
//Count of positives and sum of negatives
//Fundamentals, Arrays, lists


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].




//Solution I

function countPositivesSumNegatives(input) {
  //set up empty array for rteurn
  let newArr = []
  
 if(input === null){
  //if arr is null
   return newArr
   //return new array with conditional if it is empty
 }else if(input.length === 0 ){
   return newArr
 }else{ //set up count for positive nums
    let posNumsCount = 0
  //set up sum of negative nums 
   let negNumsSum = 0
  //loop 
   for(let i=0; i<input.length; i++){
  //and check if num is >0 -> add count
    if(input[i]>0){
      posNumsCount++
       //Check if num is <0 -> sum nums
    }else if(input[i]<0){
      negNumsSum -= -input[i]
    }
      
  }
  //push postive count to empty array
  newArr.push(posNumsCount)
  //push sum of neg nums to empty array
  newArr.push(negNumsSum)
  
  return newArr
 }
} 
 


//Parameters
//arr of intergers, no words, no symbols, no, 
//arr can be empty

//Returns
//arr with two elements, one with positive count of els
    //and two with sum of negative els

//Examples
//console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65))

