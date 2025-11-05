//8 Kyu
//Expressions Matter
//Fundamentals

// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.


//Solution

function expressionMatter(a, b, c) {
//set up a variable to store the sum
    let sum = 0
//set up checks for + +
    if(a+b+c > sum){
        sum = a+b+c
    }
//set up check for * * and check if its bigger than sum variable
    if(a*b*c > sum){
        sum = a*b*c
    }
//set up check for + *
    if(a+b*c > sum){
        sum = a+b*c
    }
//set up check for * +
    if(a*b+c > sum){
        sum = a*b+c
    }
//set up check for (+) *
    if((a+b)*c > sum){
        sum = (a+b)*c
    }
//set up check for * (+)
    if(a*(b+c) > sum){
        sum = a*(b+c)
    }

    return sum
}

//num1, num2, num3 -> wont be empty, wont be null or undefined, will always be nums between 1-10

//num -> the highest sum between all three inputs, using the +, * and () operators

console.log(expressionMatter(1, 2, 3), 9)







