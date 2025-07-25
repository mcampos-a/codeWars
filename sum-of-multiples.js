//8 Kyu
//Sum of Multiples
//Fundamentals

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers), any argument that are negative returns "INVALID"
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"



function sumMul(n,m){
//if n or m > 0 return invalid
    if(n <= 0 || m <= 0) return "INVALID"
//set up a variable to store the sum of multiples of n 
    let result = 0
//loop numbers starting at n all the way up to but excluding m and go up by n every time
    for(let i=n; i<m; i+=n){
//add n to the sum
        result += i
    }
//return the result variable
    return result
}

//num1 -> can be negative and positive, wont be empty, no null or undefined, always getting an integer
//num2 -> can be negative and positive, wont be empty, no null or undefined, always getting an integer

//num -> sum all multiples of n up to m, m is exlcuded. if n or m > 0 return "INVALID"

console.log(sumMul(2,10), 20) //2+4+6+8 = 20
console.log(sumMul(4,13), 24) //4 + 8 + 12 = 24
console.log(sumMul(3,-9), "INVALID") 



