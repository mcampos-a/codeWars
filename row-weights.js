//6 Kyu
//Row Weights
//Fundamentals, arrays

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 
// 13+49=62 and the total weight of team 2 is 27
// [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is 
// 50+70=120 and the total weight of team 2 is 60+80=140.
// [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 0 and the total weight of team 2 is 0.



//Solution

function rowWeights(array){
//set up a variable for team 1 
  let team1 = 0
//set up a variable for team 2
  let team2 = 0
//loop through array if index % 2 === 0 ? team1+= el : team2+= el
  for(let i=0; i<array.length; i++){
    if(i % 2 === 0){
      team1+= array[i]
    }else{
      team2+= array[i]
    }
  }
//return a touple with team1 and team2 variables
  return [team1, team2]
}

// arr -> of persons weights, never empty, not null or undefined, will always be an array of nums

//arr -> tuple with one element of team 1 total weight and the other element of team 2 total wight

console.log(rowWeights([13, 27, 49]), [62, 27])
console.log(rowWeights([50, 60, 70, 80]), [120, 140])