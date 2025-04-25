//8 Kyu
//Reversing Words in a String
//Fundamentals, Strings

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

//Solution I
function reverse(string){
//split str into array of words then use the .reverse() method. Finally return the new string by joinning it with a space
    return string.split(' ').reverse().join(' ')
 }

//Parameters
//str-> words. Always seprated by a space. Str can be empty, wont null, only str coming in.

//Return
//str -> with words reversed. Keep spaces. 

//Example
//console.log(reverse("Hello World"), "World Hello")












