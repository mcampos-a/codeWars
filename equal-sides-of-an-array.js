//6 Kyu
//Equal Sides Of An Array
//Fundamentals, Algorithms, Arrays

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is 
// equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right 
// side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side 
// of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you 
// will return -1.

// Note
// If you are given an array with multiple answers, return the lowest correct index.


//Solution I

function findEvenIndex(arr) {
//set up a variable to sum all elements in the array
  let sum = 0;
//set up a variable to add all elements to the left of the index
  let leftSum = 0;
//loop through the array and populate the sum variable. This will keep track or the sum to the right of the index
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
//loop through the array once more and subtract the element at each index of the right sum, then add that same element to the left sum and compare
  for (let i = 0; i < arr.length; i++) {
//subtract the element at each index to not count the element of the index we are checking.
    sum -= arr[i];
//check if the sum on the left equals the sum of the right to the given index
    if (leftSum === sum) {
//if they are equal return the index
      return i;
    }
//if that is not the case add the current index element to the sum on the left
    leftSum += arr[i];
  }
//if there is no equal sums to either side of all indecies return -1
  return -1;
}



//arr -> of nums, can be empty, wont be null or undefined, always will be getting an array of nums

//num -> index that when you sum the values to the left and right of that index they equal each other. 
          //Note: the values to the left of the zeroeth index is zero

console.log(findEvenIndex([1,2,3,4,3,2,1]),3)
console.log(findEvenIndex([20,10,-80,10,10,15,35]),0) //to sum to the left of index 0 adds up to 0 and the the right adds up to 0 also.



