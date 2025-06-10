//6 Kyu
//Find the unique number
//Fundamentals, algorithms, arrays, and performance

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//Solution I

function findUniq(arr) {
//set up a hash map to store the array values as keys and their ocurance as the count
  let map = {}
//loop through the array and populate the map and populate the map
  for(i=0; i<arr.length; i++){
    if(!map[arr[i]]){
      map[arr[i]] = 0
    }
    map[arr[i]]++
  }
//return the key that only has the value of 1
  return Number(Object.keys(map).find(key=> map[key]===1))

}


//arr-> array.length >=3, never empty, only arrays coming in, arry wont be null or undefined. 

//num -> unique to the array. There will always be one different number than the rest.

console.log(findUniq([3,3,3,3,5,3,3,3]), 5)
console.log(findUniq([2,2,2,2,2,4]), 4)

