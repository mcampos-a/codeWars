//6 Kyu
//Array.diff
//Fundamentals, Arrays, Algoruthms


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]




//Solution I

function arrayDiff(a, b) {

//we will need a loop to iteratate and check both arrays
//we use filter to create a new array and pass the unique elements IF and ONLY IF the element in b is not present. 
//the ! operator ensures the filter function gives us a flasey return when the same element is present in b.
let newArr = a.filter((element)=> !b.includes(element))
//return the new array
return newArr

  
}


//Parameters
//take two arrays, if val from one is in two remove, if val from two is in one remove.

//returns
//a single new array with filtered values from both

//examples
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

