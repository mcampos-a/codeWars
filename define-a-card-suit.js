//8 Kyu
//Define a card suit
//Fundamentals, strings

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



function defineSuit(card) {
//check the last element of the str for each suit of the card and return the name of the suit in lower case
  let suit =  card.length-1
  if(card[suit]=== '♣') return 'clubs'
  if(card[suit]=== '♦') return 'diamonds'
  if(card[suit]=== '♥') return 'hearts'
  if(card[suit]=== '♠') return 'spades'

}


//str -> wont be empty, wont be null or undefined, will always be a str with a number and a suit

//str -> the suit of the card in a lowercase str

console.log(defineSuit('3♥'), 'hearts')