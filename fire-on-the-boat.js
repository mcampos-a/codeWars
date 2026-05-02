//8 Kyu
//Barking mad
//fundamentals, arrays

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!


//Solution

function fireFight(s){
//loop throug the string and check if each element is the Fire string if so replace it with the ~~
  let wordArr = s.split(" ")

//use the replace method on the given str and replace Fire with ~~
  return wordArr.map((el)=> el == "Fire" ? el.replace("Fire", "~~") : el).join(" ")
}

//str -> of words, wont be empty, wont be null or undefined, will always be a str of words

//str -> if any element in the str is the sub string "Fire" replace it with "~~" and return the new str

console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~")