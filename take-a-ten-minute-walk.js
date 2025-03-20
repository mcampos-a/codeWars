//6 Kyu
//Take a Ten Minute Walk
//Fundamentals, Arrays

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



//Solution I

function isValidWalk(walk) {
  //set a starting point for the x coordinate
  let dx = 0
  //set starting point for the y coordinate
  let dy = 0
  //set the length of the walk based on the array
  let dt = walk.length
  //loop through array and evaluate what disntace is walked from origin
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  //last check if the walk of ten minutes took you away and back to the origin
  return dt === 10 && dx === 0 && dy === 0

}


//Parameters
//array-> w/ one letter string, 'n','s','w','e', user walks a single block for each letter in array, , each block takes 1 miute to walk, we have a max of 10 mins

//returns
//boolean -> if array.length <= 10 return true
//if array.length is > 10 return falst

//exmaple
//console.log(isValidWalk((['n','s','n','s','n','s','n','s','n','s']), true)
//console.log(isValidWalk((['n']), false)


