//7 Kyu
//Sum of integers in string
//Fundamentals

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.


//Solution 

function sumOfIntegersInString(s) {
//set up an array to store the integers
  let numArr = []
//set up a str to keep multidigit integers together
  let numStr = ''
//set up a loop to iterate through each character in the str
  for (let char of s){
//check if each char is a number between 0 and 9. If so add then to the str var to store
    if(char >= '0' && char <= '9'){
      numStr += char
//if the character is not a str, convert the str number in the str var and push it to the array variable and reset the str number variable
    }else if(numStr.length > 0){
      numArr.push(Number(numStr))
      numStr = ''
    }
  }
//if input str ends with a number then convert the str variable to a number end push it to the array
  if(numStr.length >0){
    numArr.push(Number(numStr))
  }
//return the sum of the numbers within the arr variable
  return numArr.reduce((current, next)=> current + next, 0)
}

//str -> a str of words that can contain letters and positive nums, can be empty, wont be null or undefined, will always be a str of letters and positive nums

//num -> a number reflecting the sum of all in integers present in the str, if there is no numbers return 0

console.log(sumOfIntegersInString("2 + 3 = "), 5)