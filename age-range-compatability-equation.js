//8 Kyu
//Multiple of index
//fundamentals, arrays

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//Solution

function multipleOfIndex(array) {
//set up a variable to store the array of elements that are multiple of their index
  let result = []
//if the 0 index element is zero and i =0 push the zero to the result array
  if(array[0] === 0){
    result.push(array[0])
  }
//loop through input array 
for(let i=1; i<array.length; i++){
//else divide the element by its index if there is a reminder do not push it
    if(array[i]%i === 0){
      result.push(array[i])
    }
  }
//return the result array
  return result
}


//arr -> arr of nums, nums can be zero and negative, wont be empty, wont be null or undefined, will always be an array of nums

//arr-> an array that contains only elements that are multiples of their index. If the first element = 0 then push the element, 

