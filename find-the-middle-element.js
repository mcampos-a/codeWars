//7 Kyu
//Find the middle element
//Fundamentals, Arrays

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//Solution I

function gimme (triplet) {
//store the input array in new variable
    let input = [...triplet]
//set up a new variable and store the input array
    let sortedArr = triplet.sort((a,b)=> a-b)
//use the .indexOf() method on the triplet input array using the the middle element of the sorted array and return it
    return input.indexOf(sortedArr[1])
}
    

//Parameters
//array -> of nums. Not empty, never null or undefined, only will be getting nums. Can be negative and zero.

//Return
//num -> the index of the element that is sandwiched by numerical value from thr other two elements in the array

//Example
//console.log(gimme([34,56,71]), 1)
//console.log(gimme([17, 5, 45]), 0)