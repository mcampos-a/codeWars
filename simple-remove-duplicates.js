//8 Kyu
//Simple remove duplicates
//Fundamentals

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!


//Solution



function solve(arr) {
//set up an empty array to store our new array
  const result = [];
// Iterate through the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
// If the current element is not already in the result array, add it to the beginning
    if (!result.includes(arr[i])) {
      result.unshift(arr[i]);
    }
  }
  return result;
}

//arr -> of nums, wont be empty, wont be null or undefined, will always be an arr of nums

//arr -> arr of nums without duplicates, ensuring we keep the latest most index of a number that has duplicates.

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3])





