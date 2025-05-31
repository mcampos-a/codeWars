//7 Kyu
//Credit card issuer checking
//Fundamentals, algorithms


// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"


//Solution I

function getIssuer(number) {
  
//set up a variable that holds only the begging number
  let check = String(number)
 let length = String(number).length
//run the number on a conditional
//if the num starts with 3 -> "AMEX"
  if(check.startsWith('34') || check.startsWith('37')){
    if(length == 15) return 'AMEX'
//if num starts with 4 -> "VISA"
  }else if(check.startsWith('4')){
    if(length == 13 || length == 16) return 'VISA'
//if num starts with 5 -> "Mastercard"
  }else if (check.startsWith('51') 
  || check.startsWith('52')
  || check.startsWith('53')
  || check.startsWith('54')
  || check.startsWith('55')){
    if(length == 16)return 'Mastercard'
//if num starts with 6 -> "Discover"
  }else if(check.startsWith('6011') && length == 16){
    return 'Discover'
//else -> "Unkown"
  }else if(length < 4){
    return 'Unknown'
  }
//if there are any undefined inputs we will return unknown again
  return 'Unknown'
}

//parameters
//num -> num will not be empty, num wont be null or undefined, num will always be a num

//return
//str-> indicating the credit card vendor.
//we know if the num starts with 3 -> "AMEX"
//if num starts with 6 -> "Discover"
//if num starts with 5 -> "Mastercard"
//if num starts with 4 -> "VISA"

//else -> "Unkown"

//example
//console.log(getIssuer(4111111111111111), "VISA")
//console.log(getIssuer(378282246310005), "AMEX")