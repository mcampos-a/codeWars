//8 Kyu
//pick a set of first elements
//Fundamentals, arrays

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];


//Solution

function first(arr, n) {
//check for when n is not given and return the first element in the array
  if(n===undefined){
    return [arr[0]]
//check for the edge case when n can be larger than the array and only return the array
  }else if(n>arr.length){
    return arr
//loop through the array and only inlcude up the provided nth element and return the result
  }else if(n>=0){
    let result = []
    for(let i=0; i<n; i++){
      result.push(arr[i])
    }
    return result
  }
}







