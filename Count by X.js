//8 Kyu
//Count by X
//Fundamentals, array


// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

//Solution

function countBy(x, n) {
  let z = [];
//We know how many times each x will be multiplied. So we set a for loop
// with an ending condition at n
  for(let i=1; i<=n; i++){
//Here we perform the count multiple for every iteration.    
    let multiple = x*i
//Each iteration we will push the new multiple to the z array 
    z.push(multiple)
    
  }
  
  return z;
}