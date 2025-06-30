//8 Kyu
//Hello, Name or World!
//Fundamentals

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World


//Solution I

function hello(name) {
//check if the name str is empty if so return hello world
  if(name===undefined) return "Hello, World!"
  if(name.length === 0){
    return "Hello, World!"
  }else{
    let resultName = name.toLowerCase()
//if we have a name then use the toLowerCase() to normalise the str and use the lsice method with the toUpperCase method to store the name
    let result = resultName.slice(0,1).toUpperCase() + resultName.slice(1)
//now return the str template using a str literal to plug in the modified name
    return `Hello, ${result}!`
  }

}


//str -> can be empty, it wont be null or undefined, it will always be a str

//str -> the names first letter toUpperCase() if no name input or input is an empty str return Hello, world

console.log(hello("john"), "Hello, John!")
console.log(hello("aliCE"), "Hello, Alice!")
console.log(hello(""), "Hello, World")