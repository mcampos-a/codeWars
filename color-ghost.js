//8 Kyu
//Color Ghost
//Fundamentals, OOP

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//Solution I


// class Ghost {
//   constructor(){
//     const colors = ["white", "yellow", "purple", "red"];
//     const randomColor = Math.floor(Math.random() * colors.length)
//     this.color = colors[randomColor]
//   }
// }

//Solution II

let Ghost = function() {
  let colors = ["white", "yellow", "purple", "red"]
  this.color = colors[Math.floor(Math.random() * colors.length)]
};
