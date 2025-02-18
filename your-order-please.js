//6 Kyu
//Your order, please
//Fundamentals, strings


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""




//Solution I

function order(words){
  //first we split the string into an array of words
  let arr = words.split(' ')
  //we create an array we will use to sort the words based on the num in them
  let r = []
  //we loop through the array of words
  arr.forEach(word=>{
    //within the loop each word is split into an array of letters
    let x = word.split('')
    //within the loop we find the number that can be parseInt() by going through each array of letters
    let num = x.find(el=>parseInt(el))
    //then we push to our empty array, an array containing the word and the number within it as an integer
    r.push([word,parseInt(num)]) 
  })
    //now we sort the newly filled array by the 2nd element (or the index at 1) of each word/integer pair
    //we also sreplace 1 element at index 1 with an empty space using splice
  r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
    //last we join the array of sorted words and return the solution
  return r.join(' ')
}

//Solution II

function order(words){
  const numerate = (s) => s.split('').find(x => Number.isInteger(+x))
  return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
}

//Solution III

function order(words) {
  const result = [];
  const chunks = words.split(' ');
  
  for (let i = 1; i < chunks.length + 1; i++) {
    result.push(chunks.find((chunk) => chunk.includes(i)));
  }
  
  return result.join(' ');
}

//Parameters
//take in str-> each word will have a num. num determines order of return
//str can be empty, no double num in word, no symbols, no null, no funny bizz
//num -> 1 to 9, 1 is first word

//Returns
//if str.length === 0 then return "". 
//return ordered array based on num in words.

//Example
console.log(order("is2 Thi1s T4est 3a"),"Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"),"Fo1r the2 g3ood 4of th5e pe6ople")

