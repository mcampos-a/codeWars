//7 Kyu
//Divide and Conquer
//Fundamentals, strings, arrays

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



//Solution

function divCon(x){
//set up a variable to store the finall sum
    let result = 0
    let strNums = 0
//loop through array and check if each element is typeof number or typeof string. Perform the operation based on the type and add to result variable
    x.forEach(el => {
        if(typeof el === "number"){
            result += el
        }else if(typeof el === "string"){
            strNums += Number(el)
        }
    });
//return result
    return result - strNums
}


//arr-> of nums and string nums, can be empty, not null or undefined, always will be getting an array.

//num -> the product of adding typeof number and subtracting typeof string.

console.log(divCon([1,'2', 3, '4']), -2)
console.log(divCon([9, 3, '7', '3']), 2)

