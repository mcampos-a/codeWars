//7 Kyu
//Check the Exam
//Fundamentals, Arrays

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

//Solution I

function checkExam(array1, array2) {
//set up a variable to keep track of student score
    let result = 0
//we will loop through the key array and compare it to the student array. 
    for(let i=0; i<array1.length; i++){
        //if array1[i] === array2[i] -> +4 to result variable
        if(array1[i] === array2[i]){
            result += 4
        //if array2[i] === "" => +0 to result variable
        }else if(array2[i] === ""){
            result += 0
        //if array1[i] != array2[i] -> -1 to result variable
        }else if(array1[i] != array2[i]){
            result -= 1
        }
    }
    //if result < 0 return 0
    //else return result
    return result < 0 ? 0 : result

}
    

//Parameters
//arr1, arr2 => both str letters from a to d. arr1 = key for correct answers, arr2 = students answers. arrays wont be empty and will be the same length, only arrays coming in, never null.

//Return
//num -> score of students answers. correct = = +4, incorrect = -1, blank = 0, if the score < 0 return 0

//Example

//console.log(checkExam(["a", "a", "b", "b"]  , ["a", "c", "b", "d"]), 6)











