//8 Kyu
//Remove duplicates from list
//Fundamentals, Arrays

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


//Solution I

function distinct(a) {
//set up empty array to push unique values
    let result = []
//loop through array and check if result array contains the element at each iteration
    a.forEach((el)=>{
        result.includes(el) === false ? result.push(el) : null
    })
//return the result array
    return result
}
    

//Parameters
//arr-> postivie nums, can be empty, wont be null or undefined, can expect to always get an array

//Return
//array -> nums where there are no duplicate elements

//Example
//console.log(distinct([1,1,2]), [1,2])
//console.log(distinct([1,2,1,1,3,2]), [1,2,3])