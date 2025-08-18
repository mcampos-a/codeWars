//6 Kyu
//Consonant Value
//Fundamentals, strings

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!
// If you like this Kata, please try:
// Word values
// Vowel-consonant lexicon



//Solution

function solve(s) {
//set up a str variable with the alphabet to reference consonant values
  let letters = "abcdefghijklmnopqrstuvwxyz";
//set up vowel str to track and see if there is a vowel in the incoming str input
  let vowels = "aeiou";
//set up a value variable to track the total value of each sub str as you look through the input str
  let value = 0;
//store the largets value substring in a variable and compare each substring to keep track of max value
   let max = 0;
//loop through input string
      for (let i = 0; i < word.length; i++) {
//grab the letter at each index
          let letter = word[i];
//check if the letter is included in the vowels str
          if (vowels.includes(letter)) {
//if so give that levver a zero value
              value = 0;
          } else {
//if its not a vowel then check the letters placement in the alphabet str and make sure to add one to follow a index starting at 1
              value += letters.indexOf(letter) + 1;
//now compare the current subtring value with the stored max value and replace max with the largest value
              max = (value > max) ? value : max;
          }
      }
//now return the max value variable
      return max;
};


//str -> of lower cased alphabet letters w/ no spaces. Only a str coming in, no empty strs coming in, never null or undefined str coming in.

//num -> summing the value of only constant str letters. Specifically, sub strings in the input str coming in. 

console.log(solve("zodiac"), 26) //z=26 , d=4 ,c=3
console.log(solve("yomama"), 25) //y=25, m=13, m=13
console.log(solve("strength"), 57) //str=19+20+18=57 ,ngth=14+7+20+8=49