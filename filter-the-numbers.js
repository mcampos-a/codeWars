//7 Kyu
//Filter the Numbers
//Fundamentals, Strings

// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.



//Solution

function filterString(value) {
//set up a variable that stores the str num that we will return later as a num
    let result = ''
//set up a variable storing the numbers 0-9 to reference 
    let stringNums = '0123456789'
//loop though str and check if there are numbers found in the numbers str.
    for(let i=0; i<value.length; i++){
//if so add that element num to the result variable
        if(stringNums.indexOf(value[i]) != -1){
            result+=value[i]
        }
    }
//return the result variable as a number
    return Number(result)
}


//str -> of nums and letters, str wont be empty, wont be null or undfined, the num can start at zero

//num -> a number from the str in the same order they appear

console.log(filterString('a1b2c3'), 123)
console.log(filterString('a1b2c3WE46HG7'), 123467)
