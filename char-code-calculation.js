//7 Kyu
//Char Code Calculation
//Fundamentals, arrays, strings, mathematics

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


//Solution


function calc(x){
//set up a variable to store the char code of each letter
  let total1 = ''

//loop through the str
  for(let i=0; i<x.length; i++){
//get the char code of each letter and add them to both variables. 
    let charCode = x[i].charCodeAt()
//if the char code is a 7 place it on the first and place a 1 in the second variable
    total1+= charCode
  }
//set up a variable that can store the modified char code number with 7s replaced by 1s
  let total2 = total1.split("").map(el=>{
    if(el==='7'){
      return '1'
    }else{
      return el
    }
  }).join('')
//reassign the total1 and 2 strings to a sum of the digits in each number
  total1 = total1.split('').reduce((sum, current)=> sum + Number(current), 0)
  total2 = total2.split('').reduce((sum, current)=> sum + Number(current), 0)
  
  console.log(total1)
  console.log(total2)
//check the number difference between both number and return it
  return Number(total1) - Number(total2)
}

//str -> str of letters, wont be empty, wont be null or undefined, will always be a str

//num -> the difference between the char code concat number and the same number with 7s replaced with 1s.

console.log(calc('ABC'), 6)






