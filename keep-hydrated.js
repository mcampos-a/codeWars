//8 Kyu
//Keep Hydrated!
//Fundamentals, Mathematics, Algorithms

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


//Solution I

function litres(time) {
  //multiply time by .5 liters of water and round down
  return Math.floor(time * .5)
}


//Parameters
//num-> hours cycling, wont be empty, never null, always positive, only nums coming in.
//we know 1 hr = .5 liters of water needed

//Returns
//num-> liters of water to drink, rounded down

//Examples
//console.log(liters(3), 1)
