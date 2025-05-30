//8 Kyu
//Terminal game combat function
//Fundamentals


// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.


//Solution I

function combat(health, damage) {
  return damage > health ? 0 : health - damage
}

//parameters
//num1, num2 -> both wont be empty, both never null nor undefined, only always getting nums

//Returns
//num -> calcualte player health after taking dmg and take care that health can only go to 0

//Examples
//console.log(combat(100, 45), 55)
//console.log(combat(55, 65), 0)
