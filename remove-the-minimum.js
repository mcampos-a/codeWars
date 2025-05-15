//7 Kyu
//Remove the minimum
//Fundamentals, lists, arrays

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring 
// exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the 
// exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove 
// the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//Solution I

function removeSmallest(numbers) {
//make a copy if the original array
    let copyArr = numbers.slice(0)
//find the value of the smallest element in the array
    let smallestElement = numbers.indexOf(Math.min(...numbers))
//remove the smalles value in the array
    copyArr.splice(smallestElement,1)
//return the array with the smalles value removed
    return copyArr
}
    

//Parameters
//array-> nums, can be empty, not null or undefined, only arr coming in. 

//Return
//arr-> with the smallest element in value removed. If multiple of the same, remove the one with the lowest index. If arr.length=0 return an empty array.

//Example
//console.log(removeSmallest([1,2,3,4,5]), [2,3,4,5])
//console.log(removeSmallest([5,3,2,1,4]), [5,3,2,4])