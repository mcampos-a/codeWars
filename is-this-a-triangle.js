//7 Kyu
//Is this a triangle?
//Fundamentals, Mathematics

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

//Solution I

function isTriangle(a,b,c){
  //check if there are two sides that are bigger than the third
  if(a+b>c && b+c>a && a+c>b){
  //if so return true
    return true
  }else{
  //else return false
    return false
  } 
}


//Parameters
//nums-> 3 params, only takeing nums, no strings, array, never null, can get negative nums

//return
//true - > two sides add up to be greater than the third
//false -> if you cant make a triangle with those nums.

//examples
////console.log(isTriangle(1,2,3), false)
// console.log(isTriangle(1,2,3), true)