//7 Kyu
//Remove anchor from URL
//Fundamentals, strings, regular expression

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"



//Solution

function removeUrlAnchor(url){
//split the url into an array of elements
  let urlArr = url.split('')
//set up an empty str to store the new str
  let newUrl = ''
//loop through the str and check if there is any # if there is any slice out from the # to the rest of the str
  for(let i=0; i<urlArr.length; i++){
    if(urlArr[i] !== '#'){
      newUrl+= url[i]
    }else{
      urlArr.splice(urlArr[i])
    }
  }
//return the result str
  return newUrl
}

//str -> url link in str format, it wont be empty, wont be null or undefined, will always be a str

//str -> return a str that removes the # and everything else after it. 

console.log(removeUrlAnchor("www.codewars.com#about"), "www.codewars.com")
