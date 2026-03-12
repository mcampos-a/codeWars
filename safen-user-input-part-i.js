//7 Kyu
//Folding your way to the moon
//Fundamentals


// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D


//Solution 

function htmlspecialchars(formData) {
//set up an empty str to store our new safen str
  let result = ''
//loop through the input str and check if each element str is one of the four danger strs if so replace it with the safen version, else return the current element
  for(el of formData){
    if(el === '<'){
      result+= '&lt;'
    }else if(el === '>'){
      result+= '&gt;'
    }else if(el === '\"'){
      result+= '&quot;'
    }else if(el === '&'){
      result+= '&amp;'
    }else{
      result+= el
    }
  }
//return the result safen str
  return result
}

//str -> string of words, can be empty, wont be null or undefined, will always be a str

//str-> a str that reaplces 4 specific str values with another set of str values

console.log(htmlspecialchars("<h2>Hello World</h2>"), "&lt;h2&gt;Hello World&lt;/h2&gt;")