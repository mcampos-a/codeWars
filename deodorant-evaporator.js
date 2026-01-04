//7 Kyu
//Deodorant Evaporator
//Fundamentals, mathematics

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.


//Solution 

function evaporator(content, evapPerDay, threshold) {
//set up a counter to track the number of days in which the evaporator works
  let days = 0
//current content of material
  let currentContent = content
//put together a loop that that checks if the content ever drops below the thershold
  while (currentContent > content * (threshold/100)){
//if the content > thershold calculate the daily evaporation and subtract it from the content variable
    currentContent -= currentContent * (evapPerDay/100)
//add one to the day counter
      days++
  }
//return the day counter
  return days
}

//num1 -> the volume of a gas, wont be empty, wont be null or undefined, will always be a num
//num2 -> a percentage indicating the gas lost per day, wont be empty, wont be null or undefined, it will always be a num
//num3 -> a percentage num that indicates the threshold beyond which the evaporator is no longer useful. 

//num -> the day in which the evaporator will be out of use.

console.log(evaporator(10, 10, 5), 29)