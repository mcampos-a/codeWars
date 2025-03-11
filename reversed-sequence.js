//8 Kyu
//Reversed sequence
//Fundamentals, MAthematics

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


//Solution I

const reverseSeq = n => {
  let start = n
  //set up empty array
  let sequence = []
  //loop until n>0 is no longer true
  while(n>0){
    //conditional checking if n>0 
    if(n>0){
      //push it to epmty array and subtract one from it
      sequence.push(n)
      n--
    }
  }
  //return array
  return sequence
};

//Parameters
//int-> num, can be empty, only be getting a num, no symbols, no null, no funny bizz.

//Return
//arr-> starting at n and ending at n>0

//example
//console.log(reverSeq(5), [5,4,3,2,1])

