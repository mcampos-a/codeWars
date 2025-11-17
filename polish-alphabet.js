//8 Kyu
//Polish alphabet
//Fundamentals, strings

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"




//Solution


function correctPolishLetters (string) {
//set up an empty str to store the converted letters
  let result = ''
//set up an object storing the letters
  let map = {
    'ą': 'a',
    'ć': 'c', 
    'ę': 'e', 
    'ł': 'l', 
    'ń': 'n', 
    'ó': 'o', 
    'ś': 's', 
    'ź': 'z', 
    'ż': 'z' 
  }
//loop through the input str and check if there is any Polish letters. If so, replace it with a US letter and add it to the result str
  for(let i=0; i<string.length; i++){
    if(map[string[i]]){
      result+= map[string[i]]
    }else{
      result+= string[i]
    }
  }
//return result str
  return result
}

//str -> of words with polish letters, can be empty, wont be null or undefined, will always be a str of letters

//str -> w/ all polish letters maped over as US letters

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski")


