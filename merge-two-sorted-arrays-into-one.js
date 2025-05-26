//8 Kyu
//Merge two sorted arrays into one
//Fundamentals, arrays

// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, 
// ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

//Solution I

function mergeArrays(arr1, arr2) {
//combine both arrays by using the .concat() method
    let combine = arr1.concat(arr2)
//take out any duplicates using the Set() object
    combine = new Set(combine)
//transform the unique set of numbers back into an array using the Array key word and .from() method
    combine = Array.from(combine)
//sort the new unique array and return it
    return combine.sort((a,b)=> a-b)
}

//Parameters
//two arrays, arr1, arr2 -> both arr of integers, can be empty, want be null or undefined, will only be getting an array

//Return
//arr -> combine both arrays into one that has no duplicates, is sorted in ascending order. 

//Example
//console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8])

