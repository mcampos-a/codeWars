//8 Kyu
//Returning Strings
//Fundamentals, Lists, Arrays

// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


//Solution I

function greet(name){
  //use a template string to inlcude the given string name as a variable
  return `Hello, ${name} how are you doing today?`

}

//Parameters
//str-> as name. str wont be empty, only taking str

//Return
//str-> "Hello, <name> how are you doing today?"

//Example
//console.log(greet('Max'), "Hello, Max how are you doing today?")