//7 Kyu
//Sum of numbers from 0 to N
//Fundamentals

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0


//Solution 

function SequenceSum(num){
  let sum = 0
  let sequence = []
  for(let i=0; i<=num; i++){
    sum+= i
    sequence.push(String(i))
    
  }
  console.log(sequence.join("+") + " = " + sum)
  return sequence.join("+") + " = " + sum
}
