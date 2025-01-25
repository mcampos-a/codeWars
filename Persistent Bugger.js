//6 Kyu
//Persistent Bugger
//Fundamentals and Mathematics


// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//Solution

function persistence(num) {
  //First we set up a counter to keep track of the persistent times the num is greater than 1
     let i=0;
  //Since we need to loop until we get to a single digit we use a while loop. Beacuse we dont know when it will stop but we know the condition to stop
    while(num.toString().length !== 1){
  //If the length of th einterger is greater than one we will update num to the next interget multiplication by splitting it and multipying the new intergers of the result
      num = num.toString().split('').reduce((a,b)=>a*b);
  //We then add a tick to our counter since our goal is to return the multiplicative persistence.
      i++;
      
    }
  //We return our counter
    return i
  }


//Solution 2

function persistence2(num){
  if(`${num}`.length>1){
    return 1 + persistence2(`${num}`.split('').reduce((a,b)=>a*b))
  }else{
    return 0
  }


}