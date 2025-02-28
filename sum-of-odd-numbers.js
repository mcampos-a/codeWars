//7 Kyu
//Sum of odd numbers
//Fundamentals, arrays, lists, mathematics

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8




//Solution I

function rowSumOddNumbers(n) {
	//multiply our given n to the cubic power
  return Math.pow(n,3)
}

//Parameters
//num-> references index, always a num, not null, no symbols, no funny bizz.
//odd numbers pyramid. first row starts at 1
//second row adds up to 8
//third row adds up to 27
//4th row adds up to 64
//each row is a cube of each index or num provided

//Returns
//a number -> n^3

//examples
//console.log(rowSumOddNumbers(3), 27)
//console.log(rowSumOddNumners(2), 8)