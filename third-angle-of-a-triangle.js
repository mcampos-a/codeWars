//8 Kyu
//Third Angle of a Triangle
//Fundamentals

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle



//Solution I

function otherAngle(a, b) {
//subtract a and b from 180 to calculate the remainder angle and return it
  return Math.abs(180-b-a)
}
  

//Parameters
//num1, num2 -> two interior angles of a triangle, only positive nums, no empty nums, not null, only positive nums coming in

//Return
//num -> third angle of trianble 

//Example
//console.log(otherAngle(30,60) 90)







