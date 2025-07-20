//8 Kyu
//Welcome to the City
//Fundamentals, strings

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!



function sayHello( name, city, state ) {
//set up a variable to store the full name as a str by using the .join method with a space " "
    let fullName = name.join(" ")
//use the template literal ` to return the str name variable and the rest of the arguments in a string template
    return `Hello, ${fullName}! Welcome to ${city}, ${state}`


}


//arr-> with one or more values (first and last name), wont be empty, wont be null or undefined, will always be a str
//str-> a city, wont be empty, wont be null or undefined, will always be a str
//str-> a state, wont be empty, wont be null or undefined, will always be a str

//str -> with the tempalte that looks like this : Hello, John Smith! Welcome to Phoenix, Arizona!

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!' )
