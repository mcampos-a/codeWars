//8 Kyu
//Drink About

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//Solution

function peopleWithAgeDrink(old) {
//set up conditonals starting with the yougnest age and check their age
  if(old < 14){
    return "drink toddy"
  }else if(old < 18){
    return "drink coke"
  }else if(old < 21){
    return "drink beer"
  }else if(old >= 21){
    return "drink whisky"
  }

};


//num -> represent the age of the person, wont be empty, no null or undefined, will always be a number
//children < 14
//teen < 18
//Young < 21
//Adult >= 21

//str-> 
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

console.log(peopleWithAgeDrink(20), "drink beer")
console.log(peopleWithAgeDrink(16), "drink coke")

