//7 Kyu
//Odd or Even?

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

//Solution I

function oddOrEven(array) {
//check to see if array.length < 1 return "even"
    if(array.length<1) return "even"
//reduce array and sum up elements
    let sum = array.reduce((sum, current)=> sum + current, 0)
//check if sum % 2 === 0 and return wheather even or odd
    if(sum % 2 === 0){
        return "even"
    }else{
        return "odd"
    }

}
    

//Parameters
//arr -> integers, never empty arr will have at least one element, never null, only arr coming in. 

//Return
//str -> if sum of elements in arr is even or just a 0 then return "even" else return "odd"

//Example
//console.log(oddOrEven([0,1,4]), "odd")
//console.log(oddOrEven([0,-1,-5]), "even")
//console.log(oddOrEven([0]), "even")











