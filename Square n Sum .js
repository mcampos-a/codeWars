//8 Kyu
//Square(n) Sum
//Fundamentals, arrays, lists


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1^2+2^2+2^2=9


//Solution

function squareSum(numbers){
  //We will use a reduce method to accumulate the sum of each array element after each is squared 
    return numbers.reduce(function(sum,item){
  //first we square each element in the array then we add it to the accumulator   
      return (item*item)+sum;
    
    },0) 
   
  }