//8 Kyu
//DNA to RNA Conversion
//Fundamentals, strings

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Solution I

function DNAtoRNA(dna) {
//set up empty str to add letters
    let result =""
//loop through array once.
    for(letter of dna){
//check if each element is not "T" -> add it to result str
//else add "U" to result str
        letter != "T" ? result+= letter : result+= "U"
    }
//return result str
    return result
}
    

//Parameters
//str -> can be empty, it wont be null or undefined, only always will get a str. Inputs will only contain 'G','C','A','T'. 

//Return
//str -> that has any element === 'T' replaced by 'U'. 

//Example
//console.log(DNAtoRNA("GCAT"), "GCAU")