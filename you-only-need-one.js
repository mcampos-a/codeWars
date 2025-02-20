//8 Kyu
//You only need one - Beginner
//Fundamentals, arrays, strings

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.




//Solution I

function check(a, x) {
  //loop through array and compare each element to x. Here we use the .includes() method
  return a.includes(x)

}

//Parameters
//arr-> intergers or strings
//value x -> interger or string
//check if arr contains x

//return
//if arr contains x return true else return false

//Examples
//console.log(check([66, 101],66), true)



