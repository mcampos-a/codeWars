//8 Kyu
//Tip Calculator
//Fundamentals

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.



//Solution

function calculateTip(amount, rating) {
//create a variable to store the percenate of each rating
  let percentage 
//check what rating will be used
  if(rating.toLowerCase() === "terrible"){
    return 0
  }else if(rating.toLowerCase() === "poor"){
    percentage = 0.05
  }else if(rating.toLowerCase() === "good"){
    percentage = 0.1
  }else if(rating.toLowerCase() === "great"){
    percentage = 0.15
  }else if(rating.toLowerCase() === "excellent"){
    percentage = 0.2
  }else{
    return "Rating not recognised"
  }
//calcualte the tip by multipling the total amount of the bill by the rating percentage
  return Math.ceil(amount * percentage)
}

//num -> the total cost of the bill, wont be empty, wont be null or undefined, will always be a um
//str -> the rating given by the customer. Can be one of six ratings. Can be empty, wont be null or undefined, will always be a string

//num -> the tip amount based on the total cost of the bill time sthe percentage of each rating

console.log(calculateTip(20, "Exellent"), 4)





