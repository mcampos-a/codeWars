//8 Kyu
//How many lightsabers do you own?
//Fundamentals

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18


//Solution I

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0
}

//str -> str names coming in, can be empty str, wont be null or undefined, always a str

//num -> if name === "Zach" return 18 else return 0

console.log(howManyLightsabersDoYouOwn("Chris"), 0)
console.log(howManyLightsabersDoYouOwn("Zach"), 18)
