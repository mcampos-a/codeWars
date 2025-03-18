//8 Kyu
//Counting Sheep...
//Fundamentals, Mathematics

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Solution I

function countSheeps(sheep) {
  //set up a variable to count total of trues
  let sheepCount = 0
   //loop througha array and check if each element is true
    for(let i = 0; i< sheep.length; i++){
      if(sheep[i]===true){
        sheepCount++
      }
    }
  //return count of sheep 
  return sheepCount
}


//Parameters
//arr-> boolean (T/F) and we need to count the Trues. Arr can be empty, can be null, no other data will come in.

//Return 
//num-> counting the total of true's in the array. If array empty return 0, if array null return 0,

//Example
//console.log(countSheep([true, false, true]), 2)