//7 Kyu
//Find count of most frequent item in an array
//Fundamentals, data structures

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


//Solution 

function mostFrequentItemCount(collection) {
//set up an empty object to store the elment as a key and the count as the value
  let map = {}
//loop through arr and build the map
  for(let i =0; i<collection.length; i++){
    if(map[collection[i]]){
      map[collection[i]]++
    }else{
      map[collection[i]] = 1
    }
  } 
//conver the values of map to an array using Object.values(), spred the array as a parameter for Math.max to get the highest value in the arr
  const mostFrequent = Math.max(...Object.values(map))
//return the largest count
  return mostFrequent
}

//arr-> an arr of nums, cant be empty, wont be null or undefined, will always be an array of nums

//num -> the count of the highest occurring elements in the array.

console.log(mostFrequentItemCount([1,2,3,4,1,1]), 3)
