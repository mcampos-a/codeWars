//8 Kyu
//Find out whether the shape is a cube
//Fundamentals

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid could have equal sides (could be a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

//Solution I

function cubeChecker(volume, side){
//check for the dege cases if volume or side are <= 0 return false
  if(volume <= 0 || side <= 0) return false
//check if side to the power of 3 === volume and return the outcome
  return Math.pow(side,3) === volume
};

//num1-> wont be empty, not null or undefined, only num coming in. can be zero or a negative num
//num2-> wont be empty, not null or undefined, only num ciming in can be zero or negative num

//boolean-> if side to the power of 3 === volume return true, else false
//also if volume or side are <=0 return false

console.log(cubeChecker(8, 3), false)
console.log(cubeChecker(-8, -2), false)
console.log(cubeChecker(125, 5), true)

