//8 Kyu
//Removing Elements
//Fundamentals, Lists, Arrays


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//Solution 

function removeEveryOther(arr){
  //We know that every odd index will need to be removed
  //Using the .filter() method we check if i is an even division of 2 
    let filterArr = arr.filter((el,i) => i % 2 === 0)
  //then we return our filtered arr  
    return filterArr
    
  }


