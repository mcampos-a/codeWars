//7 Kyu
//Simple consecutive pairs
//Fundamentals, arrays, strings, mathematics

// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
// More examples in the test cases.

// Good luck!

// Please also try Simple time difference


//Solution


function pairs(ar){
//store the incoming arr
    let array = ar
//set up a variable to keep track of the count of consequitive pairs
    let count = 0
//check if the arry is odd, if so pop out the last number of the array
    if(ar.length % 2 != 0){
        array.pop()
    }
//loop through the array, go up by two
    for(let i=0; i<array.length; i+=2){
//check if the elements pair at each loop marker are consecutie
        if(Math.abs(array[i]-array[i+1])===1){
//if so add 1 to count
            count++
        }
    }
//return the count variable
    return count
};

//arr -> of nums, pos and neg. Wont be empty, wont be null or undefined, will always be an array of nums

//num -> the count of consecutive pair numbers in the array. If the array is odd, pop out the last number

console.log(pairs([1,2,5,8,-4,-3,7,6,5]), 3) //(1,2), (-4,-3), (7, 6) three pairs




