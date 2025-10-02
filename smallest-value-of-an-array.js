//7 Kyu
//Smallet value of an array
//Fundamentals, arrays

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0


//Solution

function min(arr, toReturn) { 
//set up a variable to store the smallest value of the array and the index of the smallest value
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
//check the second parameter to return what is asked for
//return the desired outcome
    if(toReturn === 'value'){
        return min
    }else if(toReturn === 'index'){
        return index
    }
}

//arr -> array of nums with at least 1 num and no dups, wont be empty, wont be null or undefined, will always be an array of nums
//str -> will be either 'value' or 'index', wont be empty, wont be null or undefined, will always be a str

//num -> if 2nd param === "value" return the smallest value of the array else if 2nd param === "index" return the index of the smallest value

console.log(min([2,4,1,7], 'value'), 1)
console.log(min([2,4,1,7], 'id'), 3)





