//8 Kyu
//Find Multiples of a Number

// In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

// It is guaranteed that n > 0 and limit >= n.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// Examples
// n = 2; limit = 6 --> [2, 4, 6]
// n = 2; limit = 5 --> [2, 4]

//Solution I

function findMultiples(integer, limit) {
    //set up emtpy arr to store all multiples
    let result = []
    //loop between integer and limit until nums are >= limit
    for(let i = integer; i <=limit; i+=integer){
        //push num to array
        result.push(i)
    }  
    //return array
    return result
}
  

//Parameters
//nums1 nums2 -> a strating number and an ending number/limit. num1 > 0, num2 >= num1, both nums ont be empty, both nums wont be null, no str, or arrys coming in. 

//Return
//arr -> list of multiples strating at num1 and ending possibly ending including num2. 

//Examples
//console.log(findMultiples(2, 6), [2,4,6])
//console.log(findMultiples(2, 5), [2,4])