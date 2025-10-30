//8 Kyu
//Quadrants
//Fundamentals, algorithms, sorting

// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4
// Reference
// QuadrantsQuadrants
// There are four quadrants:

// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y


//Solution

function quadrant(x, y) {
//check if x is positive and y is positive for quadrant 1
  if(x > 0 && y > 0) return 1
//check if x is positive and y is negative for quadrant 4
if(x > 0 && y < 0) return 4
//check if x is negative and y is positive for quadrant 2
if(x < 0 && y > 0) return 2
//check if x is negative and y is negative for quadrant 3
if(x < 0 && y < 0) return 3

let x =1
}

//num -> non-zero nums that represent the quadrants x and y coordinates. Wont be empty, wont be zero, wont be null or undefined, will always be nums

//num -> the number representing the quadrant the input coordinates give us

console.log(quadrant([1,2]), 1)



