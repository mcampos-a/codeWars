//7 Kyu
//Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//Solution I

function solution(nums){
//check for edge cases
    if(nums===null){
        return []
    }else if(nums.length<1){
     return []
    }else{  
    //use the .sort() method, pass the ascending sorting function and return the array
     return nums.sort((a,b)=> a-b)
    }
}

//Parameters
//arr-> nums, can be empty, can be null, only getting an array, 

//Return
//arr-> sorted ascending numbers, if null or arr.length < 1 return emtpy arr

//Examples
//console.log(solutions([2,4,5,3,1]), [1,2,3,4,5])
//console.log(solutions(null), [])