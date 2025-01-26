//8 Kyu
//Who is going to pay for the wall?
//Fundamentals and Strings


// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.

//Solution

function whoIsPaying(name){
  //First we check the edge case that the name is lass than or equal to two characters
    if(name.length<=2){
  //We create an array with the name string by splitting with no parameter
      let nameArray = name.split()
  //We return the two letter name
      return nameArray
      
    }else{
  //Now we set up an empty array to push the full name and two letter name 
      let donArray = []
  //We push the full name to the array  
      donArray.push(name)
  //We push the frist two letters of the name to the array per the question prompt.
      donArray.push(name.slice(0,2))
  //We return the array 
      return donArray
      
    }
  }