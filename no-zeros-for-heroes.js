//8 Kyu
//No zeros for heroes
//Fundamentals

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

//Solution I

function noBoringZeros(n) {
   let numArr = String(n).split('')
    while(numArr[numArr.length - 1] === '0'){
      numArr.pop()

    }
   return +numArr.join('')
}

//Parameters
//num -> can be negative, wont be empty, wont be null, always only a num coming

//Return
//num -> remove any zeroes if it sart

//Example.log(noBoringZeros(1450) 145)













