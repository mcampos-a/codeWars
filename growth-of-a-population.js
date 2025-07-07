//7 Kyu
//Growth of a Population
//Fundamentals, Strings 

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 
// 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town 
// need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.


//Solution I

function nbYear(p0, percent, aug, p) {
//set up a counter that tracks how many years have passed since we tracked population growth to reach target pop p
  let counter = 0
//convert the percentage number input to a decimal we can use for calcualtions
  let percentage = percent/100

//set up a population total to compare after every loop
  let currentPop = p0
//set up a loop that will not stop unil we reach the population seize p or greater. Make sure to use Math.Floor() on the current pop after every calc to make sure we dont take into account fractional ppl
  while(currentPop < p){
    currentPop = Math.floor(currentPop + (currentPop * percentage) + aug)
    counter++
  }
//return our counter of years
  return counter
}


//num1 -> representing the population of a town starting that year, it wont be empty, wont be null or undefined, always a num coming in
//num2 -> percentage number of growth rate per year, it wont be empty, wont be null or undefined, always a num, this num will not comin in as a percentage fraction
//num3 -> number of people that come in or leave every year, can be negative or positivem wont be null or undefined, wont be empty
//num4 -> the target population that we want to reach and will help us track how many years need to pass to get there, wont be empty, wont be null or undefined, always will be a num

//num -> the number of years that it will take for the population of the town to reach the target p. Note there is no fraction of people, round down (Math.Floor()) when calcualting the number of people at the end of each year

console.log(nbYear(1500, 5, 100, 5000), 15) 
//population after one year = 1500 + (1500 * .05) + 100 = 1675
//pop year two = 1675 + (1675 * .05) + 100 = 1858
//pop year three = 1858 + (1858 * .05) + 100 = 2050
//until we reach 5000

console.log(nbYear(1500000, 2.5, 10000, 2000000), 10)

