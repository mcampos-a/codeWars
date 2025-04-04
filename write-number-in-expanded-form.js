//6 Kyu
//Write Number in Expanded Form
//Fundamentals, Strings, Mathematics, Algorithms, Fundamentals

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

//Solution I

function expandedForm(num) {
    //spread individual digits in the num into an array of digits. 
    let digits = [...String(num)]
    // store the number of zeroes that will be needed based on the length of the array. Subtract one to ensure you are at the correct magnitude
    let amountZeros = digits.length -1
    //set up empty str to keep track of the expanded form
    let result = ''
    //loop thorugh single digit array
    digits.forEach((el,index)=>{
    //check if the number is not a zero since we dont want floating zeros in the answer
        if(el != 0){
            //concatenate the individual digit to zeros that. Use repeat method and the index of each num and the amount of zeroes you will bring is as a guide 
            result += el + '0'.repeat(amountZeros - index) + ' + '
        }
    })
    //slice the last three elements of the str to cut out the extra ' + '
    result = result.slice(0, result.length - 3)
    //return string
    return result
}
  

//Parameters
//num -> not empty, never null, only nums coming in. 

//Returns
//str -> nums for each magintud expanded with a " + " delimitor

//Examples
//console.log(expandedForm(12), "10 + 2")
//console.log(expandedForm(731), "700 + 30 + 1")





