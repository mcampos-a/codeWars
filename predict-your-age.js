//7 Kyu
//Predict your age!
//Fundamentals

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.



//Solution I

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//set up an array to contain the parameters
  let agesArr = [age1,age2,age3,age4,age5,age6,age7,age8]
//use the reduce method on the array to multiply each number by itself and then add each to a sum
  let sum = agesArr.reduce((sum, current)=> (current*current) + sum, 0)
//then take the square root of that sum and divide it by two. Finally, return the result rounded to the floor
  return Math.floor(Math.sqrt(sum)/2)
}

//nums -> 8 params, wont be empty, they wont be null or undefined, only nums coming in, 

//num -> [..nums].reduce((total, current)=> (current*current) + total) -> take squrt and divide by 2. Round to floor and return

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86)

