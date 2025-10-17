//8 Kyu
//Name on billboard
//Fundamentals, restricted, stings

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).


//Solution



function billboard(name, price = 30){
//store the length of the str in a variable
  let length = name.length
//set up a variable to store the result
  let result = 0
//loop from 1 to the length of the str
  for(let i =1; i<= length; i++){
//if price exists add that price to the result variable
    if(price){
      result += price
//else add 30 
    }else{
      result += 30
    }
  }
  //return the result variable
  return result
} 

//str -> of character, wont be empty, wont be null or undefined, will always be a str
//num -> the price of each character, can be empty, wont be null or undefined, will always be a num.

console.log(billboard("Paola Vigi"), 300)



