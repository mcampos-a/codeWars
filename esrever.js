//7 Kyu
//esreveR
//Fundamentals, fucntional programming

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)





//Solution

let reverse = function(array) {
//set up emtpy array to store the reversed list
  let result = []
//loop through the incoming array
  array.forEach(el => result.unshift(el))
//use the unshift() method to add the input array element at the beggining of the result array

//return the result array
  return result
}

//arr -> elements, wont be empty, array wont be null or undefined, will always be an array

//arr -> that is reserversed without using the built in reverse method.

console.log(reverse([1,2,3,4,5], [5,4,3,2,1]))


