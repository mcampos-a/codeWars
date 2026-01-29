//8 Kyu
//Order of Operations
//fundamentals

// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1



//Solution

//return price without vat
function excludingVatPrice(price){
//check and see if the argument is null and return -1
  if(price === null) return -1
//calculate the vat and remove it. argument/ x = 15/100    x = argument / (15/100)
  return +(price / (115/100)).toFixed(2)
}

//num -> a number reflecting the price of an item with vat included, wont be empty, can be null, wont be undefined, will always be a num or null coming in

//num -> the base value of an item as a number without the vat

console.log(excludingVatPrice(230), 200)