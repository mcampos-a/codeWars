//8 Kyu
//FBasic data types--object
//Fundamentals

// In JavaScript, Object is one of basic data types. To define an object you can use let obj = new Object() or let obj = {}.

// You can define the object attributes during initialization, like this:

// let animal = {name: "dog"}
// you can also set/get some properties after the object definition, like this:

// let animal = {}
// animal.name = "dog"
// // or:
// animal["name"] = "dog"
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."



//Solution

function animal(obj){
//using a template string select the property value by selecting using .notation
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

