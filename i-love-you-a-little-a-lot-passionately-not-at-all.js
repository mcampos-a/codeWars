//8 Kyu
//I love you, a little , a lot, passionately ... not at all
//Fundamentals, arrays

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.



//Solution I

function howMuchILoveYou(nbPetals) {
  //set up an array containing all our phrases. We shift the order by one to account for the index of phrases starting at 1
  let phrases = ["not at all","I love you", "a little", "a lot", "passionately", "madly"]
  //return an array using the pedals and modulous. 
  return phrases[nbPetals % 6]
}


//Parameters
//num-> num always > 0, no null input, always interger, no symbols, no funny bizz
//if num > 6 start at 1st msg.

//Return
//str-> 
//if num is 1 or 7 or 13 or 19 return "I love you"
//if num is 2 || 8 || 14 || 20 return "a little"
//if nums is 3 || 9 || 15 || 21 return "a lot"
//if num is 4 || 10 || 16 || 22 return "passionately"
//if num is 5 || 11 || 17 || 23 return "madly"
//if num is 6 || 12 || 18 || 24 return "not at all"

//examples
//console.log(howMuchILoveYou(3), "a lot")

