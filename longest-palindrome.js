//6 Kyu
//Longest Palindrome
//Fundamentals


// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0




//Solution 

function longestPalindrome(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(str.split('').reverse().join('') == str && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

//str -> a str word that may or may not have palindrome sub strings, can be empty, wont be null or undefined, will always be str.

//num -> the length of the longest substring in the given str word that is the same in reverse.

console.log(longestPalindrome('zzboobcd'), 4) //the substring 'boob' is a palindrome and is the longest substring