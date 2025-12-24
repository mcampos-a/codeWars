//7 kyu
//Find the nth Digit of a Number
//fundamentals

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

//Solution

function findDigit(num, nth) {
//check if the second argument is negative
    if(nth<0) return -1
//store the first argument number as a str num
    let numStr = String(Math.abs(num))
//check if the second argument is larger than the length of the first argument number
    if(nth>numStr.length) return 0

//select a number in the str strating from the end and subtracting from the length of the str num the number from the second argument
    return Number(numStr[numStr.length - nth])

}

//num -> a number that can be negative, wont be null or undefined, will always be a num, and can be zero
//num2 -> a number indicating which number from the right to return, wont be empty, can be negative and zero, wont be null or undefined, will always be a num

//num -> a number in the position of the second argument number starting from the right. If the second argument number is <1  return -1, if the second argument is greater than the length of the first argument number return 0. Ignore the negative sign if the first argument number is negative

console.log(findDigit(5673, 4), 5)
