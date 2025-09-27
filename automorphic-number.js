//7 Kyu
//Automotphic Number
//Fundamentals, Mathematics

// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"


//Solution

function automorphic(n){
//set up a variable to store the squared value
  let squared = n**2
//check if str squared value ends with str n
//if so return "Automorphic"
//else "Not!!"
  return String(squared).endsWith(String(n)) ? "Automorphic" : "Not!!"
}

//num -> positive number to be squared, wont be empty, wont be null or undefined, will always be a num coming in.

//str -> if n^2 as a string ends with str n return "Automorphic" or "Not!!"

console.log(automorphic(25), "Automorphic")




