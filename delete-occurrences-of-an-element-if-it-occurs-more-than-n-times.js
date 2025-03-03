//6 Kyu
//Delete occurrences of an element if it occurs more than n times
//Fundamentals, lists

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.



//Solution I

function deleteNth(arr,n){
  //declare a hash map to track elements in the arr
  let map = {}

  //then we will filter the original arr and compare the orruance of each element (using the map) 
  return arr.filter((el => {
  //if the element exists as a key in map add one to it
    if(map[el]){
      map[el]++
  //else assign the element as a key and set it equal to one.
    }else{
      map[el]=1
    }
  //only pass the element if the occruance in map of the element is <= n.
    return map[el]<=n
  }))
  
}

//Solution II

//declare a hash map to track elements in the arr

function deleteNth(arr,n){
  //declare a hash map to track elements in the arr
  let map = {}

  //then we will filter the original arr and compare the orruance of each element (using the map) and only keep the element
  return arr.filter((el => {
  //check if map[el] exisits if it doesnt set it equal to zero. Then add one. If it exists it will just add one
    map[el] = (map[el] || 0) +1
  //only pass the element if the occruance in map of the element is <= n.
    return map[el]<=n
  }))
}


//Parameters
//arr-> of nums, and a num that sets the occurance limit.
//no null array, array will only have nums, the array can be empty, no funny bizz
//keep original order.

//return
//arr-> with nums. If any repeats are present it can not be > than n 

//Examples
//console.log(deleteNth([20,37,20,21], 1), [20,37,21])
