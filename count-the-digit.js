//7 Kyu
//Count the Digit
//Fundamentals

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

//Solution I

function nbDig(n, d) {
//set up emtpy variable num to keep count of how many times d shows up 
    let result = 0
//loop between 0 to n and incresase by 1 every time
    for(let i=0; i<=n; i++){
//square each number at every loop iteration 
        let square = String(i*i)
//check if the product of the square contains a d integer in it
        square.split("").forEach(el=>{
            if(el==d){
                result++
            }
        })
            
//if so add +1 to result for each time a d integer is found
        
    }
    return result

//return result 

}
    

//Parameters
//num1, num2 -> num1 >=0 and num2>=0 and <=9. Both nums never emtpy, wont be null or undefined, only alwys will be getting whole nums.

//Return
//num-> that reflects the number of times d shows up in the result of squaring nums between 0 -> n. 
//if k*k contain d -> then add 1 to a result variable per d showing up in that k*k

//Example
//console.log(nbDig(10,1), 4) since we get the following suared nums the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

