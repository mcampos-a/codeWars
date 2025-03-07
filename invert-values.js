//8 Kyu
//Invert values
//Fundamentals, Lists, Arrays

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


//Solution I

function invert(array) {
  //map through array and multiply each element by -1 and return it
  return array.map(el=> el * -1)
}


//Paramaters
//arr-> nums, negative/positive, arr can be empty, arr wont be null, only nums, no funny bizz

//Returns
//arr-> with inverted signs

//Examples
//console.log(invert([1, 2, 3]), [-1, -2, -3])