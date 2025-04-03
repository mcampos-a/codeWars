//8 Kyu
//Sort and Star
//Fundamentals, strings, arrays, sorting

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Solution I

function twoSort(s) {
//sort the array of words
    let sortedArr = s.sort()
//get a copy of the 0 index str word. 
    let result = sortedArr[0]
//split and join it with *** delimitor
    let finalResult = result.split("").join("***")
//return the copyied and modified word
    return finalResult
}
  

//Parameters
//arr-> w/ string words. Not empty, never null, only getting array of words. Do not remove or add elements to the original array

//Return
//str -> w/ *** between each letter. sort the words array alphabetically and return the first string with the *** between each letter

//Examples
//console.log(twoSort(["Cebra", "Agua","Brenda"]), "A***g***u***a")




