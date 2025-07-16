//7 Kyu
//Maximum Product
//Fundamentals, Arrays

// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
// 2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 

//  −2∗7=−14

function adjacentElementsProduct(array) {
//set up a variable to track the product and compare as we loop through the array
  let result = null
//loop through the array
  array.forEach((el,i,arr)=>{
//multiply the element at i times i+1 
    let product = el * arr[i+1]
//check if the product is > the check varaible. If so reassign the variable to the larger product else continue to the next element.
    if(result === null){
      result = product
    }else if(product > result){
      result = product
    }
  })
//return the check variable
  return result
}

//arr -> arr.length >= 2, wont be null or undefined, only arrays with positive and negative coming in

//num -> maximum product of two element nums that are next to each other. 

console.log(adjacentElementsProduct([1,2,3]), 6)
console.log(adjacentElementsProduct([3,-7,10,4,-20]), 40) // -21, -70, 40, -80

