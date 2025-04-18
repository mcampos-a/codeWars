//8 Kyu
//Convert number to reversed array of digits
//Fundamentals, Arrays

// Given a random non-negative number, you have to return the digits 
// of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]


function digitize(n) {
//split the nums by using String method and create an array of str nums
    let nums = String(n).split('')
//use the .resverse() method to reverse the array
    let reversed = nums.reverse()
//map through the reversed array and convert the elements back to integers
//return result array
    return reversed.map(el => Number(el))
}

//Parameters
//num -> positive nums, not empty, never null, only always get nums

//Returns
//arr -> nums of input in reverse order.

//Example
//console.log(digitize(12345), [5,4,3,2,1])
//console.log(digitize(98765), [5,6,7,8,9])









