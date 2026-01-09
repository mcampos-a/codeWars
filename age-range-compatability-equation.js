//8 Kyu
//Age Range Compatability Equation
//fundamentals

// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

// Min=(Age/2)+7
// Max= 2*(Age-7)

// Minimum age ≤ Your age ≤ Maximum age

// Task
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form "[min]-[max]"

// Examples:
// age = 27   =>   "20-40"
// age = 5    =>   "4-5"
// age = 17   =>   "15-20"

//Solution

function datingRange(age){
//check if the age is greater than 14 if so use top equation
  if(age >14){
    //store the min calculation in a variable
    let min = Math.floor((age/2)+7)
    //store the max caluclation in a variable
    let max = Math.floor(2*(age-7))
    //return a template str with the variables for the range
    return `${min}-${max}`
    //if the age is <= to 14 
  }else{
    //store the min calculation in a variable

    let min = Math.floor(age - 0.10 * age)
    //store the max caluclation in a variable
    let max = Math.floor(age + 0.10 * age)
    //return a template str with the variables for the range
    return `${min}-${max}`
  }

}

//num -> number between 1 and 100 tht represents a persons age, wont be empty, wont be null or undefined, will always be a num between 1 and 100

//str -> if age is greater than 14 use the top equation else use the bottom equation

console.log(datingRange(27), "20-40")
