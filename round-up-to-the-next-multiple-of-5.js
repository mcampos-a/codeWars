//7 Kyu
//Round up to the next multiple of 5
//Fundamentals

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

//Solution I

function roundToNext5(n){
//use the math object and the ciel() method to round up decimal numbers. Divide it by five and multiply the number by 5 
return Math.ceil(n/5)*5
}
    

//Parameters
//num -> can be positive and negative, it wont be empty, never null, only nums coming in. 

//Return 
//num -> rounded up to the next multiple of 5. 

//Example
//console.log(roundToNext5(12), 15)
//console.log(roundToNext5(-2), 0)









