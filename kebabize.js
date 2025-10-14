//8 Kyu
//Bin to Decimal
//Fundamentals, binary

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters


//Solution



function kebabize(str) { 
//set up a variable to store the result str
  let result = ''
  let counter = 0
  let numbers = "0123456789" 
//loop through the str and check if there are any upper case characters
  for(let i=0; i<str.length; i++){
//if so, add a "-" and that character in lowercase to the str
    
    if(numbers.includes(str[i])){
      result += ''
    }else if(counter===0 && str[i] === str[i].toUpperCase()){
      counter++
      result += `${str[i].toLowerCase()}`
    }else if(str[i] === str[i].toUpperCase()){
      counter++
      result += `-${str[i].toLowerCase()}`
    }else if(str[i] === str[i].toLowerCase()){
      result += str[i]
      counter++
    }
  }
//return the result str
  return result
}

//str -> wont be empty, wont be null or undefined, will always be a str coming in. 

//str -> a str that replaces upper case with a dash and lower case letter

console.log(kebabize("camelsHaveThreeHumps"), "camels-have-three-humps")





