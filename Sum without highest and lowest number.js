//8 Kyu
//What is between? 
//Fundamentals and Algorithms


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//Solution

function between(a, b) {
  
  //first we set up an empty array
  let sequence = []
  //now we iterare with a for loop since we know our starting and ending condition.
  for(let i = a; i<=b ; i++){
  //here we push every i to complete our sequence
    sequence.push(i)
  }
  
  return sequence

   
}