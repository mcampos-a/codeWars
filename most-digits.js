//7 Kyu
//Most Digits
//Fundamentals, strings

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



//Solution

function findLongest(array){
//set up a variable to hold num with longest length
  let result = array[0]
//loop through the array and assign the first number to result variable
  array.forEach((el)=>{
    if(String(el).length > String(result).length){
      result = el
    }

  } )
//check if each number.length is greater than the result variable.

//return result var
  return result
}


//arr -> of nums, wont be empty, wont be null or undefined, will always be an array

//num -> the first number that has length equal to another num element with the same length

console.log(findLongest([1,2,34,5,66]), 33)
console.log(findLongest([1,20,100]), 100)