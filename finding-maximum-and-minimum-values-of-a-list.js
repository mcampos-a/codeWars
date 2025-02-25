//8 Kyu
//Finding Maximum and Minimum Values of a list
//Fundamentals

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.




//Solution I

var min = function(list){
    //sort the list by ascending order
    list.sort((a,b)=> a-b)
    //return 0 index
  return list[0];
}

var max = function(list){
  //sort the list by desending order
  list.sort((a,b)=> b-a)
  //return the last index
  return list[0];
}

//Parameters
//we will have two functions
//arr->nums, no empty arrys, no strings in arr, no null, symbols, no funny bizz


//Returns
//we will have one return per function
//max will give maximum
//min will return min number

//examples
//console.log(min([3,2,5,2,1]), 1)
//console.log(max([3,2,5,2,1]), 5)
