//7 Kyu
//All Inclusive?
//Fundamentals, strings

// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true


//Solution 

function containAllRots(strng, arr) {
//loop through the length of the input str
  for (let i = 0; i < strng.length; i++) {
//check if the arr contains an indexed element of the strng word with each letter rotated.
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
//if at least one iteration is not contained return false
      return false;
    }
  }
//else return true
  return true;
}


//strng -> can be empty, wont be null or undefined, will always be a str

//boolean -> 