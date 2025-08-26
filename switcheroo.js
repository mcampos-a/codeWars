//7 Kyu
//Switcheroo
//Fundamentals

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



//Solution

function switcheroo(x){
//split the str into an array
  let letterArr = x.split('')
//map through the array and check if each char is an 'a', 'b' or 'c' and subsititute accordingly. then join and return it
  return letterArr.map((el)=>{
    if(el === 'a'){
      return 'b'
    }else if(el === 'b'){
      return 'a'
    }else{
      return 'c'
    }
  }).join('')
}

//str -> a str made up of a,b,c characters, wont be empty, wont ne null or undefined, always a str coming in with only a,b,c

//str -> if the char is 'a' switch to 'b' and if the char is 'b' switch it to 'a' and leave char 'c' untouched

console.log(switcheroo('aacbb'), 'bbcaa')
console.log(switcheroo('bbbabcccaaaba'), 'aaabcccbbbab')
console.log(switcheroo('ccc'), 'ccc')


