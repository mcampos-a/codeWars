//7 Kyu
//Descending Order
//Fundamentals

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


//Solution I

function descendingOrder(n){
  //store n as a string
  let strNum = String(n)
  //split string n into array of str nums. then sort the array in descending order. join it to a string num
  let arrNums = strNum.split('').sort((a,b)=>b-a).join('')
  //return number of that rearranged string num
  return Number(arrNums)
}


//Paramaters
//int-> non-negative, wont be null, no funny bizz

//return
//integer -> of sorted nums, descending order (highest to lowest)

//examples
//console.log(descendingOrder(12345), 54321)
