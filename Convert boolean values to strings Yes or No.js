//8 Kyu
//Convert boolean values to strings 'Yes' or 'No'.
//Fundamentals 


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution

function boolToWord( bool ){
  //We set up a ternary operator to check if the boolean passed
  //is true if it is then we return Yes if not then we return No
    return bool == true ? 'Yes' : 'No'
  }