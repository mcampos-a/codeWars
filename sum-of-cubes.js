//7 Kyu
//Sum of Cubes
//Fundamentals

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)



//Solution

function sumCubes(n){
//set up a variable to store the sum of each cube
  let result = 0
//loop from 1 to parameter n
  for(let i=0; i<=n; i++){
//at each number find the cube and add it to the result variable
    result += i**3
  }
//return the result variable
  return result
}


//num -> a positive num we will use as the upper limit, wont be empty, wont be null or undefined, will always be a positive num

//num -> the sum of all cubes from 1 to n. 

console.log(sumCubes(2), 9) //1 + 8 = 9
console.log(sumCubes(3), 36) //1 + 8 + 27= 36




