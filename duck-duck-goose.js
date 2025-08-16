//8 Kyu
//Duck Duck Goose
//Fundamentals, strings, arrays

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name



//Solution

function duckDuckGoose(players, goose) {
//select the object called with parameter goose as the index and subtract 1
  return players[(goose-1) % players.length].name
//

}


//arr -> with player objects, it wont be empty, always an object in the elements, never null or undefined, there is a name property in each object.
//num -> position we are looking for index =1, 

//str -> with the value (name) of the property name at the object indexed with the paramater goose

console.log(duckDuckGoose([a, b, c, d], 1), a.name)
