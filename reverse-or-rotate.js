//6 Kyu
//Reverse or rotate?
//Algorithms, Strings

//The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz 
// (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. 
// Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


//Solution I

function revrot(str, sz) {
//check for edge case that the sz is <=0 or if str.length === 0 
    if(sz<=0 || str.length===0) return ""
    if(sz> str.length) return ""
// set up an empty str to store chuncks of str of seize sz
    let result = ""
//loop through the str and go up by every sz 
    for(let i=0; i<str.length; i+=sz){
//store a chuck of size sz to check for rotate or shift
        let chunck = str.slice(i,i+sz)
//check to make sure the chuck is the seize of sz if not ignore it
        if(chunck.length<sz){
            result += ""
//sum the digits of each sz chunk and check if the reduction is %2 === 0 if so,
        }else if(chunck.split("").reduce((sum, current)=> Number(sum)+Number(current),0)%2===0){
//reverse the sz chunck
            result += [...chunck].reverse().join('')
        }else{
//else pop and shift the first index of the str
            
            result += chunck.slice(1)+chunck.slice(0,1)
        }
    }
//join the result array and return it
    return result
}

//str-> of digits/nums, str can be empty, not null or undefined, only a str coming in. 
// num -> wont be empty, wont be null or undefined, only a num coming in.

//str -> cut the chuncks into the given num "sz" and check if (sum-of-digits-sz %2 === 0) then reverse the chunck else rotate it to the left by one poisiton and return the str

console.log(revort("66443875", 4), "44668753")
