//8 Kyu
//Powers of 2
//Fundamentals and Mathematics


// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Solution

function powersOfTwo(n){
  //First we set up an array that will contain our return 
    let powersOf2 = []
  //We are given the ending condition of our powers of 2.
    //so we will use a for loop. We will always stop when 
    //our index is greater than the provided n.
    for(let i=0; i<=n; i++){
  //We will iterate through every i and multiply 2 to
    //the power of each i
      let power = 2**i
  //Now we push each power to our return array  
      powersOf2.push(power)
      
    }
  //Return the array! 
    return powersOf2
    
    
  }