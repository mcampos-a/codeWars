//8 Kyu
//Representation of array
//fundamentals, arrays, strings

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// Note: you shouldn't escape the \n, it should work as a new line.



//Solution

function toCsvText(array) {
//set up an empty str to store the array elements
    let result = ''
//loop through the main array and join each array by a comma and add \n to the end and add it to the result str
    for(let i=0; i< array.length; i++){
        result+= array[i].join(',') + '\n'
    }
//return the result
    return result.slice(0,result.length-1)
}

//arr-> an array of sub arrays, will always be arrays greater than 2 length, can be empty, wont be null or undefined

//str-> a str that contains each sub array element into a sinlge str. At the end of each sub array attach a \n

console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]), '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34')