//8 Kyu
//Plural
//Fundamentals

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. 
// This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

//Solution I

function plural(n) {
//check if input n is === 1 if so return false else return true
  return n !== 1
}

//num -> positive intergers, floats, zero. Never null or undefined. Input wont be empty will always have a num. 

//boolean -> true if the number is not 1 and false if number is one or zero

console.log(plural(0), true)
console.log(plural(1), false)
console.log(plural(100000), true)


// Test.assertEquals(plural(0), true, "Plural for 0");
// Test.assertEquals(plural(0.5), true, "Plural for 0.5");
// Test.assertEquals(plural(1), false, "Plural for 1");
// Test.assertEquals(plural(100), true, "Plural for 100");
// Test.assertEquals(plural(Infinity), true, "Plural for Infinity");
