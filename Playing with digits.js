//6 Kyu
//Playing with digits
//Fundamentals, mathematics


// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n ∗ k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// FundamentalsMathematics

//Solution

function digPow(n, p){
  //We convert n to a string so we can iterate through each number of the integer later
    let firstNumString = n.toString()
  //we store the length of the n string to use in a loop
    let length = firstNumString.length
  //we set up a place where to add up our consecutive power sum
    let result = 0
  //Now using a for loop we will iterate through each digit in the n integer. Stopping when we reached the length of that integer.
    for(let i=0; i<length; i++){
  //Using the parseInt() method we take the string digit and convert it back to an integer to use in our consecutive power calcs
      //using charAt() we select each digit in the string of iterger n and pull it back as an integer with with parseInt
      let numSeries = parseInt(firstNumString.charAt(i),10)
      //Now we perform the power calculation shown in the task.
      result += Math.pow(numSeries,p+i)
    }
  //Finally we check if the sum of the powers of each digit in the integer n starting at p is divisble by p we return the sum of the series
    if(result%n===0){
      return result/n
  //if the sum of the series is not divisble by p we will return -1 as prompted
    }else{
      return -1
    }
  }
}
