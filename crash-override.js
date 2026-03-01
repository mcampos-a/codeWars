//8 Kyu
//Crash Override
//Fundamentals, strings


// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.


//Solution 

function aliasGen(first, last){
//set up an alphabet variable to check if the first letter of each input str is found there
  let alph = "ABCDEFGHIJKLMNOPQRSTQUVWXYZ"
//check if we are missing letters on the first element of the input str if not a letter found in the alph variable return 'Your name must start with a letter from A- Z'
  if(alph.indexOf(first[0].toUpperCase()) === -1 || alph.indexOf(last[0].toUpperCase()) === -1) return "Your name must start with a letter from A - Z."

//now set up a str to store out result variable 
  let result = ""
//grab the alias from the bojects given using the first capital letter of each input str
  result+= firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
  
//return the result str
  return result
}

//str -> str of letters that represent a first name, will always be str, wont be null or undefined
//str2 -> str of letters that represnt a last name, wont be null or undefined, will always be a str

//str -> a str nickname built from the first letter of both input str. Must reference the two given obejcts to select the nickname based ont he first letter of both input strs. If the firt character is not a latter from A-Z return given str

console.log(aliasGen("Mike", "Millington"), "Malware Mike")