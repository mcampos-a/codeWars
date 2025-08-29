//7 Kyu
//ONumber of Decimals Digits
//Fundamentals, strings

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



//Solution

var humanYearsCatYearsDogYears = function(humanYears) {
//set up variable to store cat years
  let catYears = 0
//set up variable to store dog years
  let dogYears = 0
//set up a variable to store humanYears
  let yearsRemaining = humanYears
//check if humanYears is bigger than one. If so add 15 to cat and dog years, and subtract one from human years
  if(yearsRemaining >= 1){
    catYears+= 15
    dogYears+= 15
    yearsRemaining--
  }
//now check if humanYears is bigger than 1 again. If so add 9 to cat and dog years, and subtract one from human years
  if(yearsRemaining>=1){
    catYears+=9
    dogYears+=9
    yearsRemaining--
  }
//last if human years is > 0 multiply the number by 4 and add the resul to cat years, multiply the number by 5 and add the result to dog years
  if(yearsRemaining>0){
    catYears+= (yearsRemaining*4)
    dogYears+= (yearsRemaining*5)
  }
//now return all year variables

return [humanYears, catYears, dogYears]
}

//num -> wont be empty, will always be >=1, wont be null or undefined, will always be a num coming in.

//arr -> an array holding three elements, human years, catYears, dogYears.

humanYearsCatYearsDogYears(3, 28, 29) //cat: year1 + year2 + year3 => 15 + 9 + 4 dog: 15 + 9 + 5 


