//8 Kyu
//Grasshoper - Debug sayHello
//Fundamentals, Arrays

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock



//Solution I

function sayHello(name) {
  //use template string to use the name argument in the return msg
  return `Hello, ${name}`
}


//Parameters
//str-> names, can be empty, not null, no nums, no arr, no symbols, no funny bizz?

//Return
//str-> "Hello, <name>", keep capitalization and special chars

//Examples
//console.log(sayHello('Jimmy'), 'Hello, Jimmy')


