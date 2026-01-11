//7 Kyu
//Sum of Odd Cubed Numbers
//Fundamentals

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


//Solution 

function cubeOdd(arr) {
//set up a result variable to store the sum of odd nums
    let result = 0
//loop through the array and check if each element is a number if its not return undefined
  for (let i=0; i< arr.length; i++){
    if(typeof arr[i] != 'number'){
      return undefined
    }
    
    if(arr[i]**3 %2 != 0){
      result += Math.pow(arr[i], 3)
    }
  }
//return the result variable
    return result;
}


//arr -> of nums or str, can be empty, wont be null or undefined, will always be an array

//num -> return the sum of odd numbers. The numbers we are checking is the cube of each integer in the array. Buuut if an element within the array is not a number return undefinde

console.log(cubeOdd([1, 2, 3, 4]), 28)