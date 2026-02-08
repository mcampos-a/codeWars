//8 Kyu
//Did she say hallo
//fundamentals

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests



//Solution

function validateHello(greetings) {
  const validGreetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const lowerCaseGreetings = greetings.toLowerCase(); // Convert input to lowercase once
//loop through array of greetings and check if any of them is found in the greetings str
  for (let i = 0; i < validGreetings.length; i++) {
    if (lowerCaseGreetings.includes(validGreetings[i])) {
      return true; // Return true as soon as a greeting is found
    }
  }

  return false; // Return false if no greeting is found after checking all
}

//str -> a str word, wont be null or undefined, will always be a str

//boolean -> if the inout str is contained in the array return true, else false

console.log(validateHello('ahoj'), true)