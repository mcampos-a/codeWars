//8 Kyu
//A wolf in sheep's clothing
//Fundamentals, arrays

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
// where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//Solution I

function warnTheSheep(queue) {
//loop through the array startign from the end. 
  for(i=queue.length-1; i>=0; i--){
    if(queue[queue.length-1] === "wolf"){
  //check each element and if arr[array.length-1] === "wolf" return "Pls go away and stop eating my sheep"
      return "Pls go away and stop eating my sheep"
    }else{
// else return "Oi! Sheep number ${array.length-(array.indexOf("wolf")+1)} ! You are about to be eaten by a wolf!"
      return `Oi! Sheep number ${queue.length-(queue.indexOf("wolf")+1)}! You are about to be eaten by a wolf!`
    }

  }

}

//arr-> with strings, array wont be empty, there will always be one wolf, wont be null or undefiend, only strs in the arry

//str -> a shout if array[array.length-1] === "wolf" return "Pls go away and stop eating my sheep"
//else return "Oi! Sheep number ${array.length-(array.indexOf("wolf")+1)} ! You are about to be eaten by a wolf!"



