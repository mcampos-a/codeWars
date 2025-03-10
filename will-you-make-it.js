//8 Kyu
//Will you make it?
//Fundamentals, MAthematics

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


//Solution I

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //calculate the miles the car can travel by multiplying mpg by the fuel left in the tank
  if(mpg * fuelLeft >= distanceToPump){
     //if the miles is >= than distnace to pump return true
    return true
  }else{
    //else false
    return false
  }
};

//Parameters
//taking three params. num->distance to pump, num->mpg, num ->fuel left. Never null, not empty, always nums.

//Return
//boolean-> false if mpg * fuel < distance
//boolean-> true if mpg * fuel >= distance

//Example
//console.log(zeroFuel(100, 30, 3) false)

