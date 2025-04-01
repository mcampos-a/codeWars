//7 Kyu
//Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//Solution I

function getDivisorsCnt(n){
  //set up a counter
  let counter = 0

  if(n % Math.sqrt(n) == 0){
    counter++
  }
 
  for(let i=0; i < Math.sqrt(n); i++){

    if(n%i == 0){
      counter+=2
    }
  }
  // return counter
  return counter
}
  

//Parameters
//nums -> positive integer, count # of divisors for the given num, never empty, not null, no arr, str, or other data type coming in, every num will have the divisor of 1 and num

//Return
//num -> reflecing the number diviros of that num or number of times num % 2 === 0. Return counter of divisors

//Examples
//console.log(countDivisor(4), 3)
//console.log(countDivisor(12), 6)

