//8 Kyu
//Fake Binary
//Fundamentals, strings, arrays

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x){
    let nums = [...x]
  
    let result = []

    for(num of nums){
      
        Number(num) >= 5 ? result.push('1') : result.push('0')
    }

    return result.join('')
}


//str -> str w/ digits, wont be empty, for the purposes of this challenge the inputs wont be null or undefined, will always be a str coming in

//str -> if digit >= 5 replace with '1' if digit < 5 replace with '0'

console.log(fakeBin('52782194638'), '10110010101')

