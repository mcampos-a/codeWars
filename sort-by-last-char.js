//7 Kyu
//Sort by Last Char
//Fundamentals, strings, arrays, sortings

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//Solution


function last(x) {
  // Use the sort method with a custom comparison function
  const sortedList = x.split(' ').sort((a, b) => {
    // Get the last character of string 'a'
    const lastCharA = a[a.length - 1];
    // Get the last character of string 'b'
    const lastCharB = b[b.length - 1];

    // Compare the last characters
    if (lastCharA < lastCharB) {
      return -1; // 'a' comes first
    } else if (lastCharA > lastCharB) {
      return 1; // 'b' comes first
    } else {
      return 0; // characters are the same, maintain original order
    }
  });

  return sortedList;
}

//str -> of words, can be empty, it wont be null or undefined, will always be a str of words

//arr -> of words sorted alphabetically by the last letter in each word. If two wards end with the same letter, return them in the order they appear in the str

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])

//
