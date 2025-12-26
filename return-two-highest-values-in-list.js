//8 kyu
//Return Two Highest Values in List
//fundamentals

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//Solution

function twoHighest(arr) {
//   console.log(arr)
//check if the array length is less than 1
    if(arr.length<1){
        return []
    }
//if the length is 1 return the number
    if(arr.length==1){
        return [arr[0]]
    }
//filter out duplicate numbers from the array
    let uniqueArr = arr.filter((el,i,arr)=> arr.indexOf(el) == i)
//order the array from highest to lowest
    let orderedArr = uniqueArr.sort((a,b)=> b-a)
//return an array of the first and second highest number
    return [orderedArr[0], orderedArr[1]]
}

//arr -> of nums, can be empty, wont be null or undefined, will always be an array of nums

//arr -> the two largest numbers in the array, if there are less than 2 unique values, return as many of them as you can

console.log(twoHighest([4, 10, 10, 9]), [10,9])

