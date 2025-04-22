//6 Kyu
//Find the odd int
//Fundamentals

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//Solution I
function findOdd(A) {
    //set up hash map to track occurance of each element
    let map = {}
    //loop through array and generate key/value pairs of each element
    A.forEach((el,index)=>{
        //if element exists add 1 to it
        //else set it equal to 1
        map[el] = (map[el] || 0) + 1
    })
    //loop through map and find a value that has a remainder of 1 then return the property. 
    return Number(Object.keys(map).find(key => map[key] % 2 === 1))
}


//Solution II

// function findOdd(A) {
//     let result = {};
//     A.forEach(item => {
//       result[item] = result[item] + 1 || 1;
//     });
//     for (key in result) {
//       if (result[key] % 2 != 0) {
//         return Number(key);
//       } 
//     }
//   }

//Parameters
//arr -> of nums, there will be only one num that appears an odd number of times. Array wont be empty, eont be null, will only be an array

//Return
//num -> the number that appears an off number of times. 

//Example
//console.log(findOdd([1,1,2,2,3,3,3], 3))
//console.log(findOdd([0,1,0,1,0], 0))









