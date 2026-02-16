//7 Kyu
//Check three and two
//fundamentals, arrays

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"





//Solution

function checkThreeAndTwo(array) {
//set up variables to count for a, b, c and set them equal to zero
  let aCount = 0
  let bCount = 0
  let cCount = 0
//loop through the array and generate a count of each str letter
  for(let i=0; i<array.length; i++){
    if(array[i] === 'a'){
      aCount++
    }else if(array[i] === 'b'){
      bCount++
    }else if(array[i] === 'c'){
      cCount++
    }
  }
//check if there is any variables with three and two counts and return true if at least two match
  return (aCount===3 && bCount === 2) || (aCount===3 && cCount === 2) || (bCount===3 && cCount === 2) || (bCount===3 && aCount === 2) || (cCount===3 && aCount === 2) || (cCount===3 && bCount === 2)
}

//arr -> wont be empty, wont be null or undefined, will always be an array with strings

//bool -> true if there is three of 1 tyoe of str and two of another type of str else return false

checkThreeAndTwo(["a", "a", "a", "b", "b"], true)