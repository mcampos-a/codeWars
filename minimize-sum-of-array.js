//7 Kyu
//Minimize Sum Of Array 
//Fundamentals, arrays

// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples

// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

//Solution

function minSum(arr) {
//take the array and sort it in an ascending manner
  let sortedArr = arr.sort((a,b)=> a-b)
//set up a variable to store the minimum sum
  let result = 0
//loop through array and grab the first and last number. Multiply them together. 
// Make sure you subtract i from the end of the last one to move in and grabbing the largest number
//we only have to iterate through half of the array since we are grabbing two numbers at a time
  for(let i = 0; i<sortedArr.length/2; i++){
    result+= (sortedArr[i]*sortedArr[sortedArr.length - 1 - i])
  }
//return the result variable
  return result
}

//arr -> of nums, only positive nums, the array will always be even, never null or undefined, always an arr of nums coming in

//num -> the minimum sum you can get when you multiply set of two elements together. Samllest times larges until you fo through the list and add them up

console.log(minSum([5,4,2,3])) //[2,3,4,5] => (5*2)+(4*3) = 10 + 12 = 22

