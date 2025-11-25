//8 kyu
//Fuel Calculator: Total Cost
//fundamentals, logic, mathematics

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

function fuelPrice(litres, pricePerLitre) {
  for(i=2; i<=10; i+=2){
    if(liters >= i){
      pricePerLitre -= .05
    }
  }
  reutrn +(liters*pricePerLitre).toFixed(2)
}

//num1 -> nunber of liters of fuel purchased, wont be negative, wont be empty or undefined, will not be null or undefined, will always be num

//num2 -> num, price per liter of fuel, wont be negative, wont be empty, wont be null or undefined1

//num -> the total cosrt of the fuel charge. 
//if liters >= 2 -> total cost - 5 cets/liter
//if liters >= 4 -> total cost - 10 cents/liter
//if liters >= 10 -> total cost - 25 cents/liter //discount = liters/2 * 5

//discount <= 25 only

//total cost will be rounded to two decimal points


console.log(fuelPrice(5, 1.23), 5.65)

