//8 Kyu
//Are You Playing Banko?
//Fundamentals, strings


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.




//Solution I

function areYouPlayingBanjo(name) {
 //first make the string lowercase to deal with potential cap R
  let testName = name.toLowerCase()
 //now we check with a conditional if string[0] = r, or if string[0] != r
  return testName[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
 
}


//Parameters
//Str -> always a string of letter aka names, no names of only numbers, no empty strings
//we knoe if string[0]= r or R -> you play the banjo! else you dont! ha!

//Returns
//if string[0] = r/R -> name + play banjo
//if string[0] != r/R name + does not play banjo

//Example
//console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo")
//console.log(areYouPlayingBanjo("Ryan"), "Ryan plays banjo")
