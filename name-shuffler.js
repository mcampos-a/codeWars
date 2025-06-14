//8 Kyu
//Name Shuffler

//Fundamentals

// Write a function that returns a string in which firstname is swapped with last name.

//Solution I

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}


