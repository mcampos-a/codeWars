//7 Kyu
//Friend or Foe?
//Fundamentals and Strings, Array


// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

//Solution

function friend(friends){
  
  //we are given the clue that we can filter the given array. If name of each string is equal to 4 then we keep it
  //Using the .filter() method we can accomplish this and then we are left with the solution.
    
  let myFriends = friends.filter((name)=>name.length===4)
  
  return myFriends
    
    
  }