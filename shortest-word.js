//7 Kyu
//Shortest Word
//Fundamentals

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




//Solution I

function findShort(s){
    //split str to array of words
    let words = s.split(' ')
    //map through array of words and store length of words
    let lengthOfWords = words.map((el)=>el.length)
    //sort by ascending order
    lengthOfWords.sort((a,b)=>a-b)
    //return index 0 of ordered array
    return lengthOfWords[0]
}


//Parameters
//str-> of words ,letters, no symbols, not empty str, not null

//return
//a num = shortest length of word in str

//examples
//console.log(findShort('This is a string of words'), 1)



