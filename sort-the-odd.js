//6 Kyu
//Sort the odd
//Fundamentals, arrays, sorting

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]




//Solution I

function sortArray(array) {
  //store an array with only odd nums and sort it.
  let oddNumsSorted = array.filter((el)=> el % 2 !== 0).sort((a,b)=>a-b)
  //loop through original array and when we encouter odds replace with sorted array element.
  let result = array.map((el)=>{
      if(el % 2 !== 0){
        return oddNumsSorted.shift()
      }else{
        return el
      }
  })
  //return array
  return result
}

//Parameters
//arr-> nums, no empty arr, always nums, not null, no symbols, no funny bizz
//arr.sort((a,b)=>num%2 != 0 sort)

//return 
//return arr -> w/ sorted odd nums but dont touch even nums

//Examples
//console.log(sortArray([5,8,6,3,4]), [3,8,6,5,4])