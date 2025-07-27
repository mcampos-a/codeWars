//8 Kyu
//Multiply the number
//Fundamentals

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)



function multiply(number){
//multiply incoming number by 5 **'number'.length and return
//check for nums that are less than or equal to 0
  return number * Math.pow(5,number = 0 ? 1 : String(Math.abs(number)).length)
}

//num -> never empty, wont be null or unefined, will always be getting a number

//num -> multiply the input number times 5 to the power of the length of the input number

console.log(multiply(3), 15)  //3 * 5^('3'.length)
console.log(multiply(100),12,500 )  //100 * 5^('100'.length)
