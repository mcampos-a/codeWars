//8 Kyu
//The Wide-Mouthed frog!
//Fundamentals, strings, logic

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

//Solution


function mouthSize(animal) {
//first take the input str and make it lowercase
  let input = animal.toLowerCase()
//check if the str equals "alligator" if so return str "small"
//else return str "wide"
  return input === "alligator" ? "small" : "wide"
}

//str -> one word str naming an animal, wont be empty, wont be null or undefined, will always be an animals name,

//str -> return a str "word" small if the input str is alligator (not case sensitive) else return str word "wide"

console.log(mouthSize("sheep"), "wide")
console.log(mouthSize("alligator"), "small")
