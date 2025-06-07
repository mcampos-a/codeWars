//7 Kyu
//The Coupon Code
//Fundamentals, Date Time, Strings, Fundamentals

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

//Solution I

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//check if the enetered code is === to the correct code. IF not return false
//check if the currentDate is <= expirationDate using the Date.parse()
  return enteredCode === correctCode && (Date.parse(currentDate) <= Date.parse(expirationDate))
}

//parameters
//str1-> code entered by customer, can be empty, wont be null or undefined, will always be a str 
//str2-> code to verify the customers entered code, wont be null or undefined, will always be a str
//str3-> current date in str format "month day, year"
//str4-> the expiration date which will mark a date entered as valid if it equals the current date

//Return
//boolean -> true if the code entered matches the verifying code, and if current date <= expiration date


//Example
//console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"), true)
//console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"), false)
