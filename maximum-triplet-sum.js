//7 Kyu
//Maximum Triplet Sum
//Fundamentals, arrays

// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:
// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .


//Solution

function maxTriSum(numbers){
//create a new array without the dups and order it in descending nums
  let uniqueArr = numbers.filter((el,i,arr)=>{
    return arr.indexOf(el) === i
  }).sort((a,b)=> b-a)
//return the sum of the first three nums
  return uniqueArr[0] + uniqueArr[1] + uniqueArr[2]
}

//arr -> of nums, at least 3 elements, wont be empty, wont be null or undefined, will always be an array of nums

//num -> sum of the largest numbers in the array, no duplciates

console.log(maxTriSum([3,2,6,8,2,3]), 17)



