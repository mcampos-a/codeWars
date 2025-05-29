//7 Kyu
//Sum of Minimums!
//Fundamentals, Arrays

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)


//Solution I

function sumOfMinimums(arr) {
//set up a veriable to track the sum of the mins
  let result = 0
//loop through input arr
//reach into each element and use the spread operator and the Math.min() method to get our minimum value 
//add it to the result variable
  arr.forEach((el)=> result+= Math.min(...el))
//return the result variable 
return result
}

//params
//arr-> arrays as elements. 2d array. Elemnt ararys wont always be sorted like example. Always getting a 2d array. No empty inputs. No null or undefined values

//return
//num-> the sum of the minimum value of each element array. 

//Example
console.log(sumOfMinimums([[ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]), 26)



