//8 Kyu
//Filter out the geese
//Fundamentals, Arrays

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated


//Solution I
function gooseFilter (birds) {
//geese array variable containg words we want filtered out
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//use the .filter() method and use the contains() method to get a boolean to see if each element in birds is found in the geese variable.
//if it is found do not put it in the new arr.
  return birds.filter((el)=> !geese.includes(el))

  // return an array containing all of the strings in the input array except those that match strings in geese
};

//Parameters
//arr -> with words. The array can be empty, it wont be null, and will always get an array. 
//There is a variable called geese containing the lsit of strs we will filter out from solution

//Return
//arr -> filtering any str found in geese. 

//Example
//console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"])














