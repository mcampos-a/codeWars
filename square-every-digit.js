//7 Kyu
//Square Every Digit
//Fundamentals, Mathematics

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
//set up an empty str variable to store our final concatenate number
  let result = ''
//use the spread operator to store the number in an array
  let numArr = [...String(num)]
//loop through the array 
//take each num, square it and concatenate it to our result str
  numArr.forEach(el => result += el**2)
//last we will convert the str result back to a num and return it
  return Number(result)
}

//num -> input wont be empty, no null or undefined inputs, always receive an integer

//num -> take every element num in the interger, square it and concatenate it all together. 

console.log(squareDigits(765), 493625) //493625
console.log(squareDigits(2431), 41691) //41691

