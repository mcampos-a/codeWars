//8 Kyu
//Twice as old
//Fundamentals, mathematics

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his 
// son (or in how many years he will be twice as old). The answer is 
// always greater or equal to 0, no matter if it was in the past or 
// it is in the future.

//Solution I
function twiceAsOld(dadYearsOld, sonYearsOld) {
//calculate the date asked by using the given age of the dad and subtrcting the age of the son times 2
    return Math.abs(dadYearsOld - (2 * sonYearsOld))
}

//Parameters
//num1, num2 -> ages. only always nums, not null, not empty

//Return
//num -> calcualte when yearsAgo = dadAge - (2*sonAge)

//Example
//console.log(twiceAsOld(36, 7), 22)
//console.log(twiceAsOld(40, 10), 20)











