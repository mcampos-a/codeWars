//8 Kyu
//Reverse List Order
//Fundamentals, Lists

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//Solution I

function reverseList(list) {
//use the .reverse method on the input arr and return it
  return list.reverse()
}

//arr-> it can be empty, arr wont be null or undefined, I will only be getting an arr.

//arr-> same array but all in the elements in reverse order

console.log(reverseList([1,2,3,4]), [4,3,2,1])
console.log(reverseList([5,3,2,6]), [6,2,3,5])
