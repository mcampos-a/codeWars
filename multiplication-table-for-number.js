
//8 Kyu
//Multiplication table for number
//Fundamentals, strings

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


//Solution


function multiTable(number) {
//set up a variable to store the str table
  let result = ''
//loop from 1 to 10
  for(let i = 1; i<=10; i++){
//add a template str with current i and number to result variable
//if its the last index do not add a new line
    if(i===10){
      result+= `${i} * ${number} = ${i * number}`
    }else{
      result+= `${i} * ${number} = ${i * number}\n`
    } 

  }
//return result
  return result
}

//num -> between 1 and 10, wont be empty, wont be null or undefined, will always be a num

//str -> a string formate multiplication table. Use this pattern '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'

console.log(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')






