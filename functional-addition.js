//7 Kyu
//Functional Addition
//Fundamentals, functional programming

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6


//Solution 

function add(n) {
  return function addNum(x){
   return n + x
          }
}

//num -> n, wont be empty, wont be null or undefined, it will always be a number

//num -> a number that is the result of adding the argument for n to any number
