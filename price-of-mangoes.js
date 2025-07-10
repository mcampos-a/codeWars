//8 Kyu
//Price of Mangoes
//Fundamentals

// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

// Examples
// # 🥭 : Paid mango
// # 🆓 : Free mango

// Quantity = 2
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; no mango for free
// # 🥭🥭

// Quantity = 3
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; +1 mango for free
// # 🥭🥭🆓

// Quantity = 5
// Price = 3
// Total cost ==> 12   
// # Paid 4 mangoes for $3 per unit = $12; +1 mango for free
// # 🥭🥭🆓   🥭🥭

// Quantity = 9
// Price = 5
// Total cost ==> 30   
// # Paid 6 mangoes for $5 per unit = $30; +3 mangoes for free
// # 🥭🥭🆓   🥭🥭🆓   🥭🥭🆓


//Solution I

function mango(quantity, price){
//calculate how many mangos will be discounted. Divide the total by 3 and use Math.Floor() method the result will be the amount of mangoes discounted from the total 
    let discountMango = Math.floor(quantity/3)
//calculate the amount of mangos to pay by subracting quantity by our discounted mangoes and multilpying it by the price. Return the result
    return (quantity-discountMango) * price
}

//num1 -> amount of mangoes, can be empty, wont be null or undefined, will always be a num
//num2 -> price per mango, can be 0, wont be empty, wont be null or undefined, will laways be a num

//num -> total cost of buying mangoes. Note that every 3th mango is free.

console.log(mango(3,3), 6)
console.log(mango(5,3),12)



