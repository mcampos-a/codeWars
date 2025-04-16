//8 Kyu
//Remove String Spaces
//Fundamentals, strings

//Write a function that removes the spaces from the string, then return the 
// resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
	function noSpace(x){
		//split string into array with spaces then join it with no spaces and return it.
		  return x.split(" ").join("")
		}
}

//Parameters
//str-> words, numbers, special characters, and spaces. Only will get a str, never null, cam be empty

//Return
//str-> no spaces in the str

//Example
//console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')








