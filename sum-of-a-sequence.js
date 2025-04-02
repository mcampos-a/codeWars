//7 Kyu
//Sum of a sequence

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, 
// then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]


//Solution I

const sequenceSum = (begin, end, step) => {
  //set up sum variable to track our sum of sequence
  let sum = 0
  //loop through nums from begin to end
  for(let i=begin; i<= end; i+= step){
    //add very step between begin and end
      sum += i
    }
  return begin > end ? 0 : sum
  //if begin > end return 0 
};
  

//Parameters
//nums -> begin, end, step. No null, No empty nums, no other data types, no funny bizz. Can be negative

//Return
//sum -> sequenec of integers from begin to end. Using the step paramater. 
//if begin is > end return 0
//if end % step != 0 dont add it to sum

//Example
//console.log(sequenceSum(2, 6, 2) 12)
//console.log(sequenceSum(1, 5, 3) 5) 


