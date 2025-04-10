//8 Kyu
//Grasshopper - Personalized Message
//Fundamentals, strings

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'



//Solution I

function greet (name, owner) {
  //check if name param === owner param and return msg
  return name === owner ? 'Hello boss' : 'Hello guest'
}
  

//Parameters
//str1, str2 -> str1 = name, str2 = owner, cannot be empty, wont be null, always only str

//Returns
//str -> if(name===owner) return 'Hello boss'
//else return 'Hello guest'

//Example
//console.log(greet('Daniel', 'Daniel') 'Hello boss')
//console.log(greet('Daniel', 'Hector') 'Hello guest')







