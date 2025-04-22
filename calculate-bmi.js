//8 Kyu
//Calculate BMI
//Fundamentals

// Write function bmi that calculates body mass index 
// (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//Solution I
function bmi(weight, height) {
//calculate bmi
    let bmi = weight / height**2
//use condiional statement to return the correct str
    if(bmi <= 18.5) return "Underweight"
    if(bmi <= 25.0) return "Normal"
    if(bmi <= 30.0) return "Overweight"
    if(bmi > 30.0) return "Obese"
}

//Parameters
//num1, num2 -> num1 = weight, num2 = height. bmi = weight / height^2
//never emtpy, not null, both only always nums

//Return
//str-> if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//Example
//console.log(bmi(50, 1.80), "Underweight")











