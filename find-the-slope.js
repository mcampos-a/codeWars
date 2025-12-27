//8 kyu
//Find the Slope
//fundamentals, mathematics, algebra

// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

//Solution

function slope(points){
//check if the x2 - x1 = 0 and return "undefined" if so
    if(points[2]-points[0] === 0) return "undefined"
//else return the slope as a str
    return `${(points[3] - points[1])/(points[2] - points[0])}`

}

//arr -> of nums, wont be empty, wont be null or undefined

//str -> a number calculated from points in the input array, if dividing by zero return "undefined"

console.log(slope([10,20,20,80]), 6)

