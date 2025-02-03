//8 Kyu
//If you cant sleep, just count sheep!!
//Fundamentals, strings


// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Solution

var countSheep = function (num){
  //First we set up a conditional to check for the edge case that the count is zero or a negative num
    if(num<=0){
  //if zero or less we return an empty string
      return ''
    }else{
  //if num is >0 we set up a count varbale to hold the number of sheep we are counting
      let count = ''
  //we iterate with a for loop to create a sheep count string that stops at the number provided.
      for(let i =1; i<=num; i++){
  //at each iteration starting at one we add the sheep count string to count
          count += `${i} sheep...`
    
      }
  //We return the count
      return count 
    }
   
  }