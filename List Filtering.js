//7 Kyu
//List Filtering
//Fundamentals, Lists, Filtering, Data Structures


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


//Solution

function filter_list(l) {
  //We will be given arrays with positive numbers and strings. We want only numbers and no strings
  //To check if an element in that array is a number we can use the typeof operator with a number return qualifier. 
  //Now we filter the incoming array l and apply our type of operator as our filtering method
    return l.filter((element=> typeof element == "number"))
  }