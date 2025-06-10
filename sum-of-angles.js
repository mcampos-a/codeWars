//7 Kyu
//Sum of Angles
//Fundamentals, geometry

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//Solution I

function angle(n) {
//use the equation sum = (n-2) * 180 to calculate the total sum of the polygons angles and return it
  return (n-2) * 180
}


//num -> num wont ever be empty, no other data types coming in, num wont be null or undefined, 

//num -> a sum of all the anlges of a simple polygon. We can use the equation sum = (n-2) * 180

//Example

console.log(angle(3), 180)
console.log(angle(4), 360)

