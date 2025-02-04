//6 Kyu
//Unique In Order
//Fundamentals, Algorithims


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//Solution I

var uniqueInOrder=function(iterable){
  //first we need an array to push the unique elements we will return
    let uniqueArr = []
    
  //now we will use a for loop to check the current element to the next for duplicates
    for(let i=0; i<iterable.length; i++){
  //check for dups
      if(iterable[i] != iterable[i+1]){
  //if the next element is not a duplicate we push to our return array
        uniqueArr.push(iterable[i])
      }
      
    }
  //we return our uniqueArr to solve the kata
    
    return uniqueArr
    
  }

//Solution II

const uniqueInOrder = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}