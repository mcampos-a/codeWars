//8 Kyu
//Classy Extentions
//fundamentals, OOP

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

//Solution

function removeRotten(bagOfFruits){
//check if the array is undefined
  if(bagOfFruits  === undefined) return []
//check if the array is null 
  if(bagOfFruits === null) return []
//check if the array is empty
  if(bagOfFruits.length === 0) return []

//loop through the array and check if each element str start with 'rotten', if so replace that str element with only the fruit name

//return new array
  return bagOfFruits.map((el)=>{
    if(el.startsWith('rotten')){
      return el.slice(6,7).toLowerCase() + el.slice(7)
    }else{
      return el
    }
  })
}


//arr -> array of strings, can be empty, can be null or undefined, will always be an array

//arr -> an array with no strs that start with rotten. if the array is null or empty return an empty arr

console.log(removeRotten(['apple', 'rottenBanana', 'apple']), ['apple', 'banana', 'apple'])

