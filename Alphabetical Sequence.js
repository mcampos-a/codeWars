//7 Kyu
//Alphabetic Sequence

// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

// Example
// "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
// Technical Details
// The string will include only letters.
// The first letter of each sequence is uppercase followed by n-1 lowercase.
// Each sequence is separated with a comma.
// Return value needs to be a string.

// let str = 'zpglnrxqenu'

// console.log( str.map((letter)=>letter.charCodeAt()))

function alphaSeq (str) {
  //First we convert it to lower case to later Capitilize the first character.
  //We split it with a '' to make sure we grab each individual character.
  //Now we sort the functon (no sort function needed since we want them in alphabetic order)
  let sorted=str.toLowerCase().split('').sort();
  //Then we iterate through the sorted array and find each characters 
  let repeating=sorted.map(v=>v.charCodeAt()-96);
  //Finally, we iterate through each char of the sorted array and begin creating the Alphabetic sequence.
  //using the .repreat() method and the repeating array index we select how many times we repeat the letter.
  //We grab the first letter of the repeated elemebt and make it a capilized letter
  //then we concatenate it with the rest of the repeated sequence using the slice (1)
  //lastly we join the array with a (,) and make it a string again
  
  return sorted.map((v,i)=>v.repeat(repeating[i]).slice(0,1).toUpperCase()+
                           v.repeat(repeating[i]).slice(1)).join(',');
}