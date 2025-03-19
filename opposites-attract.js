//8 Kyu
//Opposites Attract
//Fundamentals

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//Solution I

function lovefunc(flower1, flower2){
  //check if the reminder of each flowers petal dived by two is equal, if so it is even
  if(flower1%2 === flower2%2){
    //return false if remainders are the same
    return false
  }else{
    //return if remainders are different
    return true
  }
}


//Parameters
//nums-> two params, never, empty, can be zero, no str, no arrays, not null


//Return
//if one flower even and one add no matter the order return true
//if both flowers have the same petals return false

//Example
//console.log(lovefunc(1,4) true)
//console.log(lovefunc(3,3) false)

