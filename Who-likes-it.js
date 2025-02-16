//6 Kyu
//Who likes it?
//Fundamentals, strings


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.




//Solution I

function likes(names) {
//we want to know array length
const arrLength = names.length
//set up conditional for the 5 senarios 
//loop through array to pull names and add them to template string
if(arrLength == 0){
  return 'no one likes this'
}else if(arrLength == 1){
  return `${names[0]} likes this`
}else if(arrLength == 2){
  return `${names[0]} and ${names[1]} like this`
}else if(arrLength == 3){
  return `${names[0]}, ${names[1]} and ${names[2]} like this`
}else if(arrLength >= 4){
  return `${names[0]}, ${names[1]} and ${arrLength-2} others like this`
}

}


//Parameters
//array -> w/str, can be empty arr, no nums, no symbols, no funny bizz

//Results
//return -> str w/ names in arr
//if array.length > 4 the template msg will only show first two elements of array plus msg
//if array.length = 3 then show all three names plus msg
//if array.length = 2 -> show two names liked it
//if array.length =1 -> show the name plus msg

//Examples
//console.log(likes(["Peter"]), "Peter likes this")
//console.log(likes(["Alex","Jacob","Mark","Max"]),"Alex, Jacob and 2 others like this")

