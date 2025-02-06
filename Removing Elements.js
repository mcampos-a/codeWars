//6 Kyu
//Counting Duplicates
//Fundamentals, strings


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//Solution I

function duplicateCount(text){
    
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = text.toLowerCase().split('').sort();
  
  // this array will house the duplicated values so we can 
  // get the length of it (or the number of duplicated characters). 
  let newArray = []
  
  // set a loop for the array
  for(i = 0; i < newString.length; i++){
     // if the current element equals the following element the push it to the new array AND
     // ONLY if the new array doesn't already include the current element
     if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
         // push elements to new array
         newArray.push(newString[i])
     }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length

}


















//Solution II

function duplicateCount(text){
  //we will need a count to start at zero
  let count = 0
  //we will also need a place to add an element we checked
  let checked = []
  //and a place to compare if a duplicate already happened
  let duplicated = []
  //before we check the text we make it lower case
  text = text.toLowerCase()
  //we use a for loop to iterate through text
  for(let i = 0; i<text.length; i++){
  //we use a conditional to check if each letter is not present 
    if(checked.indexOf(text[i]) == -1){
  //if its not there we push it to the checked array
      checked.push(text[i]);
  //now if the element is already in check we will check if it in the duplicated array
    }else if(duplicated.indexOf(text[i]) == -1){
  //if the element is not in the duplicates we increase the count
      count++
  //and add the element to the duplicate array
  //this ensures that any other additional duplicate is not counted twice
      duplicated.push(text[i])
    }
  }
  //return the count
  return count
}


