//8 Kyu
//Lario and Muigi Pipe Problem
//Fundamentals, Lists

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//Solution I

function pipeFix(numbers){
//set up emtpy arr to store nums
    let result = []
//loop from starting input index and end at ending input index. 
    for(let i= numbers[0]; i<=numbers[numbers.length-1]; i++){
//increase by one and push each num to the result arr
        result.push(i)
    }
//return new arr
    return result
}

//Parameters
//arr-> unique nums, ascending sorted, not empty, only nums in arr, only arr coming in, never null. 

//Return
//arr-> starting at the input arr index 0 and ending at input arrat last index. increasing by one

//Example
//console.log(pipeFix([1,3,5,6,7,8]), [1,2,3,4,5,6,7,8])













