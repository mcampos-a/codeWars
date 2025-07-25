//8 Kyu
//How old will I be in 2099?
//Fundamentals

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!



function  calculateAge(yearOfBirth, yearToCount) {
  let calculatedAge = yearToCount - yearOfBirth //2016 - 2012 = 4
  console.log(calculatedAge)
  
  if(calculatedAge === 0 ){
    return "You were born this very year!"
  }
  
  if(calculatedAge === 1){
    return `You are 1 year old.`
  }
  
  if(calculatedAge === -1){
    return `You will be born in 1 year.`
  }
  
  if(calculatedAge > 0){
    return `You are ${calculatedAge} years old.`
  }else{
    return `You will be born in ${Math.abs(calculatedAge)} years.`
  }
  
}


//num1 -> year param wont be empty, not null or undefined, this will always be a number coming in. 
//num2 -> wont be empty, not null or undefined, always be number coming in.

//str -> future dates: "You are ... year(s) old."
//str -> dates in the past: "You will be born in ... year(s)."
//str -> if num1 === num2 -> "You were born this very year!"

console.log(calculateAge(2012, 2016), "You are 4 year(s) old.")
console.log(calculateAge(2010, 1990), "You will be born in 20 year(s).")
