//8 Kyu
//Total amount of points
//Fundamentals, arrays, strings

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//Solution I

function points(games) {
//set up variable to track points gained after each match
    let result = 0
//loop through array along the length of the array
    games.forEach(el => {
    //convert strnums to nums and compare with the given rules
    //update result variable
        Number(el[0]) > Number(el[2]) ? result += 3 : Number(el[0]) < Number(el[2]) ? result += 0 : result++
    })
//return result variable
    return result
}
    

//Parameters
//arr -> strs, never empty and will have 10 elements for length, not null, only always will recieve strs in this format: "x:y"
// 0 <= x <= 4
// 0 <= y <= 4

//Return
//num -> points scored for each match/game. 
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

//Example
//console.log(points(["3:1", "2:2", "0:1", "3:3", "2:1", "3:0", "4:3", "1:3", "2:3"]), 14)


