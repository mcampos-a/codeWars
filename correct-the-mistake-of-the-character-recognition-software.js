//8 Kyu
//Correct the mistakes of the character recognition software
//Fundamentals, strings

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
//split str into array of letters
let letters = string.split('')
//loop through array of letters
let result = letters.map(el=>{
//check if each letter is one of the given cases
//correct the case
	if(el === '5'){
		return 'S'
	}else if(el === '0'){
		return 'O'
	}else if(el === '1'){
		return 'I'
	}else{
		return el
	}
})
//join the new array and return it
return result.join('')
}

//Parameters
//str-> words with some mistakes, not empty, never null, only always a str coming in

//Return
//str -> with the following letters corrected 
//if(el == 5) return S
//if(el == 0) return O
//if(el == 1) return I

//Example
//console.log(correct("L0ND0N"), LONDON)








