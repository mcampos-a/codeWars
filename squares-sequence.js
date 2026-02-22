//7 Kyu
//Squares sequence
//Fundamentals, mathematics

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]


//Solution 

function squares(x, n) {
 //check if n is <= 0 and return an empty array
    if(n<=0) return []
  
//set up an empty array to store our result start the arr with element of x
  let result = [x]
//loop starting at x and ending at n
  for(let i=1; i<n; i++){
    //take the last element and square it then push it to the result arr
    result.push(result[result.length-1]**2)
  }
//return result arr
 return result 
}


//num1 -> length of the array for our result, wont be empty, can be negative or zero, wont be null or undefined
//num2 -> starting number to perform arthimatic, wont be empty, wont by null or undefined, can be zero or negative, will always be a num

//arr -> arr of nums that starts with the input for paramater x, and it will be of length n and each element will be a square of the last

console.log(squares(2, 5) [2,4,16,256,65536])


