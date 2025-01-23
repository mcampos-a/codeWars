//7 Kyu
//Highest and Lowest 
//Fundamentals and Strings


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//Solution

function highAndLow(numbers){
  //First we separate the string to individual numbers. We get rid of the spaces.
    let newString = numbers.split(" ")
  //Then we sort the array to get our min and max
    newString.sort((a,b)=>a-b)
  //Now we store the min and max
    let min = newString[0]
    let max = newString[newString.length-1]
  //Lastly we return the max first and min like the problem asks
    return `${max} ${min}`
  
  }