//7 Kyu
//Printer Errors
//Fundamentals

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


//Solution

function printerError(s) {
//set up a variable to store the number of error str
    let error = 0
//set up a variable storing the alphabet from a-m
    let alpCheck = 'abcdefghijklm'
//loop though the str and check if every letter is found in the a-m alphabet variable
    for(let i=0; i<s.length; i++){
//if the str letter is not there add 1 to the error variable
        if(alpCheck.indexOf(s[i]) === -1){
            error++
        }
    }
//return template str of a fraction with the error variable in the numberator and the str length on the denominator
    return `${error}/${s.length}`
}

//str -> str word that contains letters only, wont be empty, wont be null or undefined, will always be a str with length >= 1 with letters from a to z

//str -> str word that has a numerator of letters outside from a-m and the denominator the length of the str

console.log(printerError("aaabbbbhaijjjm"), "0/14")
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"), "8/22")


