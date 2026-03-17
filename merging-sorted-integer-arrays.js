//8 Kyu
//Merging sorted integer arrays
//Fundamentals


// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


//Solution 

function mergeArrays(a, b) {
  let newArr = [...a,...b]

  return newArr.filter((el,i,arr)=> arr.indexOf(el) === i).sort((a,b)=> a-b)
}
